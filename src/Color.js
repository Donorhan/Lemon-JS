/**
 * A color
 *
 * @category Core
 */
class Color {
    /**
     * Constructor
     *
     * @param {number} r Red color in the range [0-255]
     * @param {number} g Green color in the range [0-255]
     * @param {number} b Blue color in the range [0-255]
     * @param {number=} a Opacity in the range [0-255]
     */
    constructor(r, g, b, a = 1.0) {
        /**
         * Red color in the range [0-1]
         *
         * @type {number}
         * @public
         */
        this.r = (r / 255.0);

        /**
         * Green color in the range [0-1]
         *
         * @type {number}
         * @public
         */
        this.g = (g / 255.0);

        /**
         * Red color in the range [0-1]
         *
         * @type {number}
         * @public
         */
        this.b = (b / 255.0);

        /**
         * Opacity in the range [0-1]
         *
         * @type {number}
         * @public
         */
        this.a = a ? (a / 255.0) : 1.0;
    }

    /**
     * Set color
     *
     * @param {number} r Red color in the range [0-255]
     * @param {number} g Green color in the range [0-255]
     * @param {number} b Blue color in the range [0-255]
     * @param {number=} a Opacity in the range [0-255]
     */
    set(r, g, b, a = 1.0) {
        this.r = (r / 255.0);
        this.g = (g / 255.0);
        this.b = (b / 255.0);
        this.a = a ? (a / 255.0) : 1.0;
    }

    /**
     * Check if the given Color instance is equal to this one
     *
     * @param {Color} color A Color instance
     * @return {boolean} True if the two colors are equals, otherwise false
     */
    isEqual(color) {
        return (this.r === color.r
                && this.g === color.g
                && this.b === color.b
                && this.a === color.a);
    }
}

export default Color;
