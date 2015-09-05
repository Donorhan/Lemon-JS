goog.provide('Lemon.Private.TextureInterface');
goog.require('Lemon.Private.ContextResource');

/**
 * A texture.
 * @constructor
 * @extends {Lemon.Private.ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Private.TextureInterface = function() 
{
    Lemon.Private.ContextResource.call(this);

    /**
    * State.
    * @type {boolean}
    * @protected
    */
    this.ready = false;

    /**
    * Mipmap state.
    * @type {boolean}
    * @protected
    */
    this.mipmap = true;
};
goog.inherits(Lemon.Private.TextureInterface, Lemon.Private.ContextResource);

/**
 * Indicate if texture is ready.
 * @return {boolean} True if the texture is ready to be use.
 */
Lemon.Private.TextureInterface.prototype.isReady = function() { return this.ready; };

/**
 * Indicate if the texture use mipmapping.
 * @return {boolean} True if the texture is mipmaped.
 */
Lemon.Private.TextureInterface.prototype.isMipmaped = function() { return this.mipmap; };

/**
 * Indicate if the texture is repeated.
 * @return {boolean} True if the texture is repeated.
 */
Lemon.Private.TextureInterface.prototype.isRepeated = function() { return false; };

/**
 * Indicate if the texture is smoothed.
 * @return {boolean} True if the texture is smoothed.
 */
Lemon.Private.TextureInterface.prototype.isSmoothed = function() { return false; };

/**
 * Indicate if the texture must use mipmapping.
 * @param {boolean} value True to use mipmapping.
 */
Lemon.Private.TextureInterface.prototype.useMipmap = function( value ) 
{ 
    this.mipmap = value;
};
