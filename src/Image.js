/**
 * An image
 * Use a weird name due to the lack of namespace in Javascript :(
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Img
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * Native instance
         *
         * @type {Image}
         * @private
         */
        this.data = new Image();

        /**
         * Height
         *
         * @type {number}
         * @private
         */
        this.height = 0;

        /**
         * Pixels
         *
         * @type {Uint8Array}
         * @private
         */
        this.pixels = null;

        /**
         * Status
         *
         * @type {Img.Status}
         * @private
         */
        this.status = Img.Status.Unload;

        /**
         * Width
         *
         * @type {number}
         * @private
         */
        this.width = 0;
    }

    /**
     * Load image from a file
     *
     * @param {string} path Path to the image file
     */
    loadFromFile(path)
    {
        this.data.onload = () =>
        {
            this.status = Img.Status.Loaded;
            this.width  = this.data.width;
            this.height = this.data.height;
            this.pixels = null;
        };

        this.data.src = path;
    }

    /**
     * Create a new image
     *
     * @param {number} width Image's width
     * @param {number} height Image's height
     * @param {Uint8Array?} data An array with pixels (r, g, b, a)
     */
    create(width, height, data = null)
    {
        this.pixels = data ? data : new Uint8Array(width * height * 4);
        this.data   = null;
        this.width  = width;
        this.height = height;
        this.status = Img.Status.Loaded;
    }

    /**
     * Get image's dimensions
     *
     * @return {Array.<number>} Image's width and height in pixel
     */
    getSize()
    {
        return [this.width, this.height];
    }

    /**
     * Get Image's data
     *
     * @return {Image|Uint8Array} A native Image object or an array depending method use to load the image
     */
    getData()
    {
        return this.data || this.pixels;
    }

    /**
     * Indicate if the image is ready to be use
     *
     * @return {boolean} True if image is ready, otherwise false
     */
    isReady()
    {
        return (this.status == Img.Status.Loaded);
    }
}

/**
 * Status
 *
 * @enum {number}
 */
Img.Status = { Unload: 0, Loading: 1, Loaded: 2 };
