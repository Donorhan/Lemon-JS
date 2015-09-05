goog.provide('Lemon.SpotLight');
goog.require('Lemon.Light');

/**
 * A spotlight.
 * @constructor
 * @extends {Lemon.Light}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.SpotLight = function()
{
    Lemon.Light.call(this);

    /**
    * Constant.
    * @type {number}
    * @private
    */
    this.constant = 1.0;

    /**
    * Cutoff angle.
    * @type {number}
    * @private
    */
    this.cutoff = 12.5;

    /**
    * Light's direction.
    * @type {Array.<number>}
    * @private
    */
    this.direction = [];

    /**
    * Constant.
    * @type {number}
    * @private
    */
    this.linear = 0.09;

    /**
    * Constant.
    * @type {number}
    * @private
    */
    this.quadratic = 0.032;
};
goog.inherits(Lemon.SpotLight, Lemon.Light);

/**
 * Set direction.
 * @param {number} x Direction on X.
 * @param {number} y Direction on Y.
 * @param {number} z Direction on Z.
 */
Lemon.SpotLight.prototype.setDirection = function( x, y, z ) 
{
    this.direction = [x, y, z]; 
};

/**
 * Set cut off.
 * @param {number} value The cutoff value.
 */
Lemon.SpotLight.prototype.setCutoff= function( value ) 
{
    this.cutoff = value;
};

/**
 * Set point light's values.
 * @param {number} constant The constant value.
 * @param {number} linear The linear value.
 * @param {number} quadratic The quadratic value.
 */
Lemon.SpotLight.prototype.setValues = function( constant, linear, quadratic ) 
{
    this.constant   = constant;
    this.linear     = linear;
    this.quadratic  = quadratic;
};

/**
 * Get direction.
 * @return {Array.<number>} A vector with values for each axis.
 */
Lemon.SpotLight.prototype.getDirection = function() 
{
    return this.direction; 
};

/**
 * Get values.
 * @return {Array.<number>} An array with constant, linear and quadratic values.
 */
Lemon.SpotLight.prototype.getValues = function() 
{
    return [this.constant, this.linear, this.quadratic];
};
