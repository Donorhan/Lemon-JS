import Color from '../Color';
import RenderTexture from '../Renderers/RenderTexture';
import Sprite from '../Objects/Sprite';
import SpriteCommand from '../Renderers/Commands/SpriteCommand';
import WebGL from '../Renderers/WebGL/RenderWebGL';

/**
 * A class to create post-effects
 *
 * @category Shaders
 */
class PostEffect {
    /**
     * Constructor
     *
     * @param {Program} program A Program instance.
     */
    constructor(program) {
        /**
        * The render API to use
        *
        * @type {RenderAPI}
        * @protected
        */
        this.renderApi = WebGL.getInstance();

        /**
        * Textures where we will apply effects
        *
        * @type {RenderTexture}
        * @private
        */
        this.renderTexture = null;

        /**
        * Full screen sprite with the resulting effects
        *
        * @type {Sprite}
        * @private
        */
        this.sprite = new Sprite();
        this.sprite.setCustomProgram(program);
    }

    /**
     * Init the post effect composer
     *
     * @param {number} width Resulting effect width
     * @param {number} height Resulting effect height
     * @param {boolean=} useDepthBuffer True to use depth buffer (useful in 3D)
     * @param {boolean=} userStencilBuffer True to use stencil buffer
     * @return {PostEffect} A reference to the instance
     */
    init(width, height, useDepthBuffer = true, userStencilBuffer = false) {
        // Init texture
        this.renderTexture = new RenderTexture(width, height, 1, useDepthBuffer, userStencilBuffer);

        // Link resulting texture to the sprite
        this.sprite.setSize(1, 1);
        this.sprite.setTexture(this.renderTexture.getTextures()[0]);
        this.sprite.setTextureRect(0, 0, width, height);

        return this;
    }

    /**
     * Begin
     *
     * @param {Color=} color A Color instance
     */
    begin(color = new Color(30, 30, 30)) {
        if (!this.renderTexture) {
            return;
        }

        this.renderTexture.clear(color);
    }

    /**
     * End
     */
    end() {
        if (!this.renderTexture) {
            return;
        }

        // Display result
        this.renderTexture.display();

        // Draw the full screen quad
        SpriteCommand.draw(this.renderApi, this.sprite);
    }

    /**
     * Render the given scene
     *
     * @param {Scene} scene A Scene instance
     * @param {Camera} camera A Camera instance
     */
    render(scene, camera) {
        this.renderTexture.render(scene, camera);
    }

    /**
     * Set program to use
     *
     * @param {Program} program A Program instance
     * @return {PostEffect} A reference to the instance
     */
    setProgram(program) {
        this.sprite.setCustomProgram(program);

        return this;
    }

    /**
     * Set value of an element from the program
     *
     * @param {string} name Element's name in the shader
     * @param {Type} type Type of value to send
     * @param {Array.<number>|number|boolean|Texture|Float32Array} value A value
     * @return {PostEffect} A reference to the instance
     */
    setEffectValue(name, type, value, groupCount) {
        this.renderApi.setUniform(this.sprite.getCustomProgram(), name, type, value, groupCount);

        return this;
    }
}

export default PostEffect;
