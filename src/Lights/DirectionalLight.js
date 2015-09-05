goog.provide('Lemon.DirectionalLight');
goog.require('Lemon.Light');

/**
 * A directional light.
 * @constructor
 * @extends {Lemon.Light}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.DirectionalLight = function()
{
    Lemon.Light.call(this);

    /**
    * Light's direction.
    * @type {Array.<number>}
    * @private
    */
    this.direction = [];
};
goog.inherits(Lemon.DirectionalLight, Lemon.Light);

/**
 * Set direction.
 * @param {number} x Direction on X.
 * @param {number} y Direction on Y.
 * @param {number} z Direction on Z.
 */
Lemon.DirectionalLight.prototype.setDirection = function( x, y, z ) 
{
    this.direction = [x, y, z];
};

/**
 * Get direction.
 * @return {Array.<number>} A vector with values for each axis.
 */
Lemon.DirectionalLight.prototype.getDirection = function() 
{
    return this.direction; 
};
