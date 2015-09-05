goog.provide('Lemon.RenderTexture');
goog.require('Lemon.Image');
goog.require('Lemon.RenderAPI.WebGL');
goog.require('Lemon.RenderTarget');
goog.require('Lemon.Texture');

/**
 * A rendering texture: Supported by WebGL only.
 * @constructor
 * @extends {Lemon.RenderTarget}
 * @param {number} width Texture's width.
 * @param {number} height Texture's height.
 * @param {number} textureCount Texture count.
 * @param {boolean=} useDepthBuffer True to use a depth buffer (default: true).
 * @param {boolean=} useStencilBuffer True to use a depth buffer (default: false).
 */
Lemon.RenderTexture = function( width, height, textureCount, useDepthBuffer, useStencilBuffer )
{
    Lemon.RenderTarget.call(this);

    /**
    * The render API to use.
    * @type {Lemon.RenderAPI}
    * @protected
    */
    this.renderApi = Lemon.RenderAPI.WebGL.getInstance();

    /**
    * Frame buffer identifier.
    * @type {number}
    * @private
    */
    this.framebuffer = this.renderApi.createFrameBuffer();

    /**
    * An array with the textures to draw in.
    * @type {Array.<Lemon.Texture>}
    * @private
    */
    this.textures = [];

    // Init the render texture.
    this.init(width, height, textureCount, useDepthBuffer, useStencilBuffer);
};
goog.inherits(Lemon.RenderTexture, Lemon.RenderTarget);

/**
 * Init.
 * @param {number} width Texture's width.
 * @param {number} height Texture's height.
 * @param {number} textureCount Texture count.
 * @param {boolean=} useDepthBuffer True to use a depth buffer (default: true).
 * @param {boolean=} useStencilBuffer True to use a depth buffer (default: false).
 * @private
 */
Lemon.RenderTexture.prototype.init = function( width, height, textureCount, useDepthBuffer, useStencilBuffer ) 
{
    // Create textures.
    for( var i = 0; i < textureCount; i++ )
    {
        var image = new Lemon.Image();
        image.create(width, height, null);

        var texture = new Lemon.Texture();
        texture.setRepeated(false);
        texture.setSmooth(true);
        texture.useMipmap(false);
        texture.loadFromImage(image);
        this.textures.push(texture);
    }

    // Attach the texture to the frame buffer.
    this.renderApi.initFrameBuffer(this.framebuffer, this.textures, useDepthBuffer, useStencilBuffer);
};

/**
 * Clear the texture.
 * @param {Lemon.Color} color A Color instance.
 */
Lemon.RenderTexture.prototype.clear = function( color ) 
{
    // Remove previous tasks.
    this.removeTasks();

    // Bind frame buffer.
    this.begin();

    // Clear screen.
    this.renderApi.clear(color);
};

/**
 * Begin rendering to texture.
 */
Lemon.RenderTexture.prototype.begin = function() 
{
    this.renderApi.bindFrameBuffer(this.framebuffer);    
};

/**
 * Display.
 */
Lemon.RenderTexture.prototype.display = function() 
{
    // Call parent method.
    Lemon.RenderTarget.prototype.display.call(this);

    // Go back to the default buffer.
    this.renderApi.bindFrameBuffer(-1);
};

/**
 * Output Textures.
 * @return {Array.<Lemon.Texture>} An array of Texture.
 */
Lemon.RenderTexture.prototype.getTextures = function() 
{
    return this.textures;
};
