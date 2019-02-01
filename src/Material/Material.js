import { Pass } from './Pass';
import Type from '../Types';

/**
 * A material
 *
 * @category Material
 */
class Material {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Index of the technique to use
         *
         * @type {number}
         * @private
         */
        this.activeTechnique = 0;

        /**
         * An array of passes per technique
         * By default, we have at least one technique available
         *
         * @type {Array.<Array.<Pass>>}
         * @private
         */
        this.techniques = [];

        // Add a default technique
        this.createTechnique();
    }

    /**
     * Shortcut to create common materials
     *
     * @return {Material} A Material instance
     */
    static Create(name) {
        const material = new Material();

        if (name !== 'default') {
            material.createPass();
            return material;
        }

        material.createPass(0, [
            ['material.ambient', Type.Float, [0.0, 0.0, 0.0]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 38.4],
        ]);

        return material;
    }

    /**
     * Add a pass to a technique
     *
     * @param {number=} techniqueIndex Targeted technique's index (default: 0)
     * @param {Array.<Array>} [parameters] An array of parameters
     * @return {Pass} A Pass instance.
     */
    createPass(techniqueIndex = 0, parameters = []) {
        const pass = new Pass(parameters);
        this.techniques[techniqueIndex].push(pass);

        return pass;
    }

    /**
     * Create a new technique
     *
     * @return {number} The technique index.
     */
    createTechnique() {
        this.techniques.push([]);
        return this.techniques.length - 1;
    }

    /**
     * Set technique to use
     *
     * @param {number} techniqueIndex Targeted technique's index
     */
    setActiveTechnique(techniqueIndex) {
        this.activeTechnique = techniqueIndex;
    }

    /**
     * Get active technique's index
     *
     * @return {number} A positive integer
     */
    getActiveTechnique() {
        return this.activeTechnique;
    }

    /**
     * Get a pass
     *
     * @param {number} techniqueIndex Targeted technique's index
     * @param {number} passIndex Pass's index
     * @return {?Pass} A Pass instance or null if the technique or the pass don't exist
     */
    getPass(techniqueIndex, passIndex) {
        if (techniqueIndex >= this.techniques.length) {
            return null;
        }

        return this.techniques[techniqueIndex][passIndex] || null;
    }

    /**
     * Get pass count
     *
     * @param {number} techniqueIndex Targeted technique's index
     * @return {number} A signed integer
     */
    getPassCount(techniqueIndex = 0) {
        if (techniqueIndex >= this.techniques.length) {
            return 0;
        }

        return this.techniques[techniqueIndex].length;
    }
}

export default Material;
