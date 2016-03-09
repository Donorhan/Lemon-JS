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
     * @return {boolean} True if visit was successful, otherwise false
     */
    visit(renderTarget) 
    {
        if (!super.visit(renderTarget))
            return false;

        renderTarget.getRenderAPI().bindLight(this);
        return true;
    }

    /**
     * Set ambient color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     * @return {Light} A reference to the instance
     */
    setAmbientColor(r, g, b) 
    {
        this.ambient.set(r, g, b);

        return this;
    }

    /**
     * Set diffuse color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     * @return {Light} A reference to the instance
     */
    setDiffuseColor(r, g, b) 
    {
        this.diffuse.set(r, g, b);

        return this;
    }

    /**
     * Set specular color
     *
     * @param {number} r Red value in the range 0 to 255
     * @param {number} g Green value in the range 0 to 255
     * @param {number} b Blue value in the range 0 to 255
     * @return {Light} A reference to the instance
     */
    setSpecularColor(r, g, b) 
    {
        this.specular.set(r, g, b);

        return this;
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
