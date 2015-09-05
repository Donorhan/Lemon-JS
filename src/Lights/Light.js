goog.provide('Lemon.Light');
goog.require('Lemon.Color');
goog.require('Lemon.Node');

/**
 * A light.
 * @constructor
 * @extends {Lemon.Node}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Light = function()
{
    Lemon.Node.call(this);

    /**
    * Ambient color.
    * @type {Lemon.Color}
    * @private
    */
    this.ambient = new Lemon.Color(255, 255, 255);

    /**
    * Diffuse color.
    * @type {Lemon.Color}
    * @private
    */
    this.diffuse = new Lemon.Color(255, 255, 255);

    /**
    * Specular color.
    * @type {Lemon.Color}
    * @private
    */
    this.specular = new Lemon.Color(255, 255, 255);
};
goog.inherits(Lemon.Light, Lemon.Node);

/**
 * Visit the node and his children.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Light.prototype.visit = function( renderTarget ) 
{
    renderTarget.getRenderAPI().bindLight(this);
};

/**
 * Set ambient color.
 * @param {number} r Red value in the range 0 to 255.
 * @param {number} g Green value in the range 0 to 255.
 * @param {number} b Blue value in the range 0 to 255.
 */
Lemon.Light.prototype.setAmbientColor = function( r, g, b ) 
{
    this.ambient.set(r, g, b);
};

/**
 * Set diffuse color.
 * @param {number} r Red value in the range 0 to 255.
 * @param {number} g Green value in the range 0 to 255.
 * @param {number} b Blue value in the range 0 to 255.
 */
Lemon.Light.prototype.setDiffuseColor = function( r, g, b ) 
{
    this.diffuse.set(r, g, b);
};

/**
 * Set specular color.
 * @param {number} r Red value in the range 0 to 255.
 * @param {number} g Green value in the range 0 to 255.
 * @param {number} b Blue value in the range 0 to 255.
 */
Lemon.Light.prototype.setSpecularColor = function( r, g, b ) 
{
    this.specular.set(r, g, b);
};

/**
 * Get ambient color.
 * @return {Lemon.Color} A color instance.
 */
Lemon.Light.prototype.getAmbientColor = function() 
{
    return this.ambient;
};

/**
 * Get diffuse color.
 * @return {Lemon.Color} A color instance.
 */
Lemon.Light.prototype.getDiffuseColor = function() 
{
    return this.diffuse;
};

/**
 * Get specular color.
 * @return {Lemon.Color} A color instance.
 */
Lemon.Light.prototype.getSpecularColor = function() 
{
    return this.specular;
};
