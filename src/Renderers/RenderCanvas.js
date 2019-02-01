import Color from '../Color';
import Context from '../Context';
import RenderTarget from './RenderTarget';
import WebGL from './WebGL/RenderWebGL';

/**
 * A rendering canvas
 *
 * @category Rendering
 * @extends {RenderTarget}
 */
class RenderCanvas extends RenderTarget {
    /**
     * Constructor
     *
     * @param {string} canvas Id of the container
     * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options
     */
    constructor(canvas, options = { antialiasing: true, premultipliedAlpha: false }) {
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
    clear(color = new Color(30, 30, 30)) {
        // Remove previous tasks
        this.removeTasks();

        // Activate context
        this.context.activate();

        // Clear screen
        this.renderApi.clear(color);
    }
}

export default RenderCanvas;
