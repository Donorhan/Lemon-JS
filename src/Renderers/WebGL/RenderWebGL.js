goog.provide('Lemon.RenderAPI.WebGL');
goog.require('goog.webgl');
goog.require('Lemon.Color');
goog.require('Lemon.PointLight');
goog.require('Lemon.DirectionalLight');
goog.require('Lemon.SpotLight');
goog.require('Lemon.Program');
goog.require('Lemon.RenderAPI');
goog.require('Lemon.StateBlock');
goog.require('Lemon.TextureCube');
goog.require('Lemon.TextureVideo');
goog.require('Lemon.WebGL.Cache');
goog.require('Lemon.WebGLObjects.Instances');

/**
 * WebGL renderer.
 * @constructor
 * @extends {Lemon.RenderAPI}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.RenderAPI.WebGL = function()
{
    // Call parent constructor.
    Lemon.RenderAPI.call(this);

    /**
    * Cache.
    * @type {Lemon.WebGL.Cache}
    * @private
    */
    this.cache = new Lemon.WebGL.Cache();

    /**
    * Array with enabled attribut.
    * @type {Array.<boolean>}
    * @private
    */
    this.enabledVertexAttribArray = [];

    /**
    * WebGL instances.
    * @type {Lemon.WebGLObjects.Instances}
    * @private
    */
    this.instances = new Lemon.WebGLObjects.Instances();

    /**
    * Active states.
    * @type {Lemon.StateBlock}
    * @private
    */
    this.state = new Lemon.StateBlock();

    // Init state block.
    this.initStateBlockWithDefaultValues(this.state);
};
goog.inherits(Lemon.RenderAPI.WebGL, Lemon.RenderAPI);
goog.addSingletonGetter(Lemon.RenderAPI.WebGL);

/**
* Bind light.
* @param {Lemon.Light} light A Light instance.
*/
Lemon.RenderAPI.WebGL.prototype.bindLight = function( light ) 
{ 
    this.cache.lights.push(light);
};

/**
 * Bind the given framebuffer.
 * @param {number} framebufferID An identifier, -1 to bind default the frame buffer.
 */
Lemon.RenderAPI.WebGL.prototype.bindFrameBuffer = function( framebufferID ) 
{
    var gl = Lemon.GetContext();

    if( framebufferID == -1 )
        gl.bindFramebuffer(goog.webgl.FRAMEBUFFER, null);
    else 
    {
        var webGLBuffer = this.instances.frameBuffers[framebufferID];
        if( !webGLBuffer )
            return;

        gl.bindFramebuffer(goog.webgl.FRAMEBUFFER, webGLBuffer);
    }
};

/**
 * Bind texture to the the given slot.
 * @param {number} slot Targeted slot's index.
 * @param {Lemon.Private.TextureInterface} texture A Texture instance.
 */
Lemon.RenderAPI.WebGL.prototype.bindTexture = function( slot, texture ) 
{
    if( !texture.isReady() )
        return;

    var isTextureVideo  = (texture instanceof Lemon.TextureVideo);
    var needUpdate      = false;

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Create WebGL instance.
    var webGLTexture = this.instances.textures[texture.getUID()];
    if( !webGLTexture )
    {
        webGLTexture = gl.createTexture();
        this.instances.textures[texture.getUID()] = webGLTexture;
        needUpdate = true;
    }

    // Bind it!
    if( this.cache.texture != texture )
    {
        gl.activeTexture(goog.webgl.TEXTURE0 + slot);
        gl.bindTexture(goog.webgl.TEXTURE_2D, webGLTexture);
    }

    // Need to update the texture?
    if( needUpdate )
    {
        var imageSize = [0, 0];
    
        gl.pixelStorei(goog.webgl.UNPACK_FLIP_Y_WEBGL, true);

        // Upload to the GPU.
        if( isTextureVideo )
            gl.texImage2D(goog.webgl.TEXTURE_2D, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, texture.getVideoData());
        else
        {
            // WebGL support image loading from HTMLImage instance and from array of pixels.
            var image   = texture.getImage();
            var data    = image.getData();
            imageSize   = image.getSize();

            if( data instanceof Image )
                gl.texImage2D(goog.webgl.TEXTURE_2D, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, data);
            else
                gl.texImage2D(goog.webgl.TEXTURE_2D, 0, goog.webgl.RGBA, imageSize[0], imageSize[1], 0, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, data);
        }

        var isPOT = ((imageSize[0] & (imageSize[0] - 1)) === 0) && ((imageSize[1] & (imageSize[1] - 1)) === 0);

        // Apply filters.
        gl.texParameteri(goog.webgl.TEXTURE_2D, goog.webgl.TEXTURE_WRAP_S, (texture.isRepeated() ? goog.webgl.REPEAT : goog.webgl.CLAMP_TO_EDGE) );
        gl.texParameteri(goog.webgl.TEXTURE_2D, goog.webgl.TEXTURE_WRAP_T, (texture.isRepeated() ? goog.webgl.REPEAT : goog.webgl.CLAMP_TO_EDGE) );

        gl.texParameteri(goog.webgl.TEXTURE_2D, goog.webgl.TEXTURE_MAG_FILTER, (texture.isSmoothed() ? goog.webgl.LINEAR : goog.webgl.NEAREST));

        var min_filter = (isPOT && texture.isMipmaped()) ? goog.webgl.LINEAR_MIPMAP_NEAREST : goog.webgl.LINEAR;
        gl.texParameteri(goog.webgl.TEXTURE_2D, goog.webgl.TEXTURE_MIN_FILTER, (texture.isSmoothed() ? min_filter : goog.webgl.NEAREST));

        if( !isTextureVideo && isPOT && texture.isMipmaped() )
            gl.generateMipmap(goog.webgl.TEXTURE_2D);
    }
    // Video need to be updated continuously.
    else if( isTextureVideo )
        gl.texImage2D(goog.webgl.TEXTURE_2D, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, texture.getVideoData());

    this.cache.texture = texture;
};

/**
 * Bind texture cube to the the given slot.
 * @param {number} slot Targeted slot's index.
 * @param {Lemon.TextureCube} texture A TextureCube instance.
 */
Lemon.RenderAPI.WebGL.prototype.bindTextureCube = function( slot, texture ) 
{
    // Cache.
    if( !texture.isReady() )
        return;

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Create geometry's data.
    var needUpdate = false;
    var webGLTexture = this.instances.textures[texture.getUID()];
    if( !webGLTexture )
    {
        webGLTexture = gl.createTexture();
        this.instances.textures[texture.getUID()] = webGLTexture;
        needUpdate = true;
    }

    if( this.cache.texture != texture )
    {
        gl.activeTexture(goog.webgl.TEXTURE0 + slot);
        gl.bindTexture(goog.webgl.TEXTURE_CUBE_MAP, webGLTexture);
    }

    // Need to update the texture?
    if( needUpdate )
    {
        var images = texture.getImages();

        // Upload to the GPU.
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Left].getData());
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Right].getData());
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Up].getData());
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Down].getData());
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Front].getData());
        gl.texImage2D(goog.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, goog.webgl.RGBA, goog.webgl.RGBA, goog.webgl.UNSIGNED_BYTE, images[Lemon.TextureCube.Face.Back].getData());

        // Apply filters.
        gl.texParameteri(goog.webgl.TEXTURE_CUBE_MAP, goog.webgl.TEXTURE_MAG_FILTER, goog.webgl.NEAREST);
        gl.texParameteri(goog.webgl.TEXTURE_CUBE_MAP, goog.webgl.TEXTURE_MIN_FILTER, goog.webgl.NEAREST);
    }

    this.cache.texture = texture;
};

/**
 * Clear the rendering target.
 * @param {Lemon.Color} color A Color instance.
 */
Lemon.RenderAPI.WebGL.prototype.clear = function( color ) 
{
    // Apply color.
    if( !color.isEqual(this.cache.clearColor) )
    {
        Lemon.GetContext().clearColor(color.r, color.g, color.b, color.a); 
        this.cache.clearColor = color;
    }

    // Clear buffers.
    Lemon.GetContext().clear(goog.webgl.COLOR_BUFFER_BIT | goog.webgl.DEPTH_BUFFER_BIT | goog.webgl.DEPTH_BUFFER_BIT);
};

/**
 * Clear cache.
 */
Lemon.RenderAPI.WebGL.prototype.clearCache = function() 
{
    this.cache.program          = null;
    this.cache.lights.length    = 0;
};

/**
 * Create a new frame buffer.
 * @return {number} An identifier to work with it later.
 */
Lemon.RenderAPI.WebGL.prototype.createFrameBuffer = function() 
{ 
    var identifier  = this.instances.frameBuffers.length;

    var frameBuffer = Lemon.GetContext().createFramebuffer();
    this.instances.frameBuffers.push(frameBuffer);

    return identifier;
};

/**
* Draw indexed primitives.
* @param {Lemon.DrawingMode} drawingMode Drawing mode to use.
* @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts.
* @param {number} vertexCount Vertex count to draw.
*/
Lemon.RenderAPI.WebGL.prototype.drawIndexedPrimitives = function( drawingMode, firstVertexIndex, vertexCount ) 
{
    Lemon.GetContext().drawElements(this.convertDrawingModeToConstant(drawingMode), vertexCount, goog.webgl.UNSIGNED_SHORT, firstVertexIndex);
    this.disableVertexAttribArray();
}; 

/**
* Draw primitives.
* @param {Lemon.DrawingMode} drawingMode Drawing mode to use.
* @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts.
* @param {number} vertexCount Vertex count to draw.
*/
Lemon.RenderAPI.WebGL.prototype.drawPrimitives = function( drawingMode, firstVertexIndex, vertexCount ) 
{
    Lemon.GetContext().drawArrays(this.convertDrawingModeToConstant(drawingMode), firstVertexIndex, vertexCount);
    this.disableVertexAttribArray();
};

/**
* Disable enabled vertex attributs array.
* @private
*/
Lemon.RenderAPI.WebGL.prototype.disableVertexAttribArray = function() 
{
    // Retrieve context.
    var gl = Lemon.GetContext();

    // Disable attributs.
    for( var i in this.enabledVertexAttribArray )
        gl.disableVertexAttribArray(i);
};

/**
 * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer.
 * @param {number} framebufferID Targeted slot's index.
 * @param {Array.<Lemon.Texture>} textures An array of Texture instances.
 * @param {boolean=} useDepthBuffer True to use a depth buffer (default: true).
 * @param {boolean=} useStencilBuffer True to use a depth buffer (default: false).
 */
Lemon.RenderAPI.WebGL.prototype.initFrameBuffer = function( framebufferID, textures, useDepthBuffer, useStencilBuffer )
{
    // Ensure FBO is ready.
    var webGLBuffer = this.instances.frameBuffers[framebufferID];
    if( !webGLBuffer )
        return;

    // Retrieve context.
    var gl   = Lemon.GetContext();
    var size = [0, 0]; // We will retrieve FBO's size from his textures.

    // Bind frame buffer.
    this.bindFrameBuffer(framebufferID);

    // Attach textures.
    for( var i = 0; i < textures.length; i++ )
    {
        // Force texture creation.
        this.bindTexture(i, textures[i]);

        // Retrieve size.
        size = textures[i].getImage().getSize();

        // Attach texture.
        var webGLTexture = this.instances.textures[textures[i].getUID()];

        // Multiple attachements are not supported by WebGL.
        gl.framebufferTexture2D(goog.webgl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, goog.webgl.TEXTURE_2D, webGLTexture, 0);
    }

    // Attach depth and/or stencil buffers.
    if( useDepthBuffer || useStencilBuffer )
    {
        var renderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(goog.webgl.RENDERBUFFER, renderBuffer);

        if( !useStencilBuffer )
        {
            gl.renderbufferStorage(goog.webgl.RENDERBUFFER, goog.webgl.DEPTH_COMPONENT16, size[0], size[1]);
            gl.framebufferRenderbuffer(goog.webgl.FRAMEBUFFER, goog.webgl.DEPTH_ATTACHMENT, goog.webgl.RENDERBUFFER, renderBuffer);                
        }
        else 
        {
            gl.renderbufferStorage(goog.webgl.RENDERBUFFER, goog.webgl.DEPTH_STENCIL, size[0], size[1]);
            gl.framebufferRenderbuffer(goog.webgl.FRAMEBUFFER, goog.webgl.DEPTH_STENCIL_ATTACHMENT, goog.webgl.RENDERBUFFER, renderBuffer);
        }

        gl.bindRenderbuffer(goog.webgl.RENDERBUFFER, null);
    }

    // Unbind FBO safely.
    this.bindFrameBuffer(-1);
};

/**
* Set default values on the state block instance.
* @private
*/
Lemon.RenderAPI.WebGL.prototype.initStateBlockWithDefaultValues = function( stateBlock ) 
{
    this.state.depthTest    = false;
    this.state.depthWrite   = false;
    this.state.stencilTest  = false;
};

/**
 * Send lights to the given program.
 * @param {Lemon.Program} program A Program instance.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.sendLights = function( program ) 
{
    var webGLProgram = this.instances.programs[program.getUID()];
    if( !webGLProgram )
        return;

    var lightCount = this.cache.lights.length;

    // Fill arrays.
    var light           = this.cache.lights[0];
    var needData        = false;
    var needDirection   = false;
    for( var i = 0, j = 0; i < this.cache.lights.length; i++, j += 3 )
    {
        light = this.cache.lights[i];

        // Type of light.
        if( light instanceof Lemon.PointLight ) 
            this.cache.lightsType[i]            = 0;
        else if( light instanceof Lemon.DirectionalLight ) 
            this.cache.lightsType[i]            = 1;
        else
            this.cache.lightsType[i]            = 2;

        // Ambient.
        var ambient                             = light.getAmbientColor();
        this.cache.lightsAmbient[j]             = ambient.r;
        this.cache.lightsAmbient[j+1]           = ambient.g;
        this.cache.lightsAmbient[j+2]           = ambient.b;

        // Data (linear, quadratic and constant data)
        if( this.cache.lightsType[i] != 1 )
        {
            var values                          = light.getValues();
            this.cache.lightsData[j]            = values[0];
            this.cache.lightsData[j+1]          = values[1];
            this.cache.lightsData[j+2]          = values[2];
            needData                            = true;
        }
        else
        {            
            this.cache.lightsData[j]            = 0;
            this.cache.lightsData[j+1]          = 0;
            this.cache.lightsData[j+2]          = 0;   
        }

        // Diffuse.
        var diffuse                             = light.getDiffuseColor();
        this.cache.lightsDiffuse[j]             = diffuse.r;
        this.cache.lightsDiffuse[j+1]           = diffuse.g;
        this.cache.lightsDiffuse[j+2]           = diffuse.b;

        // Direction.
        if( this.cache.lightsType[i] !== 0 )
        {
            var direction                       = light.getDirection();
            this.cache.lightsDirection[j]       = direction[0];
            this.cache.lightsDirection[j+1]     = direction[1];
            this.cache.lightsDirection[j+2]     = direction[2];
            needDirection                       = true;
        }
        else 
        {
            this.cache.lightsDirection[j]       = 0;
            this.cache.lightsDirection[j+1]     = 0;
            this.cache.lightsDirection[j+2]     = 0;            
        }

        var position                            = light.getPosition();
        this.cache.lightsPosition[j]            = position[0];
        this.cache.lightsPosition[j+1]          = position[1];
        this.cache.lightsPosition[j+2]          = position[2];

        // Specular.
        var specular                            = light.getSpecularColor();
        this.cache.lightsSpecular[j]            = specular.r;
        this.cache.lightsSpecular[j+1]          = specular.g;
        this.cache.lightsSpecular[j+2]          = specular.b;
    }

    // Send data.
    if( this.cache.lights.length )
    {        
        this.setUniform(program, 'uCameraPosition', Lemon.Type.Float, this.activeCamera.getPosition());
        this.setUniform(program, 'lights.count', Lemon.Type.Int, lightCount);
        this.setUniform(program, 'lights.ambient', Lemon.Type.Float, this.cache.lightsAmbient, 3);

        if( needData )
            this.setUniform(program, 'lights.data', Lemon.Type.Float, this.cache.lightsData, 3);

        this.setUniform(program, 'lights.diffuse', Lemon.Type.Float, this.cache.lightsDiffuse, 3);

        if( needDirection )
            this.setUniform(program, 'lights.direction', Lemon.Type.Float, this.cache.lightsDirection, 3);

        this.setUniform(program, 'lights.position', Lemon.Type.Float, this.cache.lightsPosition, 3);
        this.setUniform(program, 'lights.specular', Lemon.Type.Float, this.cache.lightsSpecular, 3);
        this.setUniform(program, 'lights.type', Lemon.Type.Int, this.cache.lightsType, 1);
    }
};

/**
 * Set camera to use.
 * @param {Lemon.Camera} camera A Camera instance.
 */
Lemon.RenderAPI.WebGL.prototype.setActiveCamera = function( camera ) 
{
    Lemon.RenderAPI.prototype.setActiveCamera.call(this, camera);

    var viewport = camera.getViewport();
    Lemon.GetContext().viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
};

/**
 * Set blend mode to apply.
 * @param {Lemon.BlendMode} blendMode A BlendMode instance.
 */
Lemon.RenderAPI.WebGL.prototype.setBlendMode = function( blendMode ) 
{
    // Avoid useless operations.
    if( blendMode.isEqual(this.state.blendMode) )
        return;

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Disable blending.
    if( blendMode.colorSourceFactor == Lemon.BlendMode.Factor.One && blendMode.colorDestinationFactor == Lemon.BlendMode.Factor.Zero )
        gl.disable(goog.webgl.BLEND);
    else
    {
        // Enable it.
        gl.enable(goog.webgl.BLEND);

        // Apply functions and equations.
        gl.blendEquationSeparate( this.convertBlendingEquationToConstant(blendMode.colorEquation), this.convertBlendingEquationToConstant(blendMode.alphaEquation) );

        gl.blendFuncSeparate(   this.convertBlendingFactorToConstant(blendMode.colorSourceFactor), 
                                this.convertBlendingFactorToConstant(blendMode.colorDestinationFactor), 
                                this.convertBlendingFactorToConstant(blendMode.alphaSourceFactor), 
                                this.convertBlendingFactorToConstant(blendMode.alphaDestinationFactor) );
    }

    this.state.blendMode = blendMode;
};

/**
 * Set depth state.
 * @param {boolean} depthTest True to activate depth testing, otherwise false.
 * @param {boolean} writeTest True to activate depth writing otherwise false.
 * @param {Lemon.DepthFunction} depthFunction Depth function to apply.
 */
Lemon.RenderAPI.WebGL.prototype.setDepthState = function( depthTest, writeTest, depthFunction ) 
{
    var gl = Lemon.GetContext();

    if( !depthTest && this.state.depthTest )
        gl.disable(goog.webgl.DEPTH_TEST);
    else if( depthTest )
    {
        if( !this.state.depthTest )
            gl.enable(goog.webgl.DEPTH_TEST);

        if( this.state.writeTest != writeTest )
        {
            gl.depthMask(writeTest);
            this.state.writeTest = writeTest;
        }

        if( this.state.depthFunction != depthFunction )
        {
            gl.depthFunc(this.convertDepthFunctionToConstant(depthFunction));
            this.state.depthFunction = depthFunction;
        }
    }

    this.state.depthTest = depthTest;
};

/**
 * Set face culling state.
 * @param {Lemon.FaceCulling} mode Face culling mode to set.
 */
Lemon.RenderAPI.WebGL.prototype.setFaceCulling = function( mode ) 
{
    // Avoid useless operations.
    if( this.state.faceCulling == mode )
        return;

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Apply state.
    if( mode == Lemon.FaceCulling.None )
        gl.disable(goog.webgl.CULL_FACE);
    else
    {
        if( this.state.faceCulling == Lemon.FaceCulling.None )
            gl.enable(goog.webgl.CULL_FACE);

        if( mode == Lemon.FaceCulling.Front )
            gl.cullFace(goog.webgl.FRONT);
        else
            gl.cullFace(goog.webgl.BACK);
    }

    this.state.faceCulling = mode;
};

/**
 * Set index buffer to use.
 * @param {number|WebGLBuffer} buffer A buffer instance.
 */
Lemon.RenderAPI.WebGL.prototype.setIndexBuffer = function( buffer ) 
{
    Lemon.GetContext().bindBuffer(goog.webgl.ELEMENT_ARRAY_BUFFER, buffer);
};

/**
 * Set geometry to use.
 * @param {Lemon.Geometry} geometry A Geometry instance.
 */
Lemon.RenderAPI.WebGL.prototype.setGeometry = function( geometry ) 
{
    // Ensure valid format is present.
    if( !geometry.getVertexFormat() )
        return;

    // Set vertex format to use.
    this.setVertexFormat(geometry.getVertexFormat());

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Create geometry's data.
    var geometryInstances = this.instances.buffers[geometry.getUID()];
    if( !geometryInstances )
    {
        geometryInstances = new Lemon.WebGLObjects.BufferData();
        this.instances.buffers[geometry.getUID()] = geometryInstances;
    }

    // Prepare/Set index buffer.
    {
        if( !geometryInstances.indexBuffer )
            geometryInstances.indexBuffer = gl.createBuffer();

        this.setIndexBuffer(geometryInstances.indexBuffer);

        // Update buffer data.
        if( this.cache.vertexFormat.isIndicesWaitingUpdate() )
        {
            gl.bufferData( goog.webgl.ELEMENT_ARRAY_BUFFER, geometry.getIndices(), goog.webgl.STATIC_DRAW );
            this.cache.vertexFormat.setIndicesAsWaitingUpdate(false);
        }
    }

    // Prepare/Set vertex buffer.
    var vertexElements = this.cache.vertexFormat.getElements();
    for( var i = 0; i < vertexElements.length; i++ )
    {
        if( !geometryInstances.vertexBuffers[i] )
            geometryInstances.vertexBuffers[i] = gl.createBuffer();

        // Apply buffer.
        this.setVertexBuffer(i, geometryInstances.vertexBuffers[i]);

        // Fill it.
        if( this.cache.vertexFormat.isStreamWaitingUpdate(vertexElements[i].stream) )
        { 
            var streamType = this.convertStreamTypeToConstant(this.cache.vertexFormat.getStreamType(vertexElements[i].stream));

            switch( vertexElements[i].usage )
            {
                case Lemon.VertexElement.Usage.Position:
                    gl.bufferData( goog.webgl.ARRAY_BUFFER, geometry.getVerticesPositions(), streamType );
                    break;
                case Lemon.VertexElement.Usage.Color:
                    gl.bufferData( goog.webgl.ARRAY_BUFFER, geometry.getVerticesColors(), streamType );
                    break;
                case Lemon.VertexElement.Usage.UVS:
                    gl.bufferData( goog.webgl.ARRAY_BUFFER, geometry.getVerticesUVs(), streamType );
                    break;
                case Lemon.VertexElement.Usage.Normal:
                    gl.bufferData( goog.webgl.ARRAY_BUFFER, geometry.getVerticesNormals(), streamType );
                    break;
                default:
                case Lemon.VertexElement.Usage.Tangent:
                    console.log('Given vertex element is not supported for now.');
                    break;
            }

            this.cache.vertexFormat.setStreamAsWaitingUpdate(vertexElements[i].usage, false);
        }
    }
};

/**
 * Set program to use.
 * @param {Lemon.Program} program A Program instance to use.
 * @return {number} -1: an error occured, 0: everything is ok, 1 : program have been changed.
 */
Lemon.RenderAPI.WebGL.prototype.setProgram = function( program ) 
{
    var webGLProgram = this.instances.programs[program.getUID()];

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Create program.
    if( !webGLProgram )
    {
        if( !program.isReady() )
            return -1;

        var sources     = program.getSources();
        var programID   = gl.createProgram();

        // Load vertex and fragment shaders.
        var vertexShader = gl.createShader(goog.webgl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, sources[0]);
        gl.compileShader(vertexShader);

        var fragmentShader = gl.createShader(goog.webgl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, sources[1]);
        gl.compileShader(fragmentShader);

        // Link to the program.
        gl.attachShader(programID, vertexShader);
        gl.attachShader(programID, fragmentShader);

        // Bind default locations.
        gl.bindAttribLocation(programID, Lemon.VertexElement.Usage.Position,   'aPosition');
        gl.bindAttribLocation(programID, Lemon.VertexElement.Usage.UVS,        'aTexCoord');
        gl.bindAttribLocation(programID, Lemon.VertexElement.Usage.Color,      'aColor');
        gl.bindAttribLocation(programID, Lemon.VertexElement.Usage.Normal,     'aNormal');
        gl.bindAttribLocation(programID, Lemon.VertexElement.Usage.Tangent,    'aTangent');

        // Link program.
        gl.linkProgram(programID);

        // Remove vertex and fragment from memory.
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        // Save it.
        this.instances.programs[program.getUID()] = programID;
        webGLProgram = programID;

        // Get uniforms and attributs informations.
        {
            var i;
            var activeUniforms  = gl.getProgramParameter(programID, goog.webgl.ACTIVE_UNIFORMS);
            var uniforms        = program.getUniforms();
            for( i = 0; i < activeUniforms; i++ ) 
            {
                var uniform   = gl.getActiveUniform(programID, i);

                var finalName = uniform.name;
                var arrayPos  = uniform.name.indexOf('[', uniform.name.length - 3);
                if( arrayPos >= 0 )
                    finalName = uniform.name.substring(0, arrayPos);

                uniforms[finalName] = new Lemon.Program.Element(gl.getUniformLocation(programID, uniform.name), 
                                                                finalName,
                                                                this.convertConstantToShaderTypes(uniform.type),
                                                                uniform.size);
            }

            var activeAttributes    = gl.getProgramParameter(programID, goog.webgl.ACTIVE_ATTRIBUTES);
            var attributes          = program.getAttributes();
            for( i = 0; i < activeAttributes; i++ ) 
            {
                var attribute = gl.getActiveAttrib(programID, i);
                attributes[attribute.name] = new Lemon.Program.Element( gl.getAttribLocation(programID, attribute.name), 
                                                                        attribute.name,
                                                                        this.convertConstantToShaderTypes(attribute.type),
                                                                        attribute.size);
            }
        }
    }

    // Bind program.
    if( this.cache.program != webGLProgram )
    {
        // Use Program.
        gl.useProgram(webGLProgram);
        this.cache.program = webGLProgram;

        // Send lights's informations.
        this.sendLights(program);

        return 1;
    }

    return 0;
};

/**
 * Set uniform value.
 * @param {Lemon.Program} program A Program instance to use.
 * @param {string} name Uniform's name.
 * @param {Lemon.Type} type Type of value to send.
 * @param {?Array<number>|Lemon.Texture|boolean|number|Float32Array} value A value.
 * @param {number=} groupCount When an element is an array, you can create group (like sub-array).
 * @return {boolean} True if uniform has been set successfully, otherwise false.
 */
Lemon.RenderAPI.WebGL.prototype.setUniform = function( program, name, type, value, groupCount ) 
{
    groupCount = groupCount || 0;

    // Check if program need to be set.
    this.setProgram(program);

    var uniform = program.getUniform(name);
    if( !uniform || !value )
        return false;

    // Retrieve context.
    var gl = Lemon.GetContext();

    // Send value to the program/shaders.
    switch(type)
    {
        case Lemon.Type.Float:
        {
            if( value instanceof Array )
            {
                if( groupCount && groupCount >= 1 )
                {
                    if( groupCount == 2 )
                        gl.uniform2fv(uniform.location, value);
                    else if( groupCount == 3 )
                        gl.uniform3fv(uniform.location, value);
                    else if( groupCount == 4 )
                        gl.uniform4fv(uniform.location, value);
                    else if( groupCount == 1 )
                        gl.uniform1fv(uniform.location, value);
                }
                else
                {
                    if( value.length == 3 )
                        gl.uniform3f(uniform.location, value[0], value[1], value[2]);
                    else if( value.length == 4 )
                        gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);
                    else if( value.length == 3 )
                        gl.uniform2f(uniform.location, value[0], value[1]);                    
                }    
            }
            else
                gl.uniform1f(uniform.location, value);

            break;
        }
        case Lemon.Type.Int:
        {
            if( value instanceof Array )
            {
                if( groupCount && groupCount >= 1 )
                {
                    if( groupCount == 2 )
                        gl.uniform2iv(uniform.location, value);
                    else if( groupCount == 3 )
                        gl.uniform3iv(uniform.location, value);
                    else if( groupCount == 4 )
                        gl.uniform4iv(uniform.location, value);
                    else if( groupCount == 1 )
                        gl.uniform1iv(uniform.location, value);
                }
                else
                {
                    if( value.length == 3 )
                        gl.uniform3i(uniform.location, value[0], value[1], value[2]);
                    else if( value.length == 4 )
                        gl.uniform4i(uniform.location, value[0], value[1], value[2], value[3]);
                    else if( value.length == 2 )
                        gl.uniform2i(uniform.location, value[0], value[1]); 
                }               
            }
            else
                gl.uniform1i(uniform.location, value);

            break;
        }
        case Lemon.Type.Matrix:
        {
            if( value.length == 16 )
                gl.uniformMatrix4fv(uniform.location, false, value);
            else if( value.length == 4 )
                gl.uniformMatrix2fv(uniform.location, false, value);
            else if( value.length == 9 )
                gl.uniformMatrix3fv(uniform.location, false, value);

            break;
        }
        default:
            break;
    }

    return true;
};

/**
 * Set scissor test state.
 * @param {boolean} state True to activate scissor testing, otherwise false.
 * @param {number} x Position on x from the left of the screen.
 * @param {number} y Position on y from the bottom of the screen.
 * @param {number} w Width of the rectangle.
 * @param {number} h Height of the rectangle.
 */
Lemon.RenderAPI.WebGL.prototype.setScissorTest = function( state, x, y, w, h ) 
{
    // Retrieve context.
    var gl = Lemon.GetContext();

    if( !state )
        gl.disable(goog.webgl.SCISSOR_TEST);
    else
    {
        gl.enable(goog.webgl.SCISSOR_TEST);
        gl.scissor(x, y, w, h);
    }
};

/**
 * Set stencil test state.
 * @param {boolean} activate True to activate stencil test, otherwise false.
 * @param {number} writeMask Stencil writing value.
 */
Lemon.RenderAPI.WebGL.prototype.setStencilState = function( activate, writeMask ) 
{
    // Retrieve context.
    var gl = Lemon.GetContext();

    if( !activate && this.state.stencilTest )
        gl.disable(goog.webgl.STENCIL_TEST);
    else if( activate )
    {
        if( !this.state.stencilTest )
            gl.enable(goog.webgl.STENCIL_TEST);

        if( this.state.stencilWrite != writeMask )
        {
            gl.stencilMask(writeMask);
            this.state.stencilWrite = writeMask;
        }
    }

    this.state.stencilTest = activate;
};

/**
 * Set stencil function to use.
 * @param {Lemon.StencilFunction} stencilFunction Function to use.
 * @param {number} reference Reference value.
 * @param {number} mask Mask to use.
 */
Lemon.RenderAPI.WebGL.prototype.setStencilFunction = function( stencilFunction, reference, mask ) 
{
    if( this.state.stencilFunction != stencilFunction || this.state.stencilReference != reference || this.state.stencilMask != mask )
    {
        Lemon.GetContext().stencilFunc(this.convertStencilFunctionToConstant(stencilFunction), reference, mask);
        this.state.stencilFunction  = stencilFunction;
        this.state.stencilReference = reference;
        this.state.stencilMask      = mask;
    }
};

/**
 * Set stencil operations to use.
 * @param {Lemon.StencilOperation} sFail Function to use.
 * @param {Lemon.StencilOperation} dpFail Reference value.
 * @param {Lemon.StencilOperation} dppPass Mask to use.
 */
Lemon.RenderAPI.WebGL.prototype.setStencilOperations = function( sFail, dpFail, dppPass ) 
{
    if( this.state.stencilTestFail != sFail || this.state.stencilDepthTestFail != dpFail || this.state.stencilSuccess != dppPass )
    {
        Lemon.GetContext().stencilOp(   this.convertStencilOperationToConstant(sFail), 
                                        this.convertStencilOperationToConstant(dpFail), 
                                        this.convertStencilOperationToConstant(dppPass) );

        this.state.stencilTestFail      = sFail;
        this.state.stencilDepthTestFail = dpFail;
        this.state.stencilSuccess       = dppPass;
    }
};

/**
 * Set vertex buffer to use.
 * Warning: You must call "setVertexFormat" before!
 * @param {number} stream An integer representing stream to use.
 * @param {number|WebGLBuffer} buffer A buffer instance.
 */
Lemon.RenderAPI.WebGL.prototype.setVertexBuffer = function( stream, buffer ) 
{
    // Retrieve context.
    var gl = Lemon.GetContext();

    // Bind buffer.
    gl.bindBuffer(goog.webgl.ARRAY_BUFFER, buffer);

    // Enable vertex data.
    var vertexElements = this.cache.vertexFormat.getElements();
    for( var i = 0; i < vertexElements.length; i++ )
    {
        if( vertexElements[i].stream == stream )
        {
            // Enable.
            gl.enableVertexAttribArray(vertexElements[i].usage);
            gl.vertexAttribPointer( vertexElements[i].usage, 
                                    vertexElements[i].count, 
                                    this.convertVertexTypeToConstant(vertexElements[i].type), 
                                    vertexElements[i].normalize, 
                                    this.cache.vertexFormat.getStreamStride(vertexElements[i].stream),
                                    vertexElements[i].offset);

            // Save attribut's state.
            this.enabledVertexAttribArray[vertexElements[i].usage] = true;
        }
    } 
};

/**
 * Set vertex format to use.
 * @param {Lemon.VertexFormat} format A VertexFormat instance.
 */
Lemon.RenderAPI.WebGL.prototype.setVertexFormat = function( format ) 
{
    this.cache.vertexFormat = format;
};

/* ------------------------------------------------------------------------------------------ */
///
/// Conversions functions
///
/* ------------------------------------------------------------------------------------------ */
/**
 * Convert the given factor to a WebGL factor equivalent.
 * @param {Lemon.BlendMode.Factor} factor A blending Factor instance.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertBlendingFactorToConstant = function( factor ) 
{
    switch(factor)
    {
        default:
        case Lemon.BlendMode.Factor.Zero:                           return goog.webgl.ZERO;
        case Lemon.BlendMode.Factor.One:                            return goog.webgl.ONE;
        case Lemon.BlendMode.Factor.SourceColor:                    return goog.webgl.SRC_COLOR;
        case Lemon.BlendMode.Factor.OneMinusSourceColor:            return goog.webgl.ONE_MINUS_SRC_COLOR;
        case Lemon.BlendMode.Factor.DestinationColor:               return goog.webgl.DST_COLOR;
        case Lemon.BlendMode.Factor.OneMinusDestinationColor:       return goog.webgl.ONE_MINUS_DST_COLOR;
        case Lemon.BlendMode.Factor.SourceAlpha:                    return goog.webgl.SRC_ALPHA;
        case Lemon.BlendMode.Factor.OneMinusSourceAlpha:            return goog.webgl.ONE_MINUS_SRC_ALPHA;
        case Lemon.BlendMode.Factor.DestinationAlpha:               return goog.webgl.DST_ALPHA;
        case Lemon.BlendMode.Factor.OneMinusDestinationAlpha:       return goog.webgl.ONE_MINUS_DST_ALPHA;
    }
};

/**
 * Convert the given equation to an equivalent WebGL equation.
 * @param {Lemon.BlendMode.Equation} equation A blending Equation value.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertBlendingEquationToConstant = function( equation ) 
{
    switch(equation)
    {
        default:
        case Lemon.BlendMode.Equation.Add:                          return goog.webgl.FUNC_ADD;
        case Lemon.BlendMode.Equation.Subtract:                     return goog.webgl.FUNC_SUBTRACT;
    }
};

/**
 * Convert the given depth function to an equivalent WebGL function.
 * @param {Lemon.DepthFunction} depthFunction A DepthFunction value.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertDepthFunctionToConstant = function( depthFunction ) 
{
    switch(depthFunction)
    {
        case Lemon.DepthFunction.Never:                             return goog.webgl.NEVER;
        case Lemon.DepthFunction.Less:                              return goog.webgl.LESS;
        case Lemon.DepthFunction.Equal:                             return goog.webgl.EQUAL;
        case Lemon.DepthFunction.LessEqual:                         return goog.webgl.LEQUAL;
        case Lemon.DepthFunction.Greater:                           return goog.webgl.GREATER;
        case Lemon.DepthFunction.NotEqual:                          return goog.webgl.NOTEQUAL;
        case Lemon.DepthFunction.GreaterEqual:                      return goog.webgl.GEQUAL;
        case Lemon.DepthFunction.Always:                            return goog.webgl.ALWAYS;
        default:                                                    return goog.webgl.LEQUAL;
    }
};

/**
 * Convert the given drawing mode to an equivalent WebGL value.
 * @param {Lemon.DrawingMode} drawingMode A drawing mode.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertDrawingModeToConstant = function( drawingMode ) 
{
    switch(drawingMode)
    {
        default:
        case Lemon.DrawingMode.Points:                              return goog.webgl.POINTS;
        case Lemon.DrawingMode.Lines:                               return goog.webgl.LINES;
        case Lemon.DrawingMode.LinesStrip:                          return goog.webgl.LINE_STRIP;
        case Lemon.DrawingMode.LinesLoop:                           return goog.webgl.LINE_LOOP;
        case Lemon.DrawingMode.Triangles:                           return goog.webgl.TRIANGLES;
        case Lemon.DrawingMode.TrianglesStrip:                      return goog.webgl.TRIANGLE_STRIP;
        case Lemon.DrawingMode.TrianglesFan:                        return goog.webgl.TRIANGLE_FAN;
    }
};

/**
 * Convert the given stencil function to an equivalent WebGL function.
 * @param {Lemon.StencilFunction} stencilFunction A StencilFunction value.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertStencilFunctionToConstant = function( stencilFunction ) 
{
    switch(stencilFunction)
    {
        case Lemon.StencilFunction.Never:                           return goog.webgl.NEVER;
        case Lemon.StencilFunction.Less:                            return goog.webgl.LESS;
        case Lemon.StencilFunction.Equal:                           return goog.webgl.EQUAL;
        case Lemon.StencilFunction.LessEqual:                       return goog.webgl.LEQUAL;
        case Lemon.StencilFunction.Greater:                         return goog.webgl.GREATER;
        case Lemon.StencilFunction.NotEqual:                        return goog.webgl.NOTEQUAL;
        case Lemon.StencilFunction.GreaterEqual:                    return goog.webgl.GEQUAL;
        case Lemon.StencilFunction.Always:                          return goog.webgl.ALWAYS;
        default:                                                    return goog.webgl.LEQUAL;
    }
};

/**
 * Convert the given stencil operation to an equivalent WebGL function.
 * @param {Lemon.StencilOperation} operation A StencilOperation value.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertStencilOperationToConstant = function( operation ) 
{
    switch(operation)
    {
        default:
        case Lemon.StencilOperation.Keep:                            return goog.webgl.KEEP;
        case Lemon.StencilOperation.Zero:                            return goog.webgl.ZERO;
        case Lemon.StencilOperation.Replace:                         return goog.webgl.REPLACE;
        case Lemon.StencilOperation.Increment:                       return goog.webgl.INCR;
        case Lemon.StencilOperation.Decrement:                       return goog.webgl.DECR;
        case Lemon.StencilOperation.Invert:                          return goog.webgl.INVERT;
        case Lemon.StencilOperation.IncrementWrap:                   return goog.webgl.INCR_WRAP;
        case Lemon.StencilOperation.DecrementWrap:                   return goog.webgl.DECR_WRAP;
    }
};

/**
 * Convert the given vertex type to an equivalent WebGL type.
 * @param {Lemon.VertexElement.Type} type A VertexElement type.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertVertexTypeToConstant = function( type ) 
{
    switch(type)
    {
        default:
        case Lemon.VertexElement.Type.Byte:                             return goog.webgl.BYTE;
        case Lemon.VertexElement.Type.Float:                            return goog.webgl.FLOAT;
        case Lemon.VertexElement.Type.Int:                              return goog.webgl.INT;
        case Lemon.VertexElement.Type.Short:                            return goog.webgl.SHORT;
    }
};

/**
 * Convert the given type of stream to an equivalent WebGL type.
 * @param {Lemon.VertexElement.StreamType} type A StreamType.
 * @return {number} A WebGL value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertStreamTypeToConstant = function( type ) 
{
    switch(type)
    {
        default:
        case Lemon.VertexElement.StreamType.Static:                     return goog.webgl.STATIC_DRAW;
        case Lemon.VertexElement.StreamType.Dynamic:                    return goog.webgl.DYNAMIC_DRAW;
        case Lemon.VertexElement.StreamType.Stream:                     return goog.webgl.STREAM_DRAW;
    }
};

/**
 * Convert the given type to a Lemon equivalent.
 * @param {number} type A WebGL value.
 * @return {Lemon.Type} A custom type value.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertConstantToShaderTypes = function( type ) 
{
    switch(type)
    {
        default:
        case goog.webgl.FLOAT:
        case goog.webgl.FLOAT_VEC2:
        case goog.webgl.FLOAT_VEC3:
        case goog.webgl.FLOAT_VEC4:
            return Lemon.Type.Float;
        case goog.webgl.INT:
        case goog.webgl.INT_VEC2:
        case goog.webgl.INT_VEC3:
        case goog.webgl.INT_VEC4:
            return Lemon.Type.Int;
        case goog.webgl.BOOL:
        case goog.webgl.BOOL_VEC2:
        case goog.webgl.BOOL_VEC3:
        case goog.webgl.BOOL_VEC4:
            return Lemon.Type.Bool;
        case goog.webgl.FLOAT_MAT2:
        case goog.webgl.FLOAT_MAT3:
        case goog.webgl.FLOAT_MAT4:
            return Lemon.Type.Matrix;
        case goog.webgl.SAMPLER_2D:
            return Lemon.Type.Texture2D;
        case goog.webgl.SAMPLER_CUBE:
            return Lemon.Type.TextureCube;
        case goog.webgl.BYTE:
            return Lemon.Type.Byte;
        case goog.webgl.UNSIGNED_BYTE:
            return Lemon.Type.u_Byte;
        case goog.webgl.SHORT:
            return Lemon.Type.Short;
        case goog.webgl.UNSIGNED_SHORT:
            return Lemon.Type.u_Short;
        case goog.webgl.UNSIGNED_INT:
            return Lemon.Type.u_Int;
    }
};

/**
 * Convert the given webgl shader's type to an equivalent Lemon value.
 * @param {number} type A WebGL value.
 * @return {number} A number representing element count for the given type.
 * @private
 */
Lemon.RenderAPI.WebGL.prototype.convertConstantToShaderCount = function( type ) 
{
    switch(type)
    {
        default:
        case goog.webgl.FLOAT:
        case goog.webgl.INT:
        case goog.webgl.BOOL:
        case goog.webgl.SAMPLER_2D:
        case goog.webgl.SAMPLER_CUBE:
        case goog.webgl.BYTE:
        case goog.webgl.UNSIGNED_BYTE:
        case goog.webgl.SHORT:
        case goog.webgl.UNSIGNED_SHORT:
        case goog.webgl.UNSIGNED_INT:
            return 1;
        case goog.webgl.FLOAT_VEC2:
        case goog.webgl.INT_VEC2:
        case goog.webgl.BOOL_VEC2:
        case goog.webgl.FLOAT_MAT2:
            return 2;
        case goog.webgl.FLOAT_VEC3:
        case goog.webgl.INT_VEC3:
        case goog.webgl.BOOL_VEC3:
        case goog.webgl.FLOAT_MAT3:
            return 3;
        case goog.webgl.FLOAT_VEC4:
        case goog.webgl.INT_VEC4:
        case goog.webgl.BOOL_VEC4:
        case goog.webgl.FLOAT_MAT4:
            return 4;
    }
};
