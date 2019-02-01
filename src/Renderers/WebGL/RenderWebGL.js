import * as WebGLConst from 'webgl-constants';

import BlendMode from '../../BlendMode';
import Cache from './Cache';
import Context from '../../Context';
import DirectionalLight from '../../Lights/DirectionalLight';
import { Instances, BufferData } from './Instances';
import PointLight from '../../Lights/PointLight';
import { ProgramElement } from '../../Program';
import RenderAPI from '../RenderAPI';
import { FaceCulling, StateBlock } from '../../StateBlock';
import TextureCube from '../../Textures/TextureCube';
import TextureVideo from '../../Textures/TextureVideo';
import Type from '../../Types';
import TypesConverter from './TypesConverter';
import { VertexElement } from '../../VertexFormat';

// Unique instance
let instance = null;

/**
 * WebGL renderer
 *
 * @category WebGL
 * @extends {RenderAPI}
 */
class WebGL extends RenderAPI {
    /**
     * Constructor
     */
    constructor() {
        super();

        // Singleton
        if (!instance) {
            instance = this;
        }

        /**
         * Cache
         *
         * @type {WebGL.Cache}
         * @private
         */
        this.cache = new Cache();

        /**
         * Array with enabled attribut
         *
         * @type {Array.<boolean>}
         * @private
         */
        this.enabledVertexAttribArray = [];

        /**
         * WebGL instances
         *
         * @type {Instances}
         * @private
         */
        this.instances = new Instances();

        /**
         * Active states
         *
         * @type {StateBlock}
         * @private
         */
        this.state = new StateBlock();

        // Init state block and types
        TypesConverter.init();
        this.initStateBlockWithDefaultValues(this.state);

        return instance;
    }

    /**
     * Get unique instance
     */
    static getInstance() {
        if (!instance) {
            instance = new WebGL();
        }

        return instance;
    }

    /**
     * Bind light
     *
     * @param {Light} light A Light instance
     */
    bindLight(light) {
        this.cache.lights.push(light);
    }

    /**
     * Bind the given framebuffer
     *
     * @param {number} framebufferID An identifier, -1 to bind default the frame buffer
     */
    bindFrameBuffer(framebufferID) {
        const gl = Context.getActive();

        if (framebufferID === -1) {
            gl.bindFramebuffer(WebGLConst.GL_FRAMEBUFFER, null);
        } else {
            const webGLBuffer = this.instances.frameBuffers[framebufferID];
            if (!webGLBuffer) {
                return;
            }

            gl.bindFramebuffer(WebGLConst.GL_FRAMEBUFFER, webGLBuffer);
        }
    }

    /**
     * Bind texture to the the given slot
     *
     * @param {number} slot Targeted slot's index
     * @param {Private.TextureInterface} texture A Texture instance
     */
    bindTexture(slot, texture) {
        if (!texture.isReady()) {
            return;
        }

        const isTextureVideo = (texture instanceof TextureVideo);
        let needUpdate = false;

        // Retrieve context
        const gl = Context.getActive();

        // Create WebGL instance
        let webGLTexture = this.instances.textures[texture.getUID()];
        if (!webGLTexture) {
            webGLTexture = gl.createTexture();
            this.instances.textures[texture.getUID()] = webGLTexture;
            needUpdate = true;
        }

        // Bind it!
        if (this.cache.texture !== texture) {
            gl.activeTexture(WebGLConst.GL_TEXTURE0 + slot);
            gl.bindTexture(WebGLConst.GL_TEXTURE_2D, webGLTexture);
        }

        // Need to update the texture?
        if (needUpdate) {
            let imageSize = [0, 0];

            gl.pixelStorei(WebGLConst.GL_UNPACK_FLIP_Y_WEBGL, true);

            // Upload to the GPU
            if (isTextureVideo) {
                gl.texImage2D(WebGLConst.GL_TEXTURE_2D, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, texture.getVideoData());
            } else {
                // WebGL support image loading from HTMLImage instance and from array of pixels
                const image = texture.getImage();
                const data = image.getData();
                imageSize = image.getSize();

                if (data instanceof Image) {
                    gl.texImage2D(WebGLConst.GL_TEXTURE_2D, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, data);
                } else {
                    gl.texImage2D(WebGLConst.GL_TEXTURE_2D, 0, WebGLConst.GL_RGBA, imageSize[0], imageSize[1], 0, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, data);
                }
            }

            const isPOT = ((imageSize[0] & (imageSize[0] - 1)) === 0) && ((imageSize[1] & (imageSize[1] - 1)) === 0);

            // Apply filters.
            gl.texParameteri(WebGLConst.GL_TEXTURE_2D, WebGLConst.GL_TEXTURE_WRAP_S, (texture.isRepeated() ? WebGLConst.GL_REPEAT : WebGLConst.GL_CLAMP_TO_EDGE));
            gl.texParameteri(WebGLConst.GL_TEXTURE_2D, WebGLConst.GL_TEXTURE_WRAP_T, (texture.isRepeated() ? WebGLConst.GL_REPEAT : WebGLConst.GL_CLAMP_TO_EDGE));

            gl.texParameteri(WebGLConst.GL_TEXTURE_2D, WebGLConst.GL_TEXTURE_MAG_FILTER, (texture.isSmoothed() ? WebGLConst.GL_LINEAR : WebGLConst.GL_NEAREST));

            const minFilter = (isPOT && texture.isMipmaped()) ? WebGLConst.GL_LINEAR_MIPMAP_NEAREST : WebGLConst.GL_LINEAR;
            gl.texParameteri(WebGLConst.GL_TEXTURE_2D, WebGLConst.GL_TEXTURE_MIN_FILTER, (texture.isSmoothed() ? minFilter : WebGLConst.GL_NEAREST));

            if (!isTextureVideo && isPOT && texture.isMipmaped()) {
                gl.generateMipmap(WebGLConst.GL_TEXTURE_2D);
            }
        } else if (isTextureVideo) {
            // Video need to be updated continuously
            gl.texImage2D(WebGLConst.GL_TEXTURE_2D, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, texture.getVideoData());
        }

        this.cache.texture = texture;
    }

    /**
     * Bind texture cube to the the given slot
     *
     * @param {number} slot Targeted slot's index
     * @param {TextureCube} texture A TextureCube instance
     */
    bindTextureCube(slot, texture) {
        // Cache
        if (!texture.isReady()) {
            return;
        }

        // Retrieve context
        const gl = Context.getActive();

        // Create geometry's data
        let needUpdate = false;
        let webGLTexture = this.instances.textures[texture.getUID()];
        if (!webGLTexture) {
            webGLTexture = gl.createTexture();
            this.instances.textures[texture.getUID()] = webGLTexture;
            needUpdate = true;
        }

        if (this.cache.texture !== texture) {
            gl.activeTexture(WebGLConst.GL_TEXTURE0 + slot);
            gl.bindTexture(WebGLConst.GL_TEXTURE_CUBE_MAP, webGLTexture);
        }

        // Need to update the texture?
        if (needUpdate) {
            const images = texture.getImages();

            // Upload to the GPU
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_POSITIVE_X, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Left].getData());
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_NEGATIVE_X, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Right].getData());
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_POSITIVE_Y, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Up].getData());
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Down].getData());
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_POSITIVE_Z, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Front].getData());
            gl.texImage2D(WebGLConst.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, WebGLConst.GL_RGBA, WebGLConst.GL_RGBA, WebGLConst.GL_PIXEL_UNSIGNED_BYTE, images[TextureCube.Face.Back].getData());

            // Apply filters
            gl.texParameteri(WebGLConst.GL_TEXTURE_CUBE_MAP, WebGLConst.GL_TEXTURE_MAG_FILTER, WebGLConst.GL_NEAREST);
            gl.texParameteri(WebGLConst.GL_TEXTURE_CUBE_MAP, WebGLConst.GL_TEXTURE_MIN_FILTER, WebGLConst.GL_NEAREST);
        }

        this.cache.texture = texture;
    }

    /**
     * Clear the rendering target
     *
     * @param {Color} color A Color instance
     */
    clear(color) {
        // Apply color.
        if (!color.isEqual(this.cache.clearColor)) {
            Context.getActive().clearColor(color.r, color.g, color.b, color.a);
            this.cache.clearColor = color;
        }

        // Clear buffers
        Context.getActive().clear(WebGLConst.GL_COLOR_BUFFER_BIT | WebGLConst.GL_DEPTH_BUFFER_BIT | WebGLConst.GL_DEPTH_BUFFER_BIT);
    }

    /**
     * Clear cache.
     */
    clearCache() {
        this.cache.program = null;
        this.cache.lights.length = 0;
    }

    /**
     * Create a new frame buffer
     *
     * @return {number} An identifier to work with it later
     */
    createFrameBuffer() {
        const identifier = this.instances.frameBuffers.length;
        const frameBuffer = Context.getActive().createFramebuffer();
        this.instances.frameBuffers.push(frameBuffer);

        return identifier;
    }

    /**
    * Draw indexed primitives
    *
    * @param {DrawingMode} drawingMode Drawing mode to use
    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
    * @param {number} vertexCount Vertex count to draw
    */
    drawIndexedPrimitives(drawingMode, firstVertexIndex, vertexCount) {
        Context.getActive().drawElements(TypesConverter.drawingModeToConstant.get(drawingMode), vertexCount, WebGLConst.GL_DATA_UNSIGNED_SHORT, firstVertexIndex);
        this.disableVertexAttribArray();
    }

    /**
    * Draw primitives
    *
    * @param {DrawingMode} drawingMode Drawing mode to use
    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
    * @param {number} vertexCount Vertex count to draw
    */
    drawPrimitives(drawingMode, firstVertexIndex, vertexCount) {
        Context.getActive().drawArrays(TypesConverter.drawingModeToConstant.get(drawingMode), firstVertexIndex, vertexCount);
        this.disableVertexAttribArray();
    }

    /**
    * Disable enabled vertex attributs array
    *
    * @private
    */
    disableVertexAttribArray() {
        // Retrieve context.
        const gl = Context.getActive();

        // Disable attributs
        for (const i in this.enabledVertexAttribArray) {
            gl.disableVertexAttribArray(i);
        }
    }

    /**
     * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer
     *
     * @param {number} framebufferID Targeted slot's index
     * @param {Array.<Texture>} textures An array of Texture instances
     * @param {boolean=} useDepthBuffer True to use a depth buffer
     * @param {boolean=} useStencilBuffer True to use a stencil buffer
     */
    initFrameBuffer(framebufferID, textures, useDepthBuffer = true, useStencilBuffer = false) {
        // Ensure FBO is ready
        const webGLBuffer = this.instances.frameBuffers[framebufferID];
        if (!webGLBuffer) {
            return;
        }

        // Retrieve context
        const gl = Context.getActive();
        let size = [0, 0]; // We will retrieve FBO's size from his textures

        // Bind frame buffer
        this.bindFrameBuffer(framebufferID);

        // Attach textures.
        for (let i = 0; i < textures.length; i += 1) {
            // Force texture creation
            this.bindTexture(i, textures[i]);

            // Retrieve size
            size = textures[i].getImage().getSize();

            // Attach texture
            const webGLTexture = this.instances.textures[textures[i].getUID()];

            // Multiple attachements are not supported by WebGL
            gl.framebufferTexture2D(WebGLConst.GL_FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, WebGLConst.GL_TEXTURE_2D, webGLTexture, 0);
        }

        // Attach depth and/or stencil buffers.
        if (useDepthBuffer || useStencilBuffer) {
            const renderBuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(WebGLConst.GL_RENDERBUFFER, renderBuffer);

            if (!useStencilBuffer) {
                gl.renderbufferStorage(WebGLConst.GL_RENDERBUFFER, WebGLConst.GL_DEPTH_COMPONENT16, size[0], size[1]);
                gl.framebufferRenderbuffer(WebGLConst.GL_FRAMEBUFFER, WebGLConst.GL_DEPTH_ATTACHMENT, WebGLConst.GL_RENDERBUFFER, renderBuffer);
            } else {
                gl.renderbufferStorage(WebGLConst.GL_RENDERBUFFER, WebGLConst.GL_DEPTH_STENCIL, size[0], size[1]);
                gl.framebufferRenderbuffer(WebGLConst.GL_FRAMEBUFFER, WebGLConst.GL_DEPTH_STENCIL_ATTACHMENT, WebGLConst.GL_RENDERBUFFER, renderBuffer);
            }

            gl.bindRenderbuffer(WebGLConst.GL_RENDERBUFFER, null);
        }

        // Unbind FBO safely
        this.bindFrameBuffer(-1);
    }

    /**
    * Set default values on the state block instance
    *
    * @private
    */
    initStateBlockWithDefaultValues() {
        this.state.depthTest = false;
        this.state.depthWrite = false;
        this.state.stencilTest = false;
    }

    /**
     * Send lights to the given program
     *
     * @param {Program} program A Program instance
     * @private
     */
    sendLights(program) {
        const webGLProgram = this.instances.programs[program.getUID()];
        if (!webGLProgram) {
            return;
        }

        const lightCount = this.cache.lights.length;

        // Fill arrays.
        let needData = false;
        let needDirection = false;
        for (let i = 0, j = 0; i < this.cache.lights.length; i += 1, j += 3) {
            const light = this.cache.lights[i];

            // Type of light
            if (light instanceof PointLight) {
                this.cache.lightsType[i] = 0;
            } else if (light instanceof DirectionalLight) {
                this.cache.lightsType[i] = 1;
            } else {
                this.cache.lightsType[i] = 2;
            }

            // Ambient
            const ambient = light.getAmbientColor();
            this.cache.lightsAmbient[j] = ambient.r;
            this.cache.lightsAmbient[j + 1] = ambient.g;
            this.cache.lightsAmbient[j + 2] = ambient.b;

            // Data (linear, quadratic and constant data)
            if (this.cache.lightsType[i] !== 1) {
                const values = light.getValues();
                this.cache.lightsData[j] = values[0];
                this.cache.lightsData[j + 1] = values[1];
                this.cache.lightsData[j + 2] = values[2];
                needData = true;
            } else {
                this.cache.lightsData[j] = 0;
                this.cache.lightsData[j + 1] = 0;
                this.cache.lightsData[j + 2] = 0;
            }

            // Diffuse.
            const diffuse = light.getDiffuseColor();
            this.cache.lightsDiffuse[j] = diffuse.r;
            this.cache.lightsDiffuse[j + 1] = diffuse.g;
            this.cache.lightsDiffuse[j + 2] = diffuse.b;

            // Direction.
            if (this.cache.lightsType[i] !== 0) {
                const direction = light.getDirection();
                this.cache.lightsDirection[j] = direction[0];
                this.cache.lightsDirection[j + 1] = direction[1];
                this.cache.lightsDirection[j + 2] = direction[2];
                needDirection = true;
            } else {
                this.cache.lightsDirection[j] = 0;
                this.cache.lightsDirection[j + 1] = 0;
                this.cache.lightsDirection[j + 2] = 0;
            }

            const position = light.getPosition();
            this.cache.lightsPosition[j] = position[0];
            this.cache.lightsPosition[j + 1] = position[1];
            this.cache.lightsPosition[j + 2] = position[2];

            // Specular.
            const specular = light.getSpecularColor();
            this.cache.lightsSpecular[j] = specular.r;
            this.cache.lightsSpecular[j + 1] = specular.g;
            this.cache.lightsSpecular[j + 2] = specular.b;
        }

        // Send data.
        if (this.cache.lights.length) {
            this.setUniform(program, 'uCameraPosition', Type.Float, this.activeCamera.getPosition());
            this.setUniform(program, 'lights.count', Type.Int, lightCount);
            this.setUniform(program, 'lights.ambient', Type.Float, this.cache.lightsAmbient, 3);

            if (needData) {
                this.setUniform(program, 'lights.data', Type.Float, this.cache.lightsData, 3);
            }

            this.setUniform(program, 'lights.diffuse', Type.Float, this.cache.lightsDiffuse, 3);

            if (needDirection) {
                this.setUniform(program, 'lights.direction', Type.Float, this.cache.lightsDirection, 3);
            }

            this.setUniform(program, 'lights.position', Type.Float, this.cache.lightsPosition, 3);
            this.setUniform(program, 'lights.specular', Type.Float, this.cache.lightsSpecular, 3);
            this.setUniform(program, 'lights.type', Type.Int, this.cache.lightsType, 1);
        }
    }

    /**
     * Set camera to use
     *
     * @param {Camera} camera A Camera instance
     */
    setActiveCamera(camera) {
        super.setActiveCamera(camera);

        const viewport = camera.getViewport();
        Context.getActive().viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
    }

    /**
     * Set blend mode to apply
     *
     * @param {BlendMode} blendMode A BlendMode instance
     */
    setBlendMode(blendMode) {
        // Avoid useless operations
        if (blendMode.isEqual(this.state.blendMode)) {
            return;
        }

        // Retrieve context
        const gl = Context.getActive();

        // Disable blending.
        if (blendMode.colorSourceFactor === BlendMode.Factor.One && blendMode.colorDestinationFactor === BlendMode.Factor.Zero) {
            gl.disable(WebGLConst.GL_BLEND);
        } else {
            // Enable it
            gl.enable(WebGLConst.GL_BLEND);

            // Apply functions and equations
            /* eslint max-len: ["error", { "code": 400 }] */
            gl.blendEquationSeparate(TypesConverter.blendingEquationToConstant.get(blendMode.colorEquation), TypesConverter.blendingEquationToConstant.get(blendMode.alphaEquation));
            gl.blendFuncSeparate(TypesConverter.blendingFactorToConstant.get(blendMode.colorSourceFactor),
                TypesConverter.blendingFactorToConstant.get(blendMode.colorDestinationFactor),
                TypesConverter.blendingFactorToConstant.get(blendMode.alphaSourceFactor),
                TypesConverter.blendingFactorToConstant.get(blendMode.alphaDestinationFactor));
        }

        this.state.blendMode = blendMode;
    }

    /**
     * Set depth state
     *
     * @param {boolean} depthTest True to activate depth testing, otherwise false
     * @param {boolean} writeTest True to activate depth writing otherwise false
     * @param {DepthFunction} depthFunction Depth function to apply
     */
    setDepthState(depthTest, writeTest, depthFunction) {
        const gl = Context.getActive();

        if (!depthTest && this.state.depthTest) {
            gl.disable(WebGLConst.GL_DEPTH_TEST);
        } else if (depthTest) {
            if (!this.state.depthTest) {
                gl.enable(WebGLConst.GL_DEPTH_TEST);
            }

            if (this.state.writeTest !== writeTest) {
                gl.depthMask(writeTest);
                this.state.writeTest = writeTest;
            }

            if (this.state.depthFunction !== depthFunction) {
                gl.depthFunc(TypesConverter.depthFunctionToConstant.get(depthFunction));
                this.state.depthFunction = depthFunction;
            }
        }

        this.state.depthTest = depthTest;
    }

    /**
     * Set face culling state
     *
     * @param {FaceCulling} mode Face culling mode to set
     */
    setFaceCulling(mode) {
        // Avoid useless operations
        if (this.state.faceCulling === mode) {
            return;
        }

        // Retrieve context
        const gl = Context.getActive();

        // Apply state
        if (mode === FaceCulling.None) {
            gl.disable(WebGLConst.GL_CULL_FACE);
        } else {
            if (this.state.faceCulling === FaceCulling.None) {
                gl.enable(WebGLConst.GL_CULL_FACE);
            }

            if (mode === FaceCulling.Front) {
                gl.cullFace(WebGLConst.GL_FRONT);
            } else {
                gl.cullFace(WebGLConst.GL_BACK);
            }
        }

        this.state.faceCulling = mode;
    }

    /**
     * Set index buffer to use
     *
     * @param {number|WebGLBuffer} buffer A buffer instance
     */
    setIndexBuffer(buffer) {
        Context.getActive().bindBuffer(WebGLConst.GL_ELEMENT_ARRAY_BUFFER, buffer);
    }

    /**
     * Set geometry to use
     *
     * @param {Geometry} geometry A Geometry instance
     */
    setGeometry(geometry) {
        // Ensure valid format is present
        if (!geometry.getVertexFormat()) {
            return;
        }

        // Set vertex format to use
        this.setVertexFormat(geometry.getVertexFormat());

        // Retrieve context
        const gl = Context.getActive();

        // Create geometry's data
        let geometryInstances = this.instances.buffers[geometry.getUID()];
        if (!geometryInstances) {
            geometryInstances = new BufferData();
            this.instances.buffers[geometry.getUID()] = geometryInstances;
        }

        // Prepare/Set index buffer
        if (!geometryInstances.indexBuffer) {
            geometryInstances.indexBuffer = gl.createBuffer();
        }

        this.setIndexBuffer(geometryInstances.indexBuffer);

        // Update buffer data
        if (this.cache.vertexFormat.isIndicesWaitingUpdate()) {
            gl.bufferData(WebGLConst.GL_ELEMENT_ARRAY_BUFFER, geometry.getIndices(), WebGLConst.GL_STATIC_DRAW);
            this.cache.vertexFormat.setIndicesAsWaitingUpdate(false);
        }

        // Prepare/Set vertex buffer
        const vertexElements = this.cache.vertexFormat.getElements();
        for (let i = 0; i < vertexElements.length; i += 1) {
            if (!geometryInstances.vertexBuffers[i]) {
                geometryInstances.vertexBuffers[i] = gl.createBuffer();
            }

            // Apply buffer
            this.setVertexBuffer(i, geometryInstances.vertexBuffers[i]);

            // Fill it
            if (this.cache.vertexFormat.isStreamWaitingUpdate(vertexElements[i].stream)) {
                const streamType = TypesConverter.streamTypeToConstant.get(this.cache.vertexFormat.getStreamType(vertexElements[i].stream));

                switch (vertexElements[i].usage) {
                case VertexElement.Usage.Position:
                    gl.bufferData(WebGLConst.GL_ARRAY_BUFFER, geometry.getVerticesPositions(), streamType);
                    break;
                case VertexElement.Usage.Color:
                    gl.bufferData(WebGLConst.GL_ARRAY_BUFFER, geometry.getVerticesColors(), streamType);
                    break;
                case VertexElement.Usage.UVS:
                    gl.bufferData(WebGLConst.GL_ARRAY_BUFFER, geometry.getVerticesUVs(), streamType);
                    break;
                case VertexElement.Usage.Normal:
                    gl.bufferData(WebGLConst.GL_ARRAY_BUFFER, geometry.getVerticesNormals(), streamType);
                    break;
                default:
                case VertexElement.Usage.Tangent:
                    console.log('Given vertex element is not supported for now.');
                    break;
                }

                this.cache.vertexFormat.setStreamAsWaitingUpdate(vertexElements[i].usage, false);
            }
        }
    }

    /**
     * Set program to use
     *
     * @param {Program} program A Program instance to use
     * @return {number} -1: an error occured, 0: everything is ok, 1 : program have been changed
     */
    setProgram(program) {
        let webGLProgram = this.instances.programs[program.getUID()];

        // Retrieve context.
        const gl = Context.getActive();

        // Create program.
        if (!webGLProgram) {
            if (!program.isReady()) {
                return -1;
            }

            const sources = program.getSources();
            const programID = gl.createProgram();

            // Load vertex and fragment shaders
            const vertexShader = gl.createShader(WebGLConst.GL_VERTEX_SHADER);
            gl.shaderSource(vertexShader, sources[0]);
            gl.compileShader(vertexShader);

            const fragmentShader = gl.createShader(WebGLConst.GL_FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, sources[1]);
            gl.compileShader(fragmentShader);

            // Link to the program
            gl.attachShader(programID, vertexShader);
            gl.attachShader(programID, fragmentShader);

            // Bind default locations
            gl.bindAttribLocation(programID, VertexElement.Usage.Position, 'aPosition');
            gl.bindAttribLocation(programID, VertexElement.Usage.UVS, 'aTexCoord');
            gl.bindAttribLocation(programID, VertexElement.Usage.Color, 'aColor');
            gl.bindAttribLocation(programID, VertexElement.Usage.Normal, 'aNormal');
            gl.bindAttribLocation(programID, VertexElement.Usage.Tangent, 'aTangent');

            // Link program
            gl.linkProgram(programID);

            // Remove vertex and fragment from memory
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);

            // Save it
            this.instances.programs[program.getUID()] = programID;
            webGLProgram = programID;

            // Get uniforms and attributs informations
            let i;
            const activeUniforms = gl.getProgramParameter(programID, WebGLConst.GL_ACTIVE_UNIFORMS);
            const uniforms = program.getUniforms();
            for (i = 0; i < activeUniforms; i += 1) {
                const uniform = gl.getActiveUniform(programID, i);

                let finalName = uniform.name;
                const arrayPos = uniform.name.indexOf('[', uniform.name.length - 3);
                if (arrayPos >= 0) {
                    finalName = uniform.name.substring(0, arrayPos);
                }

                uniforms[finalName] = new ProgramElement(gl.getUniformLocation(programID, uniform.name),
                    finalName,
                    TypesConverter.toShaderTypes(uniform.type),
                    uniform.size);
            }

            const activeAttributes = gl.getProgramParameter(programID, WebGLConst.GL_ACTIVE_ATTRIBUTES);
            const attributes = program.getAttributes();
            for (i = 0; i < activeAttributes; i += 1) {
                const attribute = gl.getActiveAttrib(programID, i);
                attributes[attribute.name] = new ProgramElement(gl.getAttribLocation(programID, attribute.name),
                    attribute.name,
                    TypesConverter.toShaderTypes(attribute.type),
                    attribute.size);
            }
        }

        // Bind program.
        if (this.cache.program !== webGLProgram) {
            // Use Program
            gl.useProgram(webGLProgram);
            this.cache.program = webGLProgram;

            // Send lights's informations
            this.sendLights(program);

            return 1;
        }

        return 0;
    }

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
    setUniform(program, name, type, value, groupCount = 0) {
        // Check if program need to be set
        this.setProgram(program);

        const uniform = program.getUniform(name);
        if (!uniform || !value) {
            return false;
        }

        // Retrieve context
        const gl = Context.getActive();

        // Send value to the program/shaders
        switch (type) {
        case Type.Float:
        {
            if (value instanceof Array) {
                if (groupCount && groupCount >= 1) {
                    if (groupCount === 2) {
                        gl.uniform2fv(uniform.location, value);
                    } else if (groupCount === 3) {
                        gl.uniform3fv(uniform.location, value);
                    } else if (groupCount === 4) {
                        gl.uniform4fv(uniform.location, value);
                    } else if (groupCount === 1) {
                        gl.uniform1fv(uniform.location, value);
                    }
                } else if (value.length === 3) {
                    gl.uniform3f(uniform.location, value[0], value[1], value[2]);
                } else if (value.length === 4) {
                    gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);
                } else if (value.length === 3) {
                    gl.uniform2f(uniform.location, value[0], value[1]);
                }
            } else {
                gl.uniform1f(uniform.location, value);
            }

            break;
        }
        case Type.Int:
        {
            if (value instanceof Array) {
                if (groupCount && groupCount >= 1) {
                    if (groupCount === 2) {
                        gl.uniform2iv(uniform.location, value);
                    } else if (groupCount === 3) {
                        gl.uniform3iv(uniform.location, value);
                    } else if (groupCount === 4) {
                        gl.uniform4iv(uniform.location, value);
                    } else if (groupCount === 1) {
                        gl.uniform1iv(uniform.location, value);
                    }
                } else if (value.length === 3) {
                    gl.uniform3i(uniform.location, value[0], value[1], value[2]);
                } else if (value.length === 4) {
                    gl.uniform4i(uniform.location, value[0], value[1], value[2], value[3]);
                } else if (value.length === 2) {
                    gl.uniform2i(uniform.location, value[0], value[1]);
                }
            } else {
                gl.uniform1i(uniform.location, value);
            }

            break;
        }
        case Type.Matrix:
        {
            if (value.length === 16) {
                gl.uniformMatrix4fv(uniform.location, false, value);
            } else if (value.length === 4) {
                gl.uniformMatrix2fv(uniform.location, false, value);
            } else if (value.length === 9) {
                gl.uniformMatrix3fv(uniform.location, false, value);
            }

            break;
        }
        default:
            break;
        }

        return true;
    }

    /**
     * Set scissor test state
     *
     * @param {boolean} state True to activate scissor testing, otherwise false
     * @param {number} x Position on x from the left of the screen
     * @param {number} y Position on y from the bottom of the screen
     * @param {number} w Width of the rectangle
     * @param {number} h Height of the rectangle
     */
    setScissorTest(state, x, y, w, h) {
        // Retrieve context
        const gl = Context.getActive();

        if (!state) {
            gl.disable(WebGLConst.GL_SCISSOR_TEST);
        } else {
            gl.enable(WebGLConst.GL_SCISSOR_TEST);
            gl.scissor(x, y, w, h);
        }
    }

    /**
     * Set stencil test state
     *
     * @param {boolean} activate True to activate stencil test, otherwise false
     * @param {number} writeMask Stencil writing value
     */
    setStencilState(activate, writeMask) {
        // Retrieve context
        const gl = Context.getActive();

        if (!activate && this.state.stencilTest) {
            gl.disable(WebGLConst.GL_STENCIL_TEST);
        } else if (activate) {
            if (!this.state.stencilTest) {
                gl.enable(WebGLConst.GL_STENCIL_TEST);
            }

            if (this.state.stencilWrite !== writeMask) {
                gl.stencilMask(writeMask);
                this.state.stencilWrite = writeMask;
            }
        }

        this.state.stencilTest = activate;
    }

    /**
     * Set stencil function to use
     *
     * @param {StencilFunction} stencilFunction Function to use
     * @param {number} reference Reference value
     * @param {number} mask Mask to use
     */
    setStencilFunction(stencilFunction, reference, mask) {
        if (this.state.stencilFunction !== stencilFunction || this.state.stencilReference !== reference || this.state.stencilMask !== mask) {
            Context.getActive().stencilFunc(TypesConverter.stencilFunctionToConstant.get(stencilFunction), reference, mask);
            this.state.stencilFunction = stencilFunction;
            this.state.stencilReference = reference;
            this.state.stencilMask = mask;
        }
    }

    /**
     * Set stencil operations to use
     *
     * @param {StencilOperation} sFail Function to use
     * @param {StencilOperation} dpFail Reference value
     * @param {StencilOperation} dppPass Mask to use
     */
    setStencilOperations(sFail, dpFail, dppPass) {
        if (this.state.stencilTestFail !== sFail || this.state.stencilDepthTestFail !== dpFail || this.state.stencilSuccess !== dppPass) {
            Context.getActive().stencilOp(TypesConverter.stencilOperationToConstant.get(sFail),
                TypesConverter.stencilOperationToConstant.get(dpFail),
                TypesConverter.stencilOperationToConstant.get(dppPass));

            this.state.stencilTestFail = sFail;
            this.state.stencilDepthTestFail = dpFail;
            this.state.stencilSuccess = dppPass;
        }
    }

    /**
     * Set vertex buffer to use
     *
     * Warning: You must call "setVertexFormat" before!
     * @param {number} stream An integer representing stream to use
     * @param {number|WebGLBuffer} buffer A buffer instance
     */
    setVertexBuffer(stream, buffer) {
        // Retrieve context
        const gl = Context.getActive();

        // Bind buffer
        gl.bindBuffer(WebGLConst.GL_ARRAY_BUFFER, buffer);

        // Enable vertex data
        const vertexElements = this.cache.vertexFormat.getElements();
        for (let i = 0; i < vertexElements.length; i += 1) {
            if (vertexElements[i].stream === stream) {
                // Enable
                gl.enableVertexAttribArray(vertexElements[i].usage);
                gl.vertexAttribPointer(vertexElements[i].usage,
                    vertexElements[i].count,
                    TypesConverter.vertexTypeToConstant.get(vertexElements[i].type),
                    vertexElements[i].normalize,
                    this.cache.vertexFormat.getStreamStride(vertexElements[i].stream),
                    vertexElements[i].offset);

                // Save attribut's state
                this.enabledVertexAttribArray[vertexElements[i].usage] = true;
            }
        }
    }

    /**
     * Set vertex format to use
     *
     * @param {VertexFormat} format A VertexFormat instance
     */
    setVertexFormat(format) {
        this.cache.vertexFormat = format;
    }
}

export default WebGL;
