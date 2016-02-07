import {TextureInterface} from './TextureInterface.js';
import {Img as Image} from '../Image.js';

/**
 * A texture
 *
 * @extends {TextureInterface}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Texture extends TextureInterface
{
    /**
     * Constructor
     *
     * @param {string} path Path to the texture file
     */
    constructor(path = '')
    {
        super()

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

        if (path.length)
            this.loadFromFile(path);
    }

    /**
     * Load texture from a file
     *
     * @param {string} path Path to the texture file
     */
    loadFromFile(path)
    {
        this.image = new Image();
        this.image.loadFromFile(path);
    }

    /**
     * Load texture from an Image
     *
     * @param {Image} image An Image instance
     */
    loadFromImage(image)
    {
        this.image = image;
    }

    /**
     * Repeat the texture
     *
     * @param {boolean} value True to repeat, otherwise false
     */
    setRepeated(value)
    {
        this.repeat = value;
    }

    /**
     * Smooth the texture
     *
     * @param {boolean} value True to smooth, otherwise false
     */
    setSmooth(value)
    {
        this.smooth = value;
    }

    /**
     * Get image instance
     *
     * @return {?Image} An Image instance
     */
    getImage()
    {
        return this.image;
    }

    /**
     * Indicate if texture is ready
     *
     * @return {boolean} True if the texture is ready to be use
     */
    isReady()
    {
        if (!this.image)
            return false;

        let textureSize = this.image.getSize();
        if (textureSize[0] === 0 || textureSize[1] === 0)
            return false;

        return true;
    }

    /**
     * Indicate if the texture is repeated
     *
     * @return {boolean} True if the texture is repeated
     * @override
     */
    isRepeated()
    {
        return this.repeat;
    }

    /**
     * Indicate if the texture is smoothed
     *
     * @return {boolean} True if the texture is smoothed
     * @override
     */
    isSmoothed()
    {
        return this.smooth;
    }
}