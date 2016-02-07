/**
 * A rendering API
 *
 * Web technologies allow Canvas and WebGL rendering
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class RenderAPI 
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * Camera to use for next draw calls and graphics calculs
         *
         * @type {Camera} 
         * @protected
         */
        this.activeCamera = null;
    }

    /**
     * Bind light
     *
     * @param {Light} light A Light instance
     */
    bindLight(light) { };

    /**
     * Apply the given state block
     *
     * @param {StateBlock} stateBlock A StateBlock instance
     */
    applyStateBlock(stateBlock)
    {
        this.setBlendMode(stateBlock.blendMode);
        this.setDepthState(stateBlock.depthTest, stateBlock.depthWrite, stateBlock.depthFunction);
        this.setFaceCulling(stateBlock.faceCulling);
        this.setStencilState(stateBlock.stencilTest, stateBlock.stencilWrite);
        this.setStencilFunction(stateBlock.stencilFunction, stateBlock.stencilReference, stateBlock.stencilMask);
        this.setStencilOperations(stateBlock.stencilTestFail, stateBlock.stencilDepthTestFail, stateBlock.stencilSuccess);
    }

    /**
     * Bind the given framebuffer
     *
     * @param {number} framebufferID An identifier, -1 to bind the default frame buffer
     */
    bindFrameBuffer(framebufferID = -1) { };

    /**
     * Bind texture to the the given slot
     *
     * @param {number} slot Targeted slot's index
     * @param {TextureInterface} texture A Texture instance
     */
    bindTexture(slot, texture) { };

    /**
     * Bind texture cube to the the given slot
     *
     * @param {number} slot Targeted slot's index
     * @param {TextureCube} texture A TextureCube instance
     */
    bindTextureCube(slot, texture) { };

    /**
     * Clear the rendering target
     *
     * @param {Color} color A Color instance
     */
    clear(color) { };

    /**
     * Clear cache
     */
    clearCache() { };

    /**
     * Create a new frame buffer
     *
     * @return {number} An identifier to work with it later
     */
    createFrameBuffer() { return 0; };

    /**
    * Draw indexed primitives
    *
    * @param {DrawingMode} drawingMode Drawing mode to use
    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
    * @param {number} vertexCount Vertex count to draw
    */
    drawIndexedPrimitives(drawingMode, firstVertexIndex, vertexCount) { }; 

    /**
    * Draw primitives
    *
    * @param {DrawingMode} drawingMode Drawing mode to use
    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
    * @param {number} vertexCount Vertex count to draw
    */
    drawPrimitives(drawingMode, firstVertexIndex, vertexCount) { };

    /**
     * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer
     *
     * @param {number} framebufferID Targeted slot's index
     * @param {Array.<Texture>} textures An array of Texture instances
     * @param {boolean=} useDepthBuffer True to use a depth buffer
     * @param {boolean=} useStencilBuffer True to use a depth buffer
     */
    initFrameBuffer(framebufferID, textures, useDepthBuffer = true, useStencilBuffer = false) { };

    /**
     * Set camera to use
     *
     * @param {Camera} camera A Camera instance
     */
    setActiveCamera(camera) 
    { 
        this.activeCamera = camera; 
    }

    /**
     * Set blend mode to apply
     *
     * @param {BlendMode} blendMode A BlendMode instance
     */
    setBlendMode(blendMode) { };

    /**
     * Set depth state
     *
     * @param {boolean} depthTest True to activate depth testing, otherwise false
     * @param {boolean} writeTest True to activate depth writing otherwise false
     * @param {DepthFunction} depthFunction Depth function to apply
     */
    setDepthState(depthTest, writeTest, depthFunction) { };

    /**
     * Set face culling state.
     * @param {FaceCulling} mode Face culling mode to set.
     */
    setFaceCulling(mode) { };

    /**
     * Set geometry to use
     *
     * @param {Geometry} geometry A Geometry instance
     */
    setGeometry(geometry) { };

    /**
     * Set index buffer to use
     *
     * @param {number|WebGLBuffer} buffer A buffer instance
     */
    setIndexBuffer(buffer) { };

    /**
     * Set program to use
     *
     * @param {Program} program A Program instance to use
     * @return {number} -1: an error occured, 0: everything is ok, 2 : program have been changed
     */
    setProgram(program) { return -1; };

    /**
     * Set uniform value
     *
     * @param {Program} program A Program instance to use
     * @param {string} name Uniform's name
     * @param {Type} type Type of value to send
     * @param {?Array<number>|Texture|boolean|number|Float32Array} value A value
     * @param {number=} groupCount When an element is an array, you can create group (like sub-array)
     * @return {boolean} True if uniform has been set successfully, otherwise false
     */
    setUniform(program, name, type, value, groupCount) { return false; };

    /**
     * Set scissor test state
     *
     * @param {boolean} state True to activate scissor testing, otherwise false
     * @param {number} x Position on x from the left of the screen
     * @param {number} y Position on y from the bottom of the screen
     * @param {number} w Width of the rectangle
     * @param {number} h Height of the rectangle
     */
    setScissorTest(state, x, y, w, h) { };

    /**
     * Set stencil test state
     *
     * @param {boolean} activate True to active stencil testing, otherwise false
     * @param {number} writeMask Stencil writing value
     */
    setStencilState(activate, writeMask) { };

    /**
     * Set stencil function to use
     *
     * @param {StencilFunction} stencilFunction Function to use
     * @param {number} reference Reference value
     * @param {number} mask Mask to use
     */
    setStencilFunction(stencilFunction, reference, mask) { };

    /**
     * Set stencil operations to use
     *
     * @param {StencilOperation} sFail Function to use
     * @param {StencilOperation} dpFail Reference value
     * @param {StencilOperation} dppPass Mask to use
     */
    setStencilOperations(sFail, dpFail, dppPass) { };

    /**
     * Set vertex buffer to use
     *
     * Warning: You must call "setVertexFormat" before!
     * @param {number} stream An integer representing stream to use
     * @param {number|WebGLBuffer} buffer A buffer instance
     */
    setVertexBuffer(stream, buffer) { };

    /**
     * Set vertex format to use
     *
     * @param {VertexFormat} format A VertexFormat instance
     */
    setVertexFormat(format) { };

    /**
     * Get the active camera
     *
     * @return {Camera} A Camera instance or null
     */
    getActiveCamera() 
    { 
        return this.activeCamera; 
    }
}
