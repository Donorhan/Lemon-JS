/**
 * A WebGL buffer
 *
 * @category WebGL
 */
export class BufferData {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Index buffer
         *
         * @type {WebGLBuffer}
         * @public
         */
        this.indexBuffer = null;

        /**
         * Vertex buffers
         *
         * @type {Array.<WebGLBuffer>}
         * @public
         */
        this.vertexBuffers = [];

        /**
         * Vertex array object
         *
         * @type {WebGLBuffer}
         * @public
         */
        this.vao = null;
    }
}

/**
 * WebGL instances
 *
 * @category WebGL
 */
export class Instances {
    /**
     * Constructor
     */
    constructor() {
        /**
         * WebGL buffers
         *
         * @type {Array.<BufferData>}
         * @public
         */
        this.buffers = [];

        /**
         * WebGL frame buffers
         *
         * @type {Array.<WebGLFramebuffer>}
         * @public
         */
        this.frameBuffers = [];

        /**
         * Programs/Shaders data
         *
         * @type {Array.<WebGLProgram>}
         * @public
         */
        this.programs = [];

        /**
         * Textures data
         *
         * @type {Array.<WebGLTexture>}
         * @public
         */
        this.textures = [];
    }
}
