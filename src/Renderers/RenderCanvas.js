import {Color} from '../Color.js';
import {Context} from '../Context.js';
import {RenderTarget} from './RenderTarget.js';
import {WebGL} from './WebGL/RenderWebGL.js';

/**
 * A rendering canvas
 *
 * @extends {RenderTarget}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class RenderCanvas extends RenderTarget
{
    /**
     * Constructor
     *
     * @param {string} canvas Id of the container
     * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options
     * @param {string=} type A string with the value "webgl" or "canvas"
     */
    constructor(canvas, options = {}, type = 'webgl')
    {
        super();

        /**
         * The render API to use: For now the renderer support WebGL 1.0.3 only
         *
         * @type {RenderAPI}
         * @protected
         */
        this.renderApi = WebGL.getInstance();

        // Init the context
        this.context.init(Context.Type.WebGL, options, canvas);
    }

    /**
     * Clear the canvas
     *
     * @param {?Color} color A Color instance
     */
    clear(color = new Color(30, 30, 30)) 
    {
        // Remove previous tasks
        this.removeTasks();

        // Activate context
        this.context.activate();

        // Clear screen
        this.renderApi.clear(color);
    }
}