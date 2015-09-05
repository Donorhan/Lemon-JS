goog.provide('Lemon.Private.ContextResource');

/**
 * A context resource:
 * - Indicate that the object have a refence to the graphic API.
 * - The object have a unique ID.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Private.ContextResource = function() 
{
    /**
    * Unique identifier.
    * @type {number}
    * @public
    */
    this.UID = Lemon.Private.ContextResource.globalID++;
};

/**
* Global ID.
* @type {number}
*/
Lemon.Private.ContextResource.globalID = -1;

/**
 * Get unique ID.
 * @return {number} An unsigned integer.
 */
Lemon.Private.ContextResource.prototype.getUID = function() 
{
    return this.UID;
};
