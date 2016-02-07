import {Img as Image} from '../Image.js';
import {RenderTarget} from './RenderTarget.js';
import {Texture} from '../Textures/Texture.js';
import {WebGL} from './WebGL/RenderWebGL.js';

/**
 * A rendering texture: Supported by WebGL only.
 *
 * @extends {RenderTarget}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class RenderTexture extends RenderTarget
{
    /**
     * Constructor
     *
     * @param {number} width Texture's width
     * @param {number} height Texture's height
     * @param {number} textureCount Texture count
     * @param {boolean=} useDepthBuffer True to use a depth buffer
     * @param {boolean=} useStencilBuffer True to use a stencil buffer
     */
    constructor(width, height, textureCount, useDepthBuffer = true, useStencilBuffer = false)
    {
        super();

        /**
        * The render API to use
        *
        * @type {RenderAPI}
        * @protected
        */
        this.renderApi = WebGL.getInstance();

        /**
        * Frame buffer identifier
        *
        * @type {number}
        * @private
        */
        this.framebuffer = this.renderApi.createFrameBuffer();

        /**
        * An array with the textures to draw in
        *
        * @type {Array.<Texture>}
        * @private
        */
        this.textures = [];

        // Init the render texture
        this.init(width, height, textureCount, useDepthBuffer, useStencilBuffer);
    }

    /**
     * Init
     *
     * @param {number} width Texture's width
     * @param {number} height Texture's height
     * @param {number} textureCount Texture count
     * @param {boolean=} useDepthBuffer True to use a depth buffer
     * @param {boolean=} useStencilBuffer True to use a depth buffer
     * @private
     */
    init( width, height, textureCount, useDepthBuffer = true, useStencilBuffer = false) 
    {
        // Create textures.
        for (let i = 0; i < textureCount; i++)
        {
            let image = new Image();
            image.create(width, height, null);

            let texture = new Texture();
            texture.setRepeated(false);
            texture.setSmooth(true);
            texture.useMipmap(false);
            texture.loadFromImage(image);
            this.textures.push(texture);
        }

        // Attach the texture to the frame buffer
        this.renderApi.initFrameBuffer(this.framebuffer, this.textures, useDepthBuffer, useStencilBuffer);
    }

    /**
     * Clear the texture
     *
     * @param {Color} color A Color instance
     */
    clear(color) 
    {
        // Remove previous tasks.
        this.removeTasks();

        // Bind frame buffer.
        this.begin();

        // Clear screen.
        this.renderApi.clear(color);
    }

    /**
     * Begin rendering to texture
     */
    begin() 
    {
        this.renderApi.bindFrameBuffer(this.framebuffer);    
    }

    /**
     * Display
     */
    display() 
    {
        super.display();

        // Go back to the default buffer
        this.renderApi.bindFrameBuffer(-1);
    }

    /**
     * Output Textures
     *
     * @return {Array.<Texture>} An array of Texture
     */
    getTextures() 
    {
        return this.textures;
    }
}
