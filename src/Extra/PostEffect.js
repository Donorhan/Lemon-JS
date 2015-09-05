goog.provide('Lemon.PostEffect');
goog.require('Lemon.Camera');
goog.require('Lemon.RenderTexture');
goog.require('Lemon.Sprite');
goog.require('Lemon.SpriteCommand');

/**
 * A class to create post-effects.
 * @constructor
 * @param {Lemon.Program} program A Program instance.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.PostEffect = function( program ) 
{
    /**
    * The render API to use.
    * @type {Lemon.RenderAPI}
    * @protected
    */
    this.renderApi = Lemon.RenderAPI.WebGL.getInstance();

    /**
    * Textures where we will apply effects.
    * @type {Lemon.RenderTexture}
    * @private
    */
    this.renderTexture = null;

    /**
    * Full screen sprite with the resulting effects.
    * @type {Lemon.Sprite}
    * @private
    */
    this.sprite = new Lemon.Sprite();
    this.sprite.setCustomProgram(program);
};

/**
 * Init the post effect composer.
 * @param {number} width Resulting effect width.
 * @param {number} height Resulting effect height.
 * @param {boolean=} useDepthBuffer True to use depth buffer (useful in 3D). (default: true)
 * @param {boolean=} userStencilBuffer True to use stencil buffer. (default: false)
 */
Lemon.PostEffect.prototype.init = function( width, height, useDepthBuffer, userStencilBuffer ) 
{
    // Init texture.
    this.renderTexture = new Lemon.RenderTexture(width, height, 1, useDepthBuffer || true, userStencilBuffer || false);

    // Link resulting texture to the sprite.
    this.sprite.setSize(1, 1);
    this.sprite.setTexture(this.renderTexture.getTextures()[0]);
    this.sprite.setTextureRect(0, 0, width, height);
};

/**
 * Begin.
 * @param {Lemon.Color=} color A Color instance.
 */
Lemon.PostEffect.prototype.begin = function( color ) 
{
    if( !this.renderTexture )
        return;

    this.renderTexture.clear(color || new Lemon.Color(30, 30, 30));
};

/**
 * End.
 */
Lemon.PostEffect.prototype.end = function() 
{
    if( !this.renderTexture )
        return;

    // Display result.
    this.renderTexture.display();

    // Draw the full screen quad.
    Lemon.SpriteCommand.draw(this.renderApi, this.sprite);
};

/**
 * Render the given scene.
 * @param {Lemon.Scene} scene A Scene instance.
 * @param {Lemon.Camera} camera A Camera instance.
 */
Lemon.PostEffect.prototype.render = function( scene, camera ) 
{
    this.renderTexture.render(scene, camera);
};

/**
 * Set program to use.
 * @param {Lemon.Program} program A Program instance.
 */
Lemon.PostEffect.prototype.setProgram = function( program ) 
{
    this.sprite.setCustomProgram(program);
};

/**
 * Set value of an element from the program.
 * @param {string} name Element's name in the shader.
 * @param {Lemon.Type} type Type of value to send.
 * @param {Array.<number>|number|boolean|Lemon.Texture|Float32Array} value A value.
 */
Lemon.PostEffect.prototype.setEffectValue = function( name, type, value, groupCount ) 
{ 
    this.renderApi.setUniform(this.sprite.getCustomProgram(), name, type, value, groupCount);
};
