import {Program} from '../../Program.js';
import {RenderCommand} from './RenderCommand.js';
import {Type} from '../../Types.js';

/**
 * Draw meshes
 *
 * @extends {RenderCommand}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class MeshCommand extends RenderCommand
{
    /**
     * Constructor
     *
     * @param {Geometry} geometry A Geometry instance
     * @param {Pass} pass A Pass instance
     * @param {Program} program A Program instance
     * @param {mat4} modelMatrix A Matrix with model's transformations (scale, rotate, translate)
     * @param {mat4} normalMatrix A Matrix with model's normals transformed
     * @param {number} startVertex First vertex to draw
     * @param {number} endVertex Last vertex to draw
     */
    constructor(geometry, pass, program, modelMatrix, normalMatrix, startVertex, endVertex)
    {
        super();

        /**
         * Last vertex to draw
         *
         * @type {number}
         * @private
         */
        this.endVertex = endVertex;

        /**
         * Geometry
         *
         * @type {Geometry}
         * @private
         */
        this.geometry = geometry;

        /**
         * Model's matrix
         *
         * @type {mat4}
         * @private
         */
        this.modelMatrix = modelMatrix;

        /**
         * Model's normal matrix
         *
         * @type {mat4}
         * @private
         */
        this.normalMatrix = normalMatrix;

        /**
         * Pass
         *
         * @type {Pass}
         * @private
         */
        this.pass = pass;

        /**
         * Program
         *
         * @type {Program}
         * @private
         */
        this.program = program;

        /**
         * First vertex to draw
         *
         * @type {number}
         * @private
         */
        this.startVertex = startVertex;
    }

    /**
     * Execute the command
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     */
    execute(renderAPI) 
    {
        // Program
        let programCode = renderAPI.setProgram(this.program);
        if (programCode == -1)
            return;

        // Must send/update shared uniforms
        if (programCode == 1)
            renderAPI.setUniform(this.program, 'uCamera', Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());

        // Send uniforms.
        renderAPI.setUniform(this.program, 'uModel', Type.Matrix, this.modelMatrix);
        renderAPI.setUniform(this.program, 'uModelNormal', Type.Matrix, this.normalMatrix);

        // State.
        renderAPI.applyStateBlock(this.pass);

        // Material.
        let parameters = this.pass.getParameters();
        let slot = 0;
        for (let i = 0; i < parameters.length; i++)
        {
            let parameter = parameters[i];
            switch(parameter.type)
            {
                case Type.Texture2D:
                {
                    renderAPI.setUniform(this.program, parameter.name, Type.Int, slot);
                    renderAPI.bindTexture(slot, /** @type {TextureInterface} */ (parameter.value));
                    slot++;
                    break;
                }
                default:
                {
                    renderAPI.setUniform(this.program, parameter.name, parameter.type, parameter.value);
                    break;
                }
            }
        }

        // Bind geometry
        renderAPI.setGeometry(this.geometry);

        // Draw object
        renderAPI.drawIndexedPrimitives(this.pass.drawingMode, this.startVertex, this.endVertex);
    }
}
