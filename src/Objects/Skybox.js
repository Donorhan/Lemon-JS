import {Drawable} from './Drawable.js';
import {SkyboxCommand} from '../Renderers/Commands/SkyboxCommand.js';

/**
 * A Skybox
 *
 * @extends {Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Skybox extends Drawable
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Program
         *
         * @type {Program}
         * @private
         */
        this.customProgram = null;

        /**
         * Texture cube linked
         *
         * @type {TextureCube}
         * @private
         */
        this.texture = null;
    }

    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget)
    {
        if (this.texture)
            renderTarget.getActiveTask().addCommand(new SkyboxCommand(this));
    }

    /**
     * Set program to use
     *
     * @param {Program} program A Program instance
     * @return {Skybox} A reference to the instance
     */
    setCustomProgram(program)
    {
        this.customProgram = program;

        return this;
    }

    /**
     * Set texture
     *
     * @param {TextureCube} texture A TextureCube instance
     * @return {Skybox} A reference to the instance
     */
    setTexture(texture)
    {
        this.texture = texture;

        return this;
    }

    /**
     * Get program
     *
     * @return {?Program} A Program instance or null if the Skybox use the default program
     */
    getCustomProgram()
    {
        return this.customProgram;
    }

    /**
     * Get the linked TextureCube instance
     *
     * @return {TextureCube} A TextureCube instances
     */
    getTexture()
    {
        return this.texture;
    }
}
