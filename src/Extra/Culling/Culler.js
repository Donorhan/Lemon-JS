/**
 * Abstract culling element
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Culler
{
    /**
     * Constructor
     */
    constructor()
    {
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
    enable(value)
    {
        this.enabled = value;
    }

    /**
     * Execute culling
     *
     * @param {Scene} scene A Scene instance
     * @param {Camera} camera A Camera instance
     * @param {?boolean} overwriteCullingState Set to true to ignore previous culling values
     */
    execute(scene, camera, overwriteCullingState = false) { }
}
