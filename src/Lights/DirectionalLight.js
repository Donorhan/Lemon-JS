import Light from './Light';

/**
 * A directional light
 *
 * @category Lights
 * @extends {Light}
 */
class DirectionalLight extends Light {
    /**
     * Constructor
     */
    constructor() {
        super();

        /**
         * Light's direction
         *
         * @type {Array.<number>}
         * @private
         */
        this.direction = [];
    }

    /**
     * Set direction
     *
     * @param {number} x Direction on X
     * @param {number} y Direction on Y
     * @param {number} z Direction on Z
     * @return {DirectionalLight} A reference to the instance
     */
    setDirection(x, y, z) {
        this.direction = [x, y, z];

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
}

export default DirectionalLight;
