import Transformable from '../Transformable';
import Box from '../Math/Box';

/**
 * A node element is an element of a scene
 *
 * @category Core
 * @description A Node can represent something like a light, a mesh, a sprite, a camera or a text
 * @extends {Transformable}
 */
class Node extends Transformable {
    /**
     * Constructor
     *
     * @param {string=} name A string
     */
    constructor(name = '') {
        super();

        /**
         * Bounding box
         *
         * @type {Array.<Node>}
         * @private
         */
        this.boundingBox = new Box();

        /**
         * Node's children
         *
         * @type {Array.<Node>}
         * @private
         */
        this.children = [];

        /**
         * A culled element will not be drawn/sent to the renderer
         *
         * Warning: This attribute is set by Cullers automatically
         *
         * @type {boolean}
         * @public
         */
        this.culled = false;

        /**
         * An enabled element will be drawn/sent to the renderer
         *
         * @type {boolean}
         * @private
         */
        this.enabled = true;

        /**
         * Name, useful to retrieve the node
         *
         * @type {string}
         * @private
         */
        this.name = name;

        /**
         * Node's parent
         *
         * @type {?Node}
         * @private
         */
        this.parent = null;
    }

    /**
     * Add a child to the node
     *
     * @param {Node} node A Node instance
     * @return {Node} A reference to the instance
     */
    /* eslint no-param-reassign: ["error", { "props": false }] */
    addChild(node) {
        if (node === this) {
            return null;
        }

        // Detach node from his previous parent
        if (node.parent) {
            node.parent.removeChild(node);
        }

        // Add as a child
        this.children.push(node);
        node.parent = this;

        return this;
    }

    /**
     * Set node's state
     *
     * @param {boolean} value True to enable, false to disable
     * @return {Node} A reference to the instance
     */
    enable(value) {
        this.enabled = value;

        return this;
    }

    /**
     * Find the child with the given name
     *
     * @param {string} name A string
     * @return {?Node} A Node instance of null
     */
    findChild(name) {
        let child = null;

        for (let i = 0; i < this.children.length || child != null; i += 1) {
            if (this.children[i].name === name) {
                return this.children[i];
            }

            child = this.children[i].findChild(name);
        }

        return child;
    }

    /**
     * Remove a child from the node
     *
     * @param {Node} node A Node instance
     * @return {boolean} True if the operation is a success
     */
    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index !== -1) {
            this.children.splice(index, 1);
            node.parent = null;

            return true;
        }

        return false;
    }

    /**
     * Set the name to easily retrieve it later
     *
     * @param {string} name A string
     * @return {Node} A reference to the instance
     */
    setName(name) {
        this.name = name;

        return this;
    }

    /**
     * Update the node and his children
     *
     * @param {number} deltaTime A floating value representing time elapsed between two frames
     * @param {?boolean} forceUpdate Set to true to force an update
     * @return {boolean} True if the node has been updated
     */
    update(deltaTime, forceUpdate = false) {
        if (!this.computeTransformationMatrix((this.parent ? this.parent.getTransformationMatrix() : null), forceUpdate)) {
            return false;
        }

        // Update bounding box only if node has moved
        this.boundingBox.applyMatrix(this.getTransformationMatrix());

        return true;
    }

    /**
     * Visit the node and his children
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     * @return {boolean} True if visit was successful, otherwise false
     */
    visit() {
        return (!this.culled && this.enabled);
    }

    /**
     * Return Node's bounding Box
     *
     * @return {Box} A Box instance
     */
    getBoundingBox() {
        return this.boundingBox;
    }

    /**
     * Return Node's children
     *
     * @return {Array.<Node>} An array of Node
     */
    getChildren() {
        return this.children;
    }

    /**
     * Get state
     *
     * @return {boolean} True if the node is enabled, otherwise false
     */
    isEnabled() {
        return this.enabled;
    }

    /**
     * Indicate if the current node is the scene's root
     *
     * @return {boolean} True if it's the root node, otherwise false
     */
    isRoot() {
        return (this.parent === null);
    }
}

export default Node;
