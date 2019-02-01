/**
 * A context
 *
 * @category Core
 */
class Context {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The DOM element
         *
         * @type {Element}
         */
        this.domElement = null;

        /**
         * Context instance
         *
         * @type {WebGLRenderingContext|Object}
         * @public
         */
        this.instance = null;
    }

    /**
     * Shortcut to the active context's instance
     *
     * @enum {Object}
     */
    static getActive() {
        return Context.current.instance;
    }

    /**
     * Init
     *
     * @param {Context.Type} type Type of context
     * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options
     * @param {string} targetID Targeted DOM element
     */
    init(type, options, targetID) {
        // Get DOM element.
        const target = document.getElementById(targetID);
        if (!target) {
            throw Error(`404 - Canvas with the name ${targetID} not found.`);
        }

        // Init webgl context.
        if (type === Context.Type.WebGL) {
            // Create canvas.
            this.domElement = document.createElement('canvas');
            this.domElement.width = target.offsetWidth;
            this.domElement.height = target.offsetHeight;
            target.appendChild(this.domElement);

            // Init WebGL.
            this.instance = this.domElement.getContext('webgl', { antialias: options.antialiasing || true });
            this.instance.viewportWidth = this.domElement.clientWidth;
            this.instance.viewportHeight = this.domElement.clientHeight;
        }

        // Set as active context.
        if (!Context.current) {
            Context.current = this;
        }
    }

    /**
     * Resize context
     *
     * @param {number} width Width to assign in pixel
     * @param {number} height Height to assign in pixel
     */
    resize(width, height) {
        if (!this.domElement || !this.instance) {
            return;
        }

        // DOM
        this.domElement.width = width;
        this.domElement.height = height;

        // WebGL
        this.instance.viewportWidth = width;
        this.instance.viewportHeight = height;
    }

    /**
     * Activate the context
     *
     * The context become the one used by the renderer
     */
    activate() {
        Context.current = this;
    }

    /**
     * Get size
     *
     * @return {Array.<number>} A array with size on x and y
     */
    getSize() {
        return [this.domElement.width, this.domElement.height];
    }
}

/**
 * Type of context
 *
 * @enum {number}
 */
Context.Type = { WebGL: 0 };

/**
 * Active context
 *
 * @type {Context}
 */
Context.current = null;

export default Context;
