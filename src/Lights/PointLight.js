goog.provide('Lemon.PointLight');
goog.require('Lemon.Light');

/**
 * A point light.
 * @constructor
 * @extends {Lemon.Light}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.PointLight = function()
{
    Lemon.Light.call(this);

    /**
    * Constant.
    * @type {number}
    * @private
    */
    this.constant = 1.0;

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
goog.inherits(Lemon.PointLight, Lemon.Light);

/**
 * Set point light's values.
 * @param {number} constant The constant value.
 * @param {number} linear The linear value.
 * @param {number} quadratic The quadratic value.
 */
Lemon.PointLight.prototype.setValues = function( constant, linear, quadratic ) 
{
    this.constant   = constant;
    this.linear     = linear;
    this.quadratic  = quadratic;
};

/**
 * Get values.
 * @return {Array.<number>} An array with constant, linear and quadratic values.
 */
Lemon.PointLight.prototype.getValues = function() 
{
    return [this.constant, this.linear, this.quadratic];
};
