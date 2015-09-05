goog.provide('Lemon.RenderAPI');
goog.require('Lemon.Camera');
goog.require('Lemon.StateBlock');
goog.require('Lemon.VertexFormat');

/**
 * A rendering API.
 * Web technologies allow Canvas and WebGL rendering.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.RenderAPI = function() 
{
    /**
    * Camera to use for next draw calls and graphics calculs.
    * @type {Lemon.Camera} 
    * @protected
    */
    this.activeCamera = null;
};

/**
* Bind light.
* @param {Lemon.Light} light A Light instance.
*/
Lemon.RenderAPI.prototype.bindLight = function( light ) { };

/**
* Apply the given state block.
* @param {Lemon.StateBlock} stateBlock A StateBlock instance.
*/
Lemon.RenderAPI.prototype.applyStateBlock = function( stateBlock )
{
    this.setBlendMode(stateBlock.blendMode);
    this.setDepthState(stateBlock.depthTest, stateBlock.depthWrite, stateBlock.depthFunction);
    this.setFaceCulling(stateBlock.faceCulling);
    this.setStencilState(stateBlock.stencilTest, stateBlock.stencilWrite);
    this.setStencilFunction(stateBlock.stencilFunction, stateBlock.stencilReference, stateBlock.stencilMask);
    this.setStencilOperations(stateBlock.stencilTestFail, stateBlock.stencilDepthTestFail, stateBlock.stencilSuccess);
};

/**
 * Bind the given framebuffer.
 * @param {number} framebufferID An identifier, -1 to bind the default frame buffer.
 */
Lemon.RenderAPI.prototype.bindFrameBuffer = function( framebufferID ) { };

/**
 * Bind texture to the the given slot.
 * @param {number} slot Targeted slot's index.
 * @param {Lemon.Private.TextureInterface} texture A Texture instance.
 */
Lemon.RenderAPI.prototype.bindTexture = function( slot, texture ) { };

/**
 * Bind texture cube to the the given slot.
 * @param {number} slot Targeted slot's index.
 * @param {Lemon.TextureCube} texture A TextureCube instance.
 */
Lemon.RenderAPI.prototype.bindTextureCube = function( slot, texture ) { };

/**
 * Clear the rendering target.
 * @param {Lemon.Color} color A Color instance.
 */
Lemon.RenderAPI.prototype.clear = function( color ) { };

/**
 * Clear cache.
 */
Lemon.RenderAPI.prototype.clearCache = function() { };

/**
 * Create a new frame buffer.
 * @return {number} An identifier to work with it later.
 */
Lemon.RenderAPI.prototype.createFrameBuffer = function() { return 0; };

/**
* Draw indexed primitives.
* @param {Lemon.DrawingMode} drawingMode Drawing mode to use.
* @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts.
* @param {number} vertexCount Vertex count to draw.
*/
Lemon.RenderAPI.prototype.drawIndexedPrimitives = function( drawingMode, firstVertexIndex, vertexCount ) { }; 

/**
* Draw primitives.
* @param {Lemon.DrawingMode} drawingMode Drawing mode to use.
* @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts.
* @param {number} vertexCount Vertex count to draw.
*/
Lemon.RenderAPI.prototype.drawPrimitives = function( drawingMode, firstVertexIndex, vertexCount ) { };

/**
 * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer.
 * @param {number} framebufferID Targeted slot's index.
 * @param {Array.<Lemon.Texture>} textures An array of Texture instances.
 * @param {boolean=} useDepthBuffer True to use a depth buffer (default: true).
 * @param {boolean=} useStencilBuffer True to use a depth buffer (default: false).
 */
Lemon.RenderAPI.prototype.initFrameBuffer = function( framebufferID, textures, useDepthBuffer, useStencilBuffer ) { };

/**
 * Set camera to use.
 * @param {Lemon.Camera} camera A Camera instance.
 */
Lemon.RenderAPI.prototype.setActiveCamera = function( camera ) 
{ 
    this.activeCamera = camera; 
};

/**
 * Set blend mode to apply.
 * @param {Lemon.BlendMode} blendMode A BlendMode instance.
 */
Lemon.RenderAPI.prototype.setBlendMode = function( blendMode ) { };

/**
 * Set depth state.
 * @param {boolean} depthTest True to activate depth testing, otherwise false.
 * @param {boolean} writeTest True to activate depth writing otherwise false.
 * @param {Lemon.DepthFunction} depthFunction Depth function to apply.
 */
Lemon.RenderAPI.prototype.setDepthState = function( depthTest, writeTest, depthFunction ) { };

/**
 * Set face culling state.
 * @param {Lemon.FaceCulling} mode Face culling mode to set.
 */
Lemon.RenderAPI.prototype.setFaceCulling = function( mode ) { };

/**
 * Set geometry to use.
 * @param {Lemon.Geometry} geometry A Geometry instance.
 */
Lemon.RenderAPI.prototype.setGeometry = function( geometry ) { };

/**
 * Set index buffer to use.
 * @param {number|WebGLBuffer} buffer A buffer instance.
 */
Lemon.RenderAPI.prototype.setIndexBuffer = function( buffer ) { };

/**
 * Set program to use.
 * @param {Lemon.Program} program A Program instance to use.
 * @return {number} -1: an error occured, 0: everything is ok, 2 : program have been changed.
 */
Lemon.RenderAPI.prototype.setProgram = function( program ) { return -1; };

/**
 * Set uniform value.
 * @param {Lemon.Program} program A Program instance to use.
 * @param {string} name Uniform's name.
 * @param {Lemon.Type} type Type of value to send.
 * @param {?Array<number>|Lemon.Texture|boolean|number|Float32Array} value A value.
 * @param {number=} groupCount When an element is an array, you can create group (like sub-array).
 * @return {boolean} True if uniform has been set successfully, otherwise false.
 */
Lemon.RenderAPI.prototype.setUniform = function( program, name, type, value, groupCount ) { return false; };

/**
 * Set scissor test state.
 * @param {boolean} state True to activate scissor testing, otherwise false.
 * @param {number} x Position on x from the left of the screen.
 * @param {number} y Position on y from the bottom of the screen.
 * @param {number} w Width of the rectangle.
 * @param {number} h Height of the rectangle.
 */
Lemon.RenderAPI.prototype.setScissorTest = function( state, x, y, w, h ) { };

/**
 * Set stencil test state.
 * @param {boolean} activate True to active stencil testing, otherwise false.
 * @param {number} writeMask Stencil writing value.
 */
Lemon.RenderAPI.prototype.setStencilState = function( activate, writeMask ) { };

/**
 * Set stencil function to use.
 * @param {Lemon.StencilFunction} stencilFunction Function to use.
 * @param {number} reference Reference value.
 * @param {number} mask Mask to use.
 */
Lemon.RenderAPI.prototype.setStencilFunction = function( stencilFunction, reference, mask ) { };

/**
 * Set stencil operations to use.
 * @param {Lemon.StencilOperation} sFail Function to use.
 * @param {Lemon.StencilOperation} dpFail Reference value.
 * @param {Lemon.StencilOperation} dppPass Mask to use.
 */
Lemon.RenderAPI.prototype.setStencilOperations = function( sFail, dpFail, dppPass ) { };

/**
 * Set vertex buffer to use.
 * Warning: You must call "setVertexFormat" before!
 * @param {number} stream An integer representing stream to use.
 * @param {number|WebGLBuffer} buffer A buffer instance.
 */
Lemon.RenderAPI.prototype.setVertexBuffer = function( stream, buffer ) { };

/**
 * Set vertex format to use.
 * @param {Lemon.VertexFormat} format A VertexFormat instance.
 */
Lemon.RenderAPI.prototype.setVertexFormat = function( format ) { };

/**
 * Get the active camera.
 * @return {Lemon.Camera} A Camera instance or null.
 */
Lemon.RenderAPI.prototype.getActiveCamera = function() 
{ 
    return this.activeCamera; 
};
