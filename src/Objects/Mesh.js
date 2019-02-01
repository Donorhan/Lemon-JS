import Drawable from './Drawable';
import MeshCommand from '../Renderers/Commands/MeshCommand';

/**
 * A mesh
 *
 * @category Drawables
 * @extends {Drawable}
 * @param {Geometry} [geometry] A Geometry instance
 * @param {Material} [material] A Material instance
 * @param {Program} [program] A Program instance
 */
class Mesh extends Drawable {
    /**
     * Constructor
     */
    constructor(geometry = null, material = null, program = null) {
        super();

        /**
         * Geometry
         *
         * @type {Geometry}
         * @private
         */
        this.geometry = geometry;

        /**
         * Material
         *
         * @type {Material}
         * @private
         */
        this.material = material;

        /**
         * Program
         *
         * @type {Program}
         * @private
         */
        this.program = program;
    }

    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget) {
        if (!this.geometry || !this.material || !this.program) {
            return;
        }

        // Create a task
        const task = renderTarget.getActiveTask();
        const activeTechnique = this.material.getActiveTechnique();
        const passCount = this.material.getPassCount(activeTechnique);

        for (let i = 0; i < passCount; i += 1) {
            task.addCommand(new MeshCommand(this.geometry,
                this.material.getPass(activeTechnique, i),
                this.program,
                this.getTransformationMatrix(),
                this.getNormalMatrix(),
                0,
                this.geometry.getIndexCount()));
        }
    }

    /**
     * Set geometry
     *
     * @param {Geometry} geometry A Geometry instance
     * @return {Mesh} A reference to the instance
     */
    setGeometry(geometry) {
        this.geometry = geometry;
        this.boundingBox.compute(geometry.getVerticesPositions());

        return this;
    }

    /**
     * Set material
     *
     * @param {Material} material A Material instance
     * @return {Mesh} A reference to the instance
     */
    setMaterial(material) {
        this.material = material;

        return this;
    }

    /**
     * Set program
     *
     * @param {Program} program A Program instance
     * @return {Mesh} A reference to the instance
     */
    setProgram(program) {
        this.program = program;

        return this;
    }

    /**
     * Return a reference to the program use by this mesh
     *
     * @return {Program} A Program instance
     */
    getProgram() {
        return this.program;
    }
}

export default Mesh;
