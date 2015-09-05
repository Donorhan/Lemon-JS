goog.provide('Lemon.VertexElement');
goog.provide('Lemon.VertexFormat');

/**
 * Represent one of the element of a vertex.
 * It can be a position, a normal, a color, ….
 * @constructor
 * @param {Lemon.VertexElement.Usage} usage Element usage.
 * @param {number} stream Stream index.
 * @param {Lemon.VertexElement.Type} type Type of element.
 * @param {number} count Value count, ex: A "vec2" will have "2" for this parameter.
 * @param {boolean} normalize True to ask rendering API to normalize values.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.VertexElement = function( usage, stream, type, count, normalize ) 
{
    /**
    * Value count for this element.
    * @type {number}
    * @public
    */
    this.count = count || 0;

    /**
    * Indicate if the value need to be normalized by the graphic API.
    * @type {boolean}
    * @public
    */
    this.normalize = normalize || false;

    /**
    * Offset in the vertex data.
    * @type {number}
    * @public
    */
    this.offset = 0;

    /**
    * Stream index.
    * @type {number}
    * @public
    */
    this.stream = stream;

    /**
    * Stream stride.
    * @type {number}
    * @public
    */
    this.stride = 0;

    /**
    * Type of value.
    * @type {Lemon.VertexElement.Type}
    * @public
    */
    this.type = type;

    /**
    * Type of element.
    * @type {Lemon.VertexElement.Usage}
    * @public
    */
    this.usage = usage;
};

/**
* Type of stream available.
* @enum {number}
*/
Lemon.VertexElement.StreamType = { Static: 0, Dynamic: 1, Stream: 2 };

/**
* VertexElement's types.
* @enum {number}
*/
Lemon.VertexElement.Type = { Byte: 0, Float: 1, Int: 2, Short: 3 };

/**
* VertexElement's usage.
* @enum {number}
*/
Lemon.VertexElement.Usage = { Position: 0, Color: 1, UVS: 2, Normal: 3, Tangent: 4 };

/**
 * Indicate the format of a vertex.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.VertexFormat = function() 
{
    /**
    * Elements inside this format.
    * @type {Array.<Lemon.VertexElement>} 
    * @private
    */
    this.elements = [];

    /**
    * Stream's strides.
    * @type {Array.<Lemon.VertexElement.StreamType>} 
    * @private
    */
    this.streamType = [];

    /**
    * Stream's strides.
    * @type {Array.<number>} 
    * @private
    */
    this.streamStride = [];

    /**
    * Stream's state.
    * @type {Array.<boolean>} 
    * @private
    */
    this.streamNeedUpdate = [];

    /**
    * Indicate if the indices have changed.
    * @type {boolean} 
    * @private
    */
    this.indicesNeedUpdate = true;
};

/**
 * Add an element to the format.
 * @param {Lemon.VertexElement} element A VertexElement instance.
 */
Lemon.VertexFormat.prototype.add = function( element ) 
{
    this.elements.push(element);
    this.compute();
};

/**
 * Set elements.
 * @param {Array.<Lemon.VertexElement>} elements An array of VertexElement instance.
 */
Lemon.VertexFormat.prototype.set = function( elements ) 
{
    this.elements = elements;
    this.compute();
};

/**
 * Get stream's type.
 * @param {number} index Stream index.
 * @param {Lemon.VertexElement.StreamType} type A type.
 */
Lemon.VertexFormat.prototype.setStreamType = function( index, type ) 
{
    this.streamType[index] = type;
};

/**
 * Compute offset and vertex format's data.
 * @private
 */
Lemon.VertexFormat.prototype.compute = function() 
{
    var offset          = 0;
    var size            = 0;
    var previousStream  = 0;

    // Sort elements by stream (ascending).
    this.elements.sort(function( a, b )
    {
        if( a.stream < b.stream )
            return -1;
        else if( a.stream > b.stream )
            return 1;

        return 0;
    });

    // Compute values.
    for( var i = 0; i < this.elements.length; i++ )
    {
        // Reset offset and stride when we change stream.
        if( previousStream != this.elements[i].stream )
        {
            this.streamStride[previousStream]       = offset;
            offset                                  = 0;
        }

        switch(this.elements[i].type)
        {
            case Lemon.VertexElement.Type.Float:
            case Lemon.VertexElement.Type.Int:
                size = 4;
                break;
            case Lemon.VertexElement.Type.Short:
                size = 2;
                break;
            case Lemon.VertexElement.Type.Byte:
                size = 1;
                break;
            default:                
                size = 1;
                break;
        }

        this.elements[i].offset  = offset;
        size                    *= this.elements[i].count;
        offset                  += size;
        previousStream           = this.elements[i].stream;
    }

    this.streamStride[previousStream] = offset;
};

/**
 * Indicate if the indices need an update.
 * @param {boolean} state True to ask an update.
 */
Lemon.VertexFormat.prototype.setIndicesAsWaitingUpdate = function( state ) 
{
    this.indicesNeedUpdate = state;
};

/**
 * Indicate if the stream need an update.
 * @param {Lemon.VertexElement.Usage } usage Stream usage.
 * @param {boolean} state True to ask an update.
 */
Lemon.VertexFormat.prototype.setStreamAsWaitingUpdate = function( usage, state ) 
{
    for( var i = 0; i < this.elements.length; i++ )
        if( this.elements[i].usage == usage )
            this.streamNeedUpdate[this.elements[i].stream] = state;
};

/**
 * Get elements.
 * @return {Array.<Lemon.VertexElement>} An array of VertexElement.
 */
Lemon.VertexFormat.prototype.getElements = function() 
{
    return this.elements;
};

/**
 * Get stride of the asked stream.
 * @param {number} index Stream index.
 * @return {number} A stride value, 0 if the stream don't exist.
 */
Lemon.VertexFormat.prototype.getStreamStride = function( index ) 
{
    return this.streamStride[index] || 0;
};

/**
 * Get stream's type.
 * @param {number} index Stream index.
 * @return {Lemon.VertexElement.StreamType} A type, default: static.
 */
Lemon.VertexFormat.prototype.getStreamType = function( index ) 
{
    return this.streamType[index] || Lemon.VertexElement.StreamType.Stream;
};

/**
 * Check if indices need an update.
 * @return {boolean} True if the indices need an update, otherwise false.
 */
Lemon.VertexFormat.prototype.isIndicesWaitingUpdate = function() 
{
    return this.indicesNeedUpdate;
};

/**
 * Check if the asked stream need an update.
 * @param {number} index Stream index.
 * @return {boolean} True if the stream need an update, otherwise false.
 */
Lemon.VertexFormat.prototype.isStreamWaitingUpdate = function( index ) 
{
    return this.streamNeedUpdate[index];
};
