import { DepthFunction, DrawingMode } from '../../StateBlock';
import Geometry from '../../Geometry';
import { Program } from '../../Program';
import RenderCommand from './RenderCommand';
import TextureVideo from '../../Textures/TextureVideo';
import Type from '../../Types';

/**
 * Draw sprites
 *
 * @category Rendering
 * @extends {RenderCommand}
 */
class SpriteCommand extends RenderCommand {
    /**
     * Constructor
     *
     * @param {Sprite} sprite A Sprite instance
     */
    constructor(sprite) {
        super();

        /**
         * The Sprite instance to draw
         *
         * @type {Sprite}
         * @private
         */
        this.sprite = sprite;
    }

    /**
     * Execute the command
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     */
    execute(renderAPI) {
        SpriteCommand.draw(renderAPI, this.sprite);
    }

    /**
     * Draw the given sprite
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     * @param {Sprite} sprite Sprite instance to draw
     */
    static draw(renderAPI, sprite) {
        const spriteTexture = sprite.getTexture();
        if (!spriteTexture.isReady()) {
            return;
        }

        // Use custom or default program
        let program = sprite.getCustomProgram();
        if (!program) {
            if (SpriteCommand.isDefaultProgramLoaded()) {
                program = SpriteCommand.sharedProgram;
            } else {
                return;
            }
        }

        // Program.
        const programCode = renderAPI.setProgram(program);
        if (programCode === -1) {
            return;
        }

        const spriteRect = sprite.getTextureRect();
        const spriteSize = sprite.getSize();

        // Must send/update shared uniforms
        if (programCode === 1) {
            renderAPI.setUniform(program, 'uCamera', Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());
        }

        // Send uniforms
        renderAPI.setUniform(program, 'uModel', Type.Matrix, sprite.getTransformationMatrix());

        // States and apparence
        renderAPI.setBlendMode(sprite.getBlendMode());
        renderAPI.setDepthState(true, true, DepthFunction.Less);
        renderAPI.bindTexture(0, spriteTexture);

        // Set visible area
        let uvs = null;
        if (spriteTexture instanceof TextureVideo) {
            uvs = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]);
        } else {
            const textureSize = spriteTexture.getImage().getSize();

            const x1 = spriteRect[0] / textureSize[0];
            const y1 = (spriteRect[1] + spriteRect[3]) / textureSize[1];
            let x2 = (spriteRect[0] + spriteRect[2]) / textureSize[0];
            let y2 = spriteRect[1] / textureSize[1];

            if (spriteRect[2] === 0 && spriteRect[3] === 0) {
                x2 = 1.0;
                y2 = 1.0;
            }

            uvs = new Float32Array([x1, y1, x1, y2, x2, y1, x2, y2]);
        }
        SpriteCommand.sharedGeometry.setTextureUVs(uvs);

        // Set color
        const spriteColor = sprite.getColor();
        const colors = new Float32Array([
            spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a,
            spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a,
            spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a,
            spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a,
        ]);
        SpriteCommand.sharedGeometry.setColors(colors);

        // Set positions
        const positions = new Float32Array([
            -spriteSize[0], -spriteSize[1], 0,
            -spriteSize[0], spriteSize[1], 0,
            spriteSize[0], -spriteSize[1], 0,
            spriteSize[0], spriteSize[1], 0,
        ]);
        SpriteCommand.sharedGeometry.setPositions(positions);

        // Bind geometry
        renderAPI.setGeometry(SpriteCommand.sharedGeometry);

        // Draw object
        renderAPI.drawIndexedPrimitives(DrawingMode.TrianglesStrip, 0, 4);
    }

    /**
     * Check if the default program is ready, otherwise the function load it
     *
     * @return {boolean} Return true if the default program is loaded
     */
    static isDefaultProgramLoaded() {
        // Everything is ok?
        if (SpriteCommand.sharedProgram.isReady()) {
            return true;
        }

        const vertexShader = `
        uniform mat4 uCamera;
        uniform mat4 uModel;
        attribute vec4 aPosition;
        attribute vec4 aColor;
        attribute vec2 aTexCoord;
        varying vec4 vColor;
        varying vec2 vUV;

        void main() {
            gl_Position = (uCamera * uModel) * aPosition;
            vColor      = aColor;
            vUV         = aTexCoord;
        }`;

        const fragmentShader = `
        uniform lowp sampler2D texture;
        varying lowp vec4 vColor;
        varying mediump vec2 vUV;

        void main() {
            gl_FragColor = texture2D(texture, vUV) * vColor;
        }`;
        SpriteCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);

        return false;
    }

    /**
     * Indicates if the command concern an opaque element
     *
     * @return {boolean} True if command must be in the opaque queue
     */
    isOpaque() {
        return false;
    }
}

/**
 * Default geometry for sprite rendering
 *
 * @type {Geometry}
 * @private
 */
SpriteCommand.sharedGeometry = Geometry.createRectangle(0.5, 0.5);

/**
 * Default program for sprite rendering
 *
 * @type {Program}
 * @private
 */
SpriteCommand.sharedProgram = new Program();

export default SpriteCommand;
