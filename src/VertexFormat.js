/**
 * Represent one of the element of a vertex.
 * It can be a position, a normal, a color, ….
 *
 * @category Geometry
 */
export class VertexElement {
    /**
     * Constructor
     *
     * @param {VertexElement.Usage} usage Element usage
     * @param {number} stream Stream index
     * @param {VertexElement.Type} type Type of element
     * @param {number?} count Value count, ex: A "vec2" will have "2" for this parameter
     * @param {boolean?} normalize True to ask rendering API to normalize values
     */
    constructor(usage, stream, type, count = 0, normalize = false) {
        /**
         * Value count for this element
         *
         * @type {number}
         * @public
         */
        this.count = count;

        /**
         * Indicate if the value need to be normalized by the graphic API
         *
         * @type {boolean}
         * @public
         */
        this.normalize = normalize;

        /**
         * Offset in the vertex data
         *
         * @type {number}
         * @public
         */
        this.offset = 0;

        /**
         * Stream index
         *
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
         * Type of value
         *
         * @type {VertexElement.Type}
         * @public
         */
        this.type = type;

        /**
         * Type of element
         *
         * @type {VertexElement.Usage}
         * @public
         */
        this.usage = usage;
    }
}

/**
 * Type of stream available
 *
 * @enum {number}
 */
VertexElement.StreamType = {
    Static: 0,
    Dynamic: 1,
    Stream: 2,
};

/**
 * VertexElement's types
 *
 * @enum {number}
 */
VertexElement.Type = {
    Byte: 0,
    Float: 1,
    Int: 2,
    Short: 3,
};

/**
 * VertexElement's usage
 *
 * @enum {number}
 */
VertexElement.Usage = {
    Position: 0,
    Color: 1,
    UVS: 2,
    Normal: 3,
    Tangent: 4,
};

/**
 * Indicate the format of a vertex
 *
 * @category Geometry
 */
export class VertexFormat {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Elements inside this format
         *
         * @type {Array.<VertexElement>}
         * @private
         */
        this.elements = [];

        /**
         * Stream's strides
         *
         * @type {Array.<VertexElement.StreamType>}
         * @private
         */
        this.streamType = [];

        /**
         * Stream's strides
         *
         * @type {Array.<number>}
         * @private
         */
        this.streamStride = [];

        /**
         * Stream's state
         *
         * @type {Array.<boolean>}
         * @private
         */
        this.streamNeedUpdate = [];

        /**
         * Indicate if the indices have changed
         *
         * @type {boolean}
         * @private
         */
        this.indicesNeedUpdate = true;
    }

    /**
     * Add an element to the format
     *
     * @param {VertexElement} element A VertexElement instance
     * @return {VertexFormat} A reference to the instance
     */
    add(element) {
        this.elements.push(element);
        this.compute();

        return this;
    }

    /**
     * Set elements
     *
     * @param {Array.<VertexElement>} elements An array of VertexElement instance
     * @return {VertexFormat} A reference to the instance
     */
    set(elements) {
        this.elements = elements;
        this.compute();

        return this;
    }

    /**
     * Get stream's type
     *
     * @param {number} index Stream index
     * @param {VertexElement.StreamType} type A type
     * @return {VertexFormat} A reference to the instance
     */
    setStreamType(index, type) {
        this.streamType[index] = type;

        return this;
    }

    /**
     * Compute offset and vertex format's data
     *
     * @private
     */
    compute() {
        let offset = 0;
        let size = 0;
        let previousStream = 0;

        // Sort elements by stream (ascending)
        this.elements.sort((a, b) => {
            const t = (a.stream > b.stream ? 1 : 0);
            return a.stream < b.stream ? -1 : t;
        });

        // Compute values
        for (let i = 0; i < this.elements.length; i += 1) {
            // Reset offset and stride when we change stream
            if (previousStream !== this.elements[i].stream) {
                this.streamStride[previousStream] = offset;
                offset = 0;
            }

            switch (this.elements[i].type) {
            case VertexElement.Type.Float:
            case VertexElement.Type.Int:
                size = 4;
                break;
            case VertexElement.Type.Short:
                size = 2;
                break;
            case VertexElement.Type.Byte:
                size = 1;
                break;
            default:
                size = 1;
                break;
            }

            this.elements[i].offset = offset;
            size *= this.elements[i].count;
            offset += size;
            previousStream = this.elements[i].stream;
        }

        this.streamStride[previousStream] = offset;
    }

    /**
     * Indicate if the indices need an update
     *
     * @param {boolean} state True to ask an update
     * @return {VertexFormat} A reference to the instance
     */
    setIndicesAsWaitingUpdate(state) {
        this.indicesNeedUpdate = state;

        return this;
    }

    /**
     * Indicate if the stream need an update
     *
     * @param {VertexElement.Usage } usage Stream usage
     * @param {boolean} state True to ask an update
     * @return {VertexFormat} A reference to the instance
     */
    setStreamAsWaitingUpdate(usage, state) {
        for (let i = 0; i < this.elements.length; i += 1) {
            if (this.elements[i].usage === usage) {
                this.streamNeedUpdate[this.elements[i].stream] = state;
            }
        }

        return this;
    }

    /**
     * Get elements
     *
     * @return {Array.<VertexElement>} An array of VertexElement
     */
    getElements() {
        return this.elements;
    }

    /**
     * Get stride of the asked stream
     *
     * @param {number} index Stream index
     * @return {number} A stride value, 0 if the stream don't exist
     */
    getStreamStride(index) {
        return this.streamStride[index] || 0;
    }

    /**
     * Get stream's type
     *
     * @param {number} index Stream index
     * @return {VertexElement.StreamType} A type, default: stream
     */
    getStreamType(index) {
        return this.streamType[index] || VertexElement.StreamType.Stream;
    }

    /**
     * Check if indices need an update
     *
     * @return {boolean} True if the indices need an update, otherwise false
     */
    isIndicesWaitingUpdate() {
        return this.indicesNeedUpdate;
    }

    /**
     * Check if the asked stream need an update
     *
     * @param {number} index Stream index
     * @return {boolean} True if the stream need an update, otherwise false
     */
    isStreamWaitingUpdate(index) {
        return this.streamNeedUpdate[index];
    }
}
