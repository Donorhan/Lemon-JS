import {Color} from '../Color.js';
import {Node} from '../Scene/Node.js';

/**
 * A light

 * @extends {Node}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Light extends Node
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Ambient color
         *
         * @type {Color}
         * @private
         */
        this.ambient = new Color(255, 255, 255);

        /**
         * Diffuse color
         *
         * @type {Color}
         * @private
         */
        this.diffuse = new Color(255, 255, 255);

        /**
         * Specular color
         *
         * @type {Color}
         * @private
         */
        this.specular = new Color(255, 255, 255);
    }

    /**
     * Visit the node and his children
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    visit(renderTarget) 
    {
        renderTarget.getRenderAPI().bindLight(this);
    }

    /**
     * Set ambient color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     */
    setAmbientColor(r, g, b) 
    {
        this.ambient.set(r, g, b);
    }

    /**
     * Set diffuse color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     */
    setDiffuseColor(r, g, b) 
    {
        this.diffuse.set(r, g, b);
    }

    /**
     * Set specular color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     */
    setSpecularColor(r, g, b) 
    {
        this.specular.set(r, g, b);
    }

    /**
     * Get ambient color
     *
     * @return {Color} A color instance
     */
    getAmbientColor() 
    {
        return this.ambient;
    }

    /**
     * Get diffuse color
     *
     * @return {Color} A color instance
     */
    getDiffuseColor() 
    {
        return this.diffuse;
    }

    /**
     * Get specular color
     *
     * @return {Color} A color instance
     */
    getSpecularColor() 
    {
        return this.specular;
    }
}
