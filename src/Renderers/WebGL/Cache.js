import Color from '../../Color';

/**
 * Cache for WebGL API
 *
 * @category WebGL
 */
class Cache {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Active vertex format
         *
         * @type {Color}
         * @public
         */
        this.clearColor = new Color(1, 1, 1, 255);

        /**
         * Active program
         *
         * @type {Program}
         * @public
         */
        this.program = null;

        /**
         * Active texture
         *
         * @type {TextureInterface|TextureCube}
         * @public
         */
        this.texture = null;

        /**
         * Active vertex format
         *
         * @type {VertexFormat}
         * @public
         */
        this.vertexFormat = null;

        /**
         * Array with lights to send to the programs
         *
         * @type {Array.<Light>}
         * @public
         */
        this.lights = [];

        /**
         * Lights positions
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsAmbient = [];

        /**
         * Lights positions
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsDiffuse = [];

        /**
         * Lights data: constant, linear and quadratic data
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsData = [];

        /**
         * Lights directions
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsDirection = [];

        /**
         * Lights positions
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsPosition = [];

        /**
         * Lights positions
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsSpecular = [];

        /**
         * Lights type
         *
         * @type {Array.<number>}
         * @public
         */
        this.lightsType = [];
    }
}

export default Cache;
