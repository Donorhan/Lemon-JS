import {ContextResource} from './ContextResource.js';
import {FileLoader} from './Loaders/FileLoader.js';

/**
 * A program
 *
 * @extends {ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Program extends ContextResource
{
    /**
     * Constructor
     *
     * @constructor
     */
    constructor()
    {
        super();

        /**
         * Attributes
         *
         * @type {Array.<ProgramElement>}
         * @private
         */
        this.attributes = [];

        /**
         * Shader sources
         *
         * - First index is for the vertex shader
         * - Second index is for the fragment shader
         *
         * @type {Array.<string>}
         * @private
         */
        this.sources = [null, null];

        /**
         * Uniforms
         *
         * @type {Array.<Program.Element>}
         * @private
         */
        this.uniforms = [];
    }

    /**
     * Load program from shader files
     *
     * @param {string} vertexFile Path to the vertex shader file
     * @param {string} fragmentFile Path to the fragment shader file
     */
    loadFromFiles(vertexFile, fragmentFile)
    {
        // Vertex file.
        FileLoader.load(vertexFile, (status, data) =>
        {
            this.sources[0] = data;
        });

        // Fragment file.
        FileLoader.load(fragmentFile, (status, data) =>
        {
            this.sources[1] = data;
        });
    };

    /**
     * Load program from data
     *
     * @param {string} vertexSource Vertex shader code
     * @param {string} fragmentSource Fragment shader code
     */
    loadFromData(vertexSource, fragmentSource)
    {
        this.sources[0] = vertexSource;
        this.sources[1] = fragmentSource;
    }

    /**
     * Get attributes
     *
     * @return {Array.<ProgramElement>} An array of attribute
     */
    getAttributes()
    {
        return this.attributes;
    }

    /**
     * Get program's sources
     *
     * @return {Array.<string>} Index 0: Vertex shader, Index 1: Fragment shader
     */
    getSources()
    {
        return this.sources;
    }

    /**
     * Get uniform
     *
     * @param {string} name Name of the uniform
     * @return {?ProgramElement} A program Element or null if uniform doesn't exist
     */
    getUniform(name)
    {
        return this.uniforms[name] || null;
    }

    /**
     * Get uniforms
     *
     * @return {Array.<ProgramElement>} An array of uniforms
     */
    getUniforms()
    {
        return this.uniforms;
    }

    /**
     * Say if program is ready to be use
     *
     * Source array must have two elements: the fragment and the vertex shaders
     * @return {boolean} True if program is ready, otherwise false
     */
    isReady()
    {
        return (this.sources.length === 2 && this.sources[0] !== null && this.sources[1] !== null);
    }
}

/**
 * An element from the shader
 *
 * @constructor
 */
export class ProgramElement
{
    /**
     * Constructor
     *
     * @param {number} location Location in the shader
     * @param {string} name His name
     * @param {Type} type Element's type (float, vec, …)
     * @param {number} size Element's size
     */
    constructor(location, name, type, size)
    {
        /**
         * Location in the shader
         *
         * @type {number}
         * @public
         */
        this.location = location;

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
         * Size/Count
         *
         * @type {number}
         * @public
         */
        this.size = size;
    }
}
