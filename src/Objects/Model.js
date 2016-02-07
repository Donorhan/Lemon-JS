import {Drawable} from './Drawable.js';
import {ModelLoader} from '../Loaders/ModelLoader.js';

/**
 * A model
 *
 * @extends {Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Model extends Drawable
{
    /**
     * Constructor
     *
     * @param {string} filePath Path to the file with model's data
     */
    constructor(filePath = '')
    {
        super();

        /**
         * Meshes
         *
         * @type {Array.<Mesh>}
         * @public
         */
        this.meshes = [];

        if (filePath.length)
            this.loadFromFile(filePath);
    }

    /**
     * Update the node and his children
     *
     * @param {number} deltaTime A floating value representing time elapsed between two frames
     * @param {boolean} parentUpdated Indicate if the parent element have been updated
     * @return {boolean} True if the node have been updated
     */
    update(deltaTime, parentUpdated)
    {
        // Call parent method
        let updated = super.update.call(this, deltaTime, parentUpdated);

        // Update meshes.
        for (let i = 0; i < this.meshes.length; i++)
            this.meshes[i].computeTransformationMatrix(this.getTransformationMatrix(), updated);

        return updated;
    }

    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget)
    {
        for (let i = 0; i < this.meshes.length; i++)
            this.meshes[i].draw(renderTarget);
    }

    /**
     * Load model from a file
     *
     * @param {string} filePath Path to the file with model's data
     */
    loadFromFile(filePath)
    {
        ModelLoader.loadFromFile(filePath, this);
    }
}
