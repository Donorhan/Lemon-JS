goog.provide('Lemon.Program');
goog.provide('Lemon.Program.Element');
goog.require('Lemon.Loaders.FileLoader');
goog.require('Lemon.Private.ContextResource');
goog.require('Lemon.Type');

/**
 * A shader.
 * @constructor
 * @extends {Lemon.Private.ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Program = function() 
{
    Lemon.Private.ContextResource.call(this);

    /**
    * Attributes array.
    * @type {Array.<Lemon.Program.Element>}
    * @private
    */
    this.attributes = [];

    /**
    * Program's sources: 
    * - First index is for the vertex shader
    * - Second index is for the fragement shader
    *
    * @type {Array.<string>}
    * @private
    */
    this.sources = [null, null];

    /**
    * Uniforms array.
    * @type {Array.<Lemon.Program.Element>}
    * @private
    */
    this.uniforms = [];
};
goog.inherits(Lemon.Program, Lemon.Private.ContextResource);

/**
 * An element from the shader.
 * @constructor
 * @param {number} location Location in the shader.
 * @param {string} name His name.
 * @param {Lemon.Type} type Element's type (float, vec, …).
 * @param {number} size Element's size. 
 */
Lemon.Program.Element = function( location, name, type, size ) 
{
    /**
    * Location in the shader.
    * @type {number}
    * @public
    */
    this.location = location;

    /**
    * Name.
    * @type {string}
    * @public
    */
    this.name = name;

    /**
    * Type.
    * @type {Lemon.Type}
    * @public
    */
    this.type = type;

    /**
    * Size/Count.
    * @type {number}
    * @public
    */
    this.size = size;
};

/**
 * Load program from shader files.
 * @param {string} vertexFile Path to the vertex shader file.
 * @param {string} fragmentFile Path to the fragment shader file.
 */
Lemon.Program.prototype.loadFromFiles = function( vertexFile, fragmentFile ) 
{
    var _this = this;

    // Vertex file.
    Lemon.Loaders.FileLoader.load(vertexFile, function( status, data )
    {
        _this.sources[0] = data;
    });

    // Fragment file.
    Lemon.Loaders.FileLoader.load(fragmentFile, function( status, data )
    {
        _this.sources[1] = data;
    });
};

/**
 * Load program from data.
 * @param {string} vertexSource Vertex shader code.
 * @param {string} fragmentSource Fragment shader code.
 */
Lemon.Program.prototype.loadFromData = function( vertexSource, fragmentSource ) 
{
    this.sources[0] = vertexSource;
    this.sources[1] = fragmentSource;
};

/**
 * Get attributes.
 * @return {Array.<Lemon.Program.Element>} An array of attribute.
 */
Lemon.Program.prototype.getAttributes = function() 
{
    return this.attributes;
};

/**
 * Get program's sources.
 * @return {Array.<string>} Index 0: Vertex shader, Index 1: Fragment shader.
 */
Lemon.Program.prototype.getSources = function() 
{
    return this.sources;
};

/**
 * Get uniform.
 * @param {string} name Name of the uniform.
 * @return {?Lemon.Program.Element} A program Element or null if uniform doesn't exist.
 */
Lemon.Program.prototype.getUniform = function( name ) 
{
    return this.uniforms[name] || null;
};

/**
 * Get uniforms.
 * @return {Array.<Lemon.Program.Element>} An array of uniforms.
 */
Lemon.Program.prototype.getUniforms = function() 
{
    return this.uniforms;
};

/**
 * Say if program is ready to be use.
 * Source array must have two elements: the fragment and the vertex shaders.
 * @return {boolean} True if program is ready.
 */
Lemon.Program.prototype.isReady = function() 
{
     return (this.sources.length === 2 && this.sources[0] !== null && this.sources[1] !== null);
};
