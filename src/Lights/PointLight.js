import {Light} from './Light.js';

/**
 * A point light
 *
 * @extends {Light}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class PointLight extends Light
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Constant value
         *
         * @type {number}
         * @private
         */
        this.constant = 1.0;

        /**
         * Linear value
         *
         * @type {number}
         * @private
         */
        this.linear = 0.09;

        /**
         * Quadratic value
         *
         * @type {number}
         * @private
         */
        this.quadratic = 0.032;
    }

    /**
     * Set point light's values
     *
     * @param {number} constant The constant value
     * @param {number} linear The linear value
     * @param {number} quadratic The quadratic value
     */
    setValues(constant, linear, quadratic) 
    {
        this.constant   = constant;
        this.linear     = linear;
        this.quadratic  = quadratic;
    }

    /**
     * Get values
     *
     * @return {Array.<number>} An array with constant, linear and quadratic values
     */
    getValues() 
    {
        return [this.constant, this.linear, this.quadratic];
    }
}
