import TextureInterface from './TextureInterface';
import Image from '../Image';

/**
 * A texture
 *
 * @category Textures
 * @extends {TextureInterface}
 */
class Texture extends TextureInterface {
    /**
     * Constructor
     *
     * @param {string} path Path to the texture file
     */
    constructor(path = '') {
        super();

        /**
         * Image instance
         *
         * @type {Image}
         * @private
         */
        this.image = null;

        /**
         * Repeat the texture
         *
         * @type {boolean}
         * @private
         */
        this.repeat = true;

        /**
         * Smooth the texture
         *
         * @type {boolean}
         * @private
         */
        this.smooth = true;

        if (path.length) {
            this.loadFromFile(path);
        }
    }

    /**
     * Load texture from a file
     *
     * @param {string} path Path to the texture file
     * @return {Texture} A reference to the instance
     */
    loadFromFile(path) {
        this.image = new Image();
        this.image.loadFromFile(path);

        return this;
    }

    /**
     * Load texture from an Image
     *
     * @param {Image} image An Image instance
     * @return {Texture} A reference to the instance
     */
    loadFromImage(image) {
        this.image = image;

        return this;
    }

    /**
     * Repeat the texture
     *
     * @param {boolean} value True to repeat, otherwise false
     * @return {Texture} A reference to the instance
     */
    setRepeated(value) {
        this.repeat = value;

        return this;
    }

    /**
     * Smooth the texture
     *
     * @param {boolean} value True to smooth, otherwise false
     * @return {Texture} A reference to the instance
     */
    setSmooth(value) {
        this.smooth = value;

        return this;
    }

    /**
     * Get image instance
     *
     * @return {?Image} An Image instance
     */
    getImage() {
        return this.image;
    }

    /**
     * Indicate if texture is ready
     *
     * @return {boolean} True if the texture is ready to be use
     */
    isReady() {
        if (!this.image) {
            return false;
        }

        const textureSize = this.image.getSize();
        if (textureSize[0] === 0 || textureSize[1] === 0) {
            return false;
        }

        return true;
    }

    /**
     * Indicate if the texture is repeated
     *
     * @return {boolean} True if the texture is repeated
     * @override
     */
    isRepeated() {
        return this.repeat;
    }

    /**
     * Indicate if the texture is smoothed
     *
     * @return {boolean} True if the texture is smoothed
     * @override
     */
    isSmoothed() {
        return this.smooth;
    }
}

export default Texture;
