goog.provide('Lemon.Image');

/**
 * An image.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Image = function() 
{
    /**
    * Javascript instance.
    * @type {Image}
    * @private
    */
    this.data = new Image();

    /**
    * Height.
    * @type {number}
    * @private
    */
    this.height = 0;

    /**
    * Pixels.
    * @type {Uint8Array}
    * @private
    */
    this.pixels = null;

    /**
    * Status.
    * @type {Lemon.Image.Status}
    * @private
    */
    this.status = Lemon.Image.Status.Unload;

    /**
    * Width.
    * @type {number}
    * @private
    */
    this.width = 0;
};

/**
 * Status.
 * @enum {number}.
 */
Lemon.Image.Status = { Unload: 0, Loading: 1, Loaded: 2 };

/**
 * Load image from a file.
 * @param {string} path Path to the image file.
 */
Lemon.Image.prototype.loadFromFile = function( path ) 
{
    var _this = this;
    this.data.onload = function() 
    {
        _this.status = Lemon.Image.Status.Loaded;
        _this.width  = _this.data.width;
        _this.height = _this.data.height;
        _this.pixels = null;
    };
    this.data.src = path;
};

/**
 * Create a new image.
 * @param {number} width Image's width.
 * @param {number} height Image's height.
 * @param {Uint8Array} data An array with pixels (r, g, b, a).
 */
Lemon.Image.prototype.create = function( width, height, data ) 
{
    this.pixels = data ? data : new Uint8Array(width * height * 4);
    this.data   = null;
    this.width  = width;
    this.height = height;
    this.status = Lemon.Image.Status.Loaded;
};

/**
 * Get image's dimensions.
 * @return {Array.<number>} Image's width and height in pixel.
 */
Lemon.Image.prototype.getSize = function() 
{
    return [this.width, this.height];
};

/**
 * Get Image's data.
 * @return {Image|Uint8Array} A javascript Image object or an array depending method use to load the image.
 */
Lemon.Image.prototype.getData = function() 
{
    return this.data || this.pixels;
};

/**
 * Say if image is ready.
 * @return {boolean} True if image is ready.
 */
Lemon.Image.prototype.isReady = function() 
{
    return (this.status == Lemon.Image.Status.Loaded);
};
