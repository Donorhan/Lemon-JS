import { StateBlock } from '../StateBlock';

/**
 * A pass parameter
 *
 * @category Material
 */
export class PassParameter {
    /**
     * Constructor
     *
     * @param {string} name Name to assign
     * @param {Type} type Element's type
     * @param {Array.<number>|number|boolean|Texture|Float32Array} value Element's value
     */
    constructor(name, type, value) {
        /**
         * Name
         *
         * @type {string}
         * @public
         */
        this.name = name;

        /**
         * Type
         *
         * @type {Type}
         * @public
         */
        this.type = type;

        /**
         * Value
         *
         * @type {Array.<number>|number|boolean|Texture|Float32Array}
         * @public
         */
        this.value = value;
    }
}

/**
 * A pass
 *
 * @category Material
 * @extends {StateBlock}
 */
export class Pass extends StateBlock {
    /**
     * Constructor
     */
    constructor() {
        super();

        /**
        * Parameters: elements to send to the GPU
        *
        * @type {Array.<PassParameter>}
        * @private
        */
        this.parameters = [];
    }

    /**
     * Add a parameter to the material
     *
     * @param {string} name Parameter's name
     * @param {Type} type Parameter's type
     * @param {Array.<number>|number|boolean|Texture|Float32Array} value Parameter's value
     * @return {Pass} A reference to the instance
     */
    add(name, type, value) {
        // A value with this name already exist? We erase previous data …
        for (let i = 0; i < this.parameters.length; i += 1) {
            if (this.parameters[i].name === name) {
                this.parameters[i].value = value;
                this.parameters[i].type = type;
                return this;
            }
        }

        // … otherwise we create a new one
        this.parameters.push(new PassParameter(name, type, value));

        return this;
    }

    /**
     * Set parameter's value
     *
     * @param {string} name Parameter's name
     * @param {Array.<number>|number|boolean|Texture|Float32Array} value Parameter's value
     * @return {Pass} A reference to the instance
     */
    set(name, value) {
        for (let i = 0; i < this.parameters.length; i += 1) {
            if (this.parameters[i].name === name) {
                this.parameters[i].value = value;
                break;
            }
        }

        return this;
    }

    /**
     * Return an array with all material's parameters
     *
     * @return {Array.<PassParameter>} An array of PassParameter
     */
    getParameters() {
        return this.parameters;
    }
}

export default Pass;
