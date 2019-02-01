import Light from './Light';

/**
 * A spotlight
 *
 * @category Lights
 * @extends {Light}
 */
class SpotLight extends Light {
    /**
     * Constructor
     */
    constructor() {
        super();

        /**
         * Constant
         *
         * @type {number}
         * @private
         */
        this.constant = 1.0;

        /**
         * Cutoff angle
         *
         * @type {number}
         * @private
         */
        this.cutoff = 12.5;

        /**
         * Light's direction
         *
         * @type {Array.<number>}
         * @private
         */
        this.direction = [];

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
     * Set direction
     *
     * @param {number} x Direction on X
     * @param {number} y Direction on Y
     * @param {number} z Direction on Z
     * @return {SpotLight} A reference to the instance
     */
    setDirection(x, y, z) {
        this.direction = [x, y, z];

        return this;
    }

    /**
     * Set cut off
     *
     * @param {number} value The cutoff value
     * @return {SpotLight} A reference to the instance
     */
    setCutoff(value) {
        this.cutoff = value;

        return this;
    }

    /**
     * Set point light's values
     *
     * @param {number} constant The constant value
     * @param {number} linear The linear value
     * @param {number} quadratic The quadratic value
     * @return {SpotLight} A reference to the instance
     */
    setValues(constant, linear, quadratic) {
        this.constant = constant;
        this.linear = linear;
        this.quadratic = quadratic;

        return this;
    }

    /**
     * Get direction
     *
     * @return {Array.<number>} A vector with values for each axis
     */
    getDirection() {
        return this.direction;
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

export default SpotLight;
