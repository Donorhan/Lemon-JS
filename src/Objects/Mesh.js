import {Drawable} from './Drawable.js';
import {MeshCommand} from '../Renderers/Commands/MeshCommand.js';

/**
 * A mesh
 *
 * @extends {Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Mesh extends Drawable
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Geometry
         *
         * @type {Geometry}
         * @private
         */
        this.geometry = null;

        /**
         * Material
         *
         * @type {Material}
         * @private
         */
        this.material = null;

        /**
         * Program
         *
         * @type {Program}
         * @private
         */
        this.program = null;
    }

    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget)
    {
        if (!this.geometry || !this.material || !this.program)
            return;

        let task            = renderTarget.getActiveTask();
        let activeTechnique = this.material.getActiveTechnique();
        let passCount       = this.material.getPassCount(activeTechnique);

        for (let i = 0; i < passCount; i++)
            task.addCommand(new MeshCommand(this.geometry, this.material.getPass(activeTechnique, i), this.program, this.getTransformationMatrix(), this.getNormalMatrix(), 0, this.geometry.getIndexCount()));
    };

    /**
     * Set geometry
     *
     * @param {Geometry} geometry A Geometry instance
     */
    setGeometry(geometry)
    {
        this.geometry = geometry;
    }

    /**
     * Set material
     *
     * @param {Material} material A Material instance
     */
    setMaterial(material)
    {
        this.material = material;
    };

    /**
     * Set program
     *
     * @param {Program} program A Program instance
     */
    setProgram(program)
    {
        this.program = program;
    }

    /**
     * Return a reference to the program use by this mesh
     *
     * @return {Program} A Program instance
     */
    getProgram()
    {
        return this.program;
    }
}
