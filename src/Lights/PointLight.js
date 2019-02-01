import Light from './Light';

/**
 * A point light
 *
 * @category Lights
 * @extends {Light}
 */
class PointLight extends Light {
    /**
     * Constructor
     */
    constructor() {
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
     * @return {PointLight} A reference to the instance
     */
    setValues(constant, linear, quadratic) {
        this.constant = constant;
        this.linear = linear;
        this.quadratic = quadratic;

        return this;
    }

    /**
     * Get values
     *
     * @return {Array.<number>} An array with constant, linear and quadratic values
     */
    getValues() {
        return [this.constant, this.linear, this.quadratic];
    }
}

export default PointLight;
