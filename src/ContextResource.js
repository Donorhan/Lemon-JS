/**
 * A context resource:
 * - Indicates that the object have a refence to the graphic API.
 * - The object have a unique ID.
 *
 * @category Core
 */
class ContextResource {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Unique identifier
         *
         * @type {number}
         * @public
         */
        this.UID = ContextResource.globalID;

        ContextResource.globalID += 1;
    }

    /**
     * Get unique ID
     *
     * @return {number} An unsigned integer
     */
    getUID() {
        return this.UID;
    }
}

/**
* Global ID
 *
* @type {number}
*/
ContextResource.globalID = -1;

export default ContextResource;
