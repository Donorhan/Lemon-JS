/**
 * A context resource:
 * - Indicate that the object have a refence to the graphic API.
 * - The object have a unique ID.
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class ContextResource
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * Unique identifier
         *
         * @type {number}
         * @public
         */
        this.UID = ++ContextResource.globalID;
    }

    /**
     * Get unique ID
     *
     * @return {number} An unsigned integer
     */
    getUID()
    {
        return this.UID;
    }
}

/**
* Global ID
 *
* @type {number}
*/
ContextResource.globalID = -1;
