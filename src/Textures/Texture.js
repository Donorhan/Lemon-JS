goog.provide('Lemon.Texture');
goog.require('Lemon.Image');
goog.require('Lemon.Private.TextureInterface');

/**
 * A texture.
 * @constructor
 * @extends {Lemon.Private.TextureInterface}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Texture = function() 
{
    Lemon.Private.TextureInterface.call(this);

    /**
    * Image instance.
    * @type {Lemon.Image}
    * @private
    */
    this.image = null;

    /**
    * Repeat the texture.
    * @type {boolean}
    * @private
    */
    this.repeat = true;

    /**
    * Smooth the texture.
    * @type {boolean}
    * @private
    */
    this.smooth = true;
};
goog.inherits(Lemon.Texture, Lemon.Private.TextureInterface);

/**
 * Load texture from a file.
 * @param {string} path Path to the texture file.
 */
Lemon.Texture.prototype.loadFromFile = function( path ) 
{
    this.image = new Lemon.Image();
    this.image.loadFromFile(path);
};

/**
 * Load texture from an Image.
 * @param {Lemon.Image} image An Image instance.
 */
Lemon.Texture.prototype.loadFromImage = function( image ) 
{
    this.image = image;
};

/**
 * Repeat the texture.
 * @param {boolean} value True to repeat, otherwise false.
 */
Lemon.Texture.prototype.setRepeated = function( value ) 
{
    this.repeat = value;
};

/**
 * Smooth the texture.
 * @param {boolean} value True to smooth, otherwise false.
 */
Lemon.Texture.prototype.setSmooth = function( value ) 
{
    this.smooth = value;
};

/**
 * Get image instance.
 * @return {?Lemon.Image} An Image instance.
 */
Lemon.Texture.prototype.getImage = function() 
{
    return this.image;
};

/**
 * Indicate if texture is ready.
 * @return {boolean} True if the texture is ready to be use.
 */
Lemon.Texture.prototype.isReady = function() 
{
    if( !this.image )
        return false;

    var textureSize = this.image.getSize();
    if( textureSize[0] === 0 || textureSize[1] === 0 )
        return false;

    return true;
};

/**
 * Indicate if the texture is repeated.
 * @return {boolean} True if the texture is repeated.
 * @override
 */
Lemon.Texture.prototype.isRepeated = function() 
{ 
    return this.repeat;
};

/**
 * Indicate if the texture is smoothed.
 * @return {boolean} True if the texture is smoothed.
 * @override
 */
Lemon.Texture.prototype.isSmoothed = function() 
{ 
    return this.smooth; 
};
