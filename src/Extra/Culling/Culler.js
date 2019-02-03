/**
 * Abstract culling element
 *
 * @category Culling
 */
class Culler {
    /**
     * Constructor
     */
    constructor() {
        /**
         * State
         *
         * @type {boolean}
         * @private
         */
        this.enabled = true;
    }

    /**
     * Set Culler's state
     *
     * @param {boolean} value True to enable, false to disable
     */
    enable(value) {
        this.enabled = value;
    }

    /**
     * Execute culling
     *
     * @param {Node} node A Node instance
     * @param {Camera} camera A Camera instance
     */
    execute(node, camera) { }

    /**
     * Indicates culler's state
     *
     * @return {boolean} value True if the culler is enable, otherwise
     */
    isEnabled() {
        return this.enabled;
    }
}

export default Culler;
