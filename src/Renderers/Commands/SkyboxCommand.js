import { mat3, mat4 } from 'gl-matrix';
import { DepthFunction, DrawingMode } from '../../StateBlock';
import Geometry from '../../Geometry';
import { Program } from '../../Program';
import RenderCommand from './RenderCommand';
import Type from '../../Types';

/**
 * Draw Skyboxes
 *
 * @category Rendering
 * @extends {RenderCommand}
 */
class SkyboxCommand extends RenderCommand {
    /**
     * Constructor
     *
     * @param {Skybox} skybox A Skybox instance
     */
    constructor(skybox) {
        super();

        /**
         * The Skybox instance to draw
         *
         * @type {Skybox}
         * @private
         */
        this.skybox = skybox;
    }

    /**
     * Execute the command
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     */
    execute(renderAPI) {
        const texture = this.skybox.getTexture();
        if (!texture || !texture.isReady()) {
            return;
        }

        // Use custom or default program.
        let program = this.skybox.getCustomProgram();
        if (!program) {
            if (SkyboxCommand.isDefaultProgramLoaded()) {
                program = SkyboxCommand.sharedProgram;
            } else {
                return;
            }
        }

        // Program
        const programCode = renderAPI.setProgram(program);
        if (programCode === -1) {
            return;
        }

        // Must send/update shared uniforms
        if (programCode === 1) {
            renderAPI.setUniform(program, 'projection', Type.Matrix, renderAPI.getActiveCamera().getProjectionMatrix());

            // Tip: Remove last row and col from the matrix to get an infinite Skybox
            const viewMatrix = renderAPI.getActiveCamera().getViewMatrix();
            const m = mat3.fromMat4([], viewMatrix);

            renderAPI.setUniform(program, 'view', Type.Matrix, this.toMat4(m));
        }

        // Send uniforms
        renderAPI.setUniform(program, 'uModel', Type.Matrix, this.skybox.getTransformationMatrix());

        // States and apparence
        renderAPI.setDepthState(false, false, DepthFunction.Less);
        renderAPI.bindTextureCube(0, texture);

        // Bind geometry
        renderAPI.setGeometry(SkyboxCommand.sharedGeometry);

        // Draw object
        renderAPI.drawIndexedPrimitives(DrawingMode.Triangles, 0, SkyboxCommand.sharedGeometry.getIndexCount());
    }

    toMat4(mat) {
        const result = mat4.create();
        result[15] = 1; result[14] = 0; result[13] = 0; result[12] = 0;
        result[11] = 0; result[10] = mat[8]; result[9] = mat[7]; result[8] = mat[6];
        result[7] = 0; result[6] = mat[5]; result[5] = mat[4]; result[4] = mat[3];
        result[3] = 0; result[2] = mat[2]; result[1] = mat[1]; result[0] = mat[0];

        return result;
    }

    /**
     * Check if the default program is ready, otherwise the function load it
     *
     * @return {boolean} Return true if the default program is loaded
     */
    static isDefaultProgramLoaded() {
        if (SkyboxCommand.sharedProgram.isReady()) {
            return true;
        }

        const vertexShader = `
        uniform mat4 projection;
        uniform mat4 view;
        uniform mat4 uModel;

        attribute vec4 aPosition;
        attribute vec4 aColor;
        varying vec4 vColor;
        varying vec4 vUV;

        void main() {
            gl_Position = projection * view * aPosition;
            vColor      = aColor;
            vUV         = aPosition;
        }`;

        const fragmentShader = `
        uniform lowp samplerCube skybox;
        varying lowp vec4 vColor;
        varying mediump vec4 vUV;

        void main() {
            gl_FragColor = textureCube(skybox, vUV.xyz) * vColor;
        }`;

        SkyboxCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);

        return false;
    }
}

/**
 * Default geometry for skybox rendering
 *
 * @type {Geometry}
 * @private
 */
SkyboxCommand.sharedGeometry = Geometry.createCube(0.5, 0.5, 0.5);

/**
 * Default program for skybox rendering
 *
 * @type {Program}
 * @private
 */
SkyboxCommand.sharedProgram = new Program();

export default SkyboxCommand;
