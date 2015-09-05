goog.provide('Lemon.WebGLObjects.BufferData');
goog.provide('Lemon.WebGLObjects.Instances');

/**
 * A WebGL buffer.
 * @constructor.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.WebGLObjects.BufferData = function() 
{
    /**
    * Index buffer.
    * @type {WebGLBuffer}
    * @public
    */
    this.indexBuffer = null;

    /**
    * Vertex buffers.
    * @type {Array.<WebGLBuffer>}
    * @public
    */
    this.vertexBuffers = [];

    /**
    * Vertex array object.
    * @type {WebGLBuffer}
    * @public
    */
    this.vao = null;
};

/**
 * WebGL instances.
 * @constructor.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.WebGLObjects.Instances = function() 
{
    /**
    * WebGL buffers.
    * @type {Array.<Lemon.WebGLObjects.BufferData>}
    * @public
    */
    this.buffers = [];

    /**
    * WebGL frame buffers.
    * @type {Array.<WebGLFramebuffer>}
    * @public
    */
    this.frameBuffers = [];

    /**
    * Programs/Shaders data.
    * @type {Array.<WebGLProgram>}
    * @public
    */
    this.programs = [];

    /**
    * Textures data.
    * @type {Array.<WebGLTexture>}
    * @public
    */
    this.textures = [];
};
