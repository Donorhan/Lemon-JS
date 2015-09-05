goog.provide('Lemon.Skybox');
goog.require('Lemon.Drawable');
goog.require('Lemon.Program');
goog.require('Lemon.SkyboxCommand');
goog.require('Lemon.TextureCube');

/**
 * A skybox.
 * @constructor
 * @extends {Lemon.Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Skybox = function()
{
    Lemon.Drawable.call(this);

    /**
    * Program.
    * @type {Lemon.Program}
    * @private
    */
    this.customProgram = null;

    /**
    * Texture cube linked.
    * @type {Lemon.TextureCube}
    * @private
    */
    this.texture = null;
};
goog.inherits(Lemon.Skybox, Lemon.Drawable);

/**
 * Draw the element.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Skybox.prototype.draw = function( renderTarget )
{
    if( this.texture )
        renderTarget.getActiveTask().addCommand(new Lemon.SkyboxCommand(this));
};

/**
 * Set program to use.
 * @param {Lemon.Program} program A Program instance.
 */
Lemon.Skybox.prototype.setCustomProgram = function( program ) 
{
    this.customProgram = program;
};

/**
 * Set texture.
 * @param {Lemon.TextureCube} texture A TextureCube instance.
 */
Lemon.Skybox.prototype.setTexture = function( texture ) 
{
    this.texture = texture;
};

/**
 * Get program.
 * @return {?Lemon.Program} A Program instance or null if the skybox use the default program.
 */
Lemon.Skybox.prototype.getCustomProgram = function() 
{
    return this.customProgram;
};

/**
 * Get the linked TextureCube instance.
 * @return {Lemon.TextureCube} A TextureCube instances.
 */
Lemon.Skybox.prototype.getTexture = function()
{
    return this.texture;
};
