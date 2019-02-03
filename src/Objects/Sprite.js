import BlendMode from '../BlendMode';
import Color from '../Color';
import Drawable from './Drawable';
import SpriteCommand from '../Renderers/Commands/SpriteCommand';

/**
 * A sprite
 *
 * @category Drawables
 * @description Draw 2D textured element efficiently.
 * @extends {Drawable}
 */
class Sprite extends Drawable {
    /**
     * Constructor
     *
     * @param {TextureInterface} [texture] Can be a Texture or a TextureVideo
     */
    constructor(texture = null) {
        super();

        /**
         * Blend mode
         *
         * @type {BlendMode}
         * @private
         */
        this.blendMode = new BlendMode(BlendMode.Mode.Alpha);

        /**
         * Color
         *
         * @type {Color}
         * @private
         */
        this.color = new Color(255, 255, 255, 255);

        /**
         * Texture's area to show.
         * - Two first values represents x and y offset
         * - Two last values represents width and height (relative to offset)
         *
         * @type {Array.<number>}
         * @private
         */
        this.rect = [0.0, 0.0, 0.0, 0.0];

        /**
         * Size
         *
         * @type {Array.<number>}
         * @private
         */
        this.size = [0.5, 0.5];

        /**
         * Program
         *
         * @type {Program}
         * @private
         */
        this.customProgram = null;

        /**
         * Texture
         *
         * @type {TextureInterface}
         * @private
         */
        this.texture = texture;
    }

    /**
     * Set blend mode to use
     *
     * @param {BlendMode} blendMode A BlendMode instance
     * @return {Sprite} A reference to the instance
     */
    setBlendMode(blendMode) {
        this.blendMode = blendMode;

        return this;
    }

    /**
     * Set program to use
     *
     * @param {number} r Red color in the range [0-255]
     * @param {number} g Green color in the range [0-255]
     * @param {number} b Blue color in the range [0-255]
     * @param {number} [a] Opacity in the range [0-255]
     * @return {Sprite} A reference to the instance
     */
    setColor(r, g, b, a = 255) {
        this.color.set(r, g, b, a);

        return this;
    }

    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget) {
        if (this.texture) {
            renderTarget.getActiveTask().addCommand(new SpriteCommand(this));
        }
    }

    /**
     * Set program to use
     *
     * @param {Program} program A Program instance
     * @return {Sprite} A reference to the instance
     */
    setCustomProgram(program) {
        this.customProgram = program;

        return this;
    }

    /**
     * Set sprite's size
     *
     * @param {number} x Size on X
     * @param {number} y Size on Y
     * @return {Sprite} A reference to the instance
     */
    setSize(x, y) {
        this.size[0] = x;
        this.size[1] = y;

        return this;
    }

    /**
     * Set texture to use
     *
     * @param {TextureInterface} texture Can be a Texture or a TextureVideo
     * @return {Sprite} A reference to the instance
     */
    setTexture(texture) {
        this.texture = texture;

        return this;
    }

    /**
     * Set texture's area to show
     *
     * @param {number} x Start position on x
     * @param {number} y Start position on y
     * @param {number} w Area's width
     * @param {number} h Area's height
     * @return {Sprite} A reference to the instance
     */
    setTextureRect(x, y, w, h) {
        this.rect = [x, y, w, h];

        return this;
    }

    /**
     * Get sprite's blend mode
     *
     * @return {BlendMode} A BlendMode instance
     */
    getBlendMode() {
        return this.blendMode;
    }

    /**
     * Get sprite's color
     *
     * @return {Color} A Color instance
     */
    getColor() {
        return this.color;
    }

    /**
     * Get program
     *
     * @return {?Program} A Program instance or null if the sprite use the default program
     */
    getCustomProgram() {
        return this.customProgram;
    }

    /**
     * Get size
     *
     * @return {Array.<number>} An array with index 0 for size on X and index 1 for size on y
     */
    getSize() {
        return this.size;
    }

    /**
     * Get texture
     *
     * @return {TextureInterface} A texture
     */
    getTexture() {
        return this.texture;
    }

    /**
     * Get texture's area to show
     *
     * @return {Array.<number>} An array representing area to show (x, y, w, h)
     */
    getTextureRect() {
        return this.rect;
    }
}

export default Sprite;
