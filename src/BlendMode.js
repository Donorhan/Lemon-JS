/**
 * Blend manipulation
 *
 * @category Core
 */
class BlendMode {
    /**
     * Constructor
     *
     * @param {BlendMode} [mode] Mode to use, preset values.
     */
    constructor(mode) {
        /**
         * Source blending factor for the alpha channel
         *
         * @type {BlendMode.Factor}
         * @public
         */
        this.alphaSourceFactor = BlendMode.Factor.One;

        /**
         * Destination blending factor for the alpha channel
         *
         * @type {BlendMode.Factor}
         * @public
         */
        this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;

        /**
         * Blending equation for the alpha channel
         *
         * @type {BlendMode.Equation}
         * @public
         */
        this.alphaEquation = BlendMode.Equation.Add;

        /**
         * Blending color (source)
         *
         * @type {BlendMode.Factor}
         * @public
         */
        this.colorSourceFactor = BlendMode.Factor.SourceAlpha;

        /**
         * Blending color (destination)
         *
         * @type {BlendMode.Factor}
         * @public
         */
        this.colorDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;

        /**
         * Equation to use on source and destination color
         *
         * @type {BlendMode.Equation}
         * @public
         */
        this.colorEquation = BlendMode.Equation.Add;

        if (mode) {
            this.setMode(mode);
        }
    }

    /**
     * Set blending mode to use: this method erase the previous configuration, be careful
     *
     * @param {BlendMode.Mode=} mode Mode to use, preset values
     */
    setMode(mode) {
        switch (mode) {
        case BlendMode.Mode.Alpha: {
            this.colorSourceFactor = BlendMode.Factor.SourceAlpha;
            this.colorDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
            this.colorEquation = BlendMode.Equation.Add;
            this.alphaSourceFactor = BlendMode.Factor.One;
            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
            this.alphaEquation = BlendMode.Equation.Add;
            break;
        }
        case BlendMode.Mode.Add: {
            this.colorSourceFactor = BlendMode.Factor.SourceAlpha;
            this.colorDestinationFactor = BlendMode.Factor.One;
            this.colorEquation = BlendMode.Equation.Add;
            this.alphaSourceFactor = BlendMode.Factor.One;
            this.alphaDestinationFactor = BlendMode.Factor.One;
            this.alphaEquation = BlendMode.Equation.Add;
            break;
        }
        case BlendMode.Mode.Multiply: {
            this.colorSourceFactor = BlendMode.Factor.DestinationColor;
            this.colorDestinationFactor = BlendMode.Factor.One;
            this.colorEquation = BlendMode.Equation.Add;
            this.alphaSourceFactor = BlendMode.Factor.One;
            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
            this.alphaEquation = BlendMode.Equation.Add;
            break;
        }
        default:
        case BlendMode.Mode.None: {
            this.colorSourceFactor = BlendMode.Factor.One;
            this.colorDestinationFactor = BlendMode.Factor.Zero;
            this.colorEquation = BlendMode.Equation.Add;
            this.alphaSourceFactor = BlendMode.Factor.One;
            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
            this.alphaEquation = BlendMode.Equation.Add;
            break;
        }
        }
    }

    /**
     * Check if the given BlendMode instance is equal to this one
     *
     * @param {BlendMode} blendMode A BlendMode instance
     * @return {boolean} True if the two blend mode are equals, otherwise false
     */
    isEqual(blendMode) {
        return (this.alphaSourceFactor === blendMode.alphaSourceFactor
                && this.alphaDestinationFactor === blendMode.alphaDestinationFactor
                && this.alphaEquation === blendMode.alphaEquation
                && this.colorSourceFactor === blendMode.colorSourceFactor
                && this.colorDestinationFactor === blendMode.colorDestinationFactor
                && this.colorEquation === blendMode.colorEquation);
    }
}

/**
 * Default modes availables
 *
 * @enum {number}
 */
BlendMode.Mode = {
    Alpha: 0,
    Add: 1,
    Multiply: 2,
    None: 3,
};

/**
 * Blend factors
 *
 * @enum {number}
 */
BlendMode.Factor = {
    DestinationAlpha: 0,
    DestinationColor: 1,
    One: 2,
    OneMinusDestinationAlpha: 3,
    OneMinusDestinationColor: 4,
    OneMinusSourceAlpha: 5,
    OneMinusSourceColor: 6,
    SourceAlpha: 7,
    SourceColor: 8,
    Zero: 9,
};

/**
 * Blend equations
 *
 * @enum {number}
 */
BlendMode.Equation = {
    Add: 0,
    Subtract: 1,
};

export default BlendMode;
