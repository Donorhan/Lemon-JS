import Node from './Node';

/**
 * A scene
 *
 * @category Core
 */
class Scene {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Root node
         *
         * @type {Node}
         * @private
         */
        this.root = new Node('root');
    }

    /**
     * Add a node element to the scene
     *
     * @param {Node} node A Node instance
     * @return {Scene} A reference to the instance
     */
    add(node) {
        this.root.addChild(node);
        return this;
    }

    /**
     * Find the node with the given name
     *
     * @param {string} name A string
     * @return {?Node} A Node instance of null
     */
    find(name) {
        return this.root.findChild(name);
    }

    /**
     * Remove a node element from the scene
     *
     * @param {Node} node A Node instance
     * @return {boolean} True if the operation is a success
     */
    remove(node) {
        return this.root.removeChild(node);
    }

    /**
     * Update the graph
     *
     * @param {?number} deltaTime A floating value representing time elapsed between two frames
     */
    update(deltaTime = 0.0) {
        this.updateNode(this.root, deltaTime, false);
    }

    /**
     * Update a node and his children
     *
     * @param {Node} node A Node instance
     * @param {number} deltaTime A floating value representing time elapsed between two frames
     * @param {boolean} forceUpdate Set to true to force an update
     * @private
     */
    updateNode(node, deltaTime, forceUpdate) {
        // Update node
        const updated = node.update(deltaTime, forceUpdate) || forceUpdate;

        // Update his children
        const children = node.getChildren();
        for (let i = 0; i < children.length; i += 1) {
            this.updateNode(children[i], deltaTime, updated);
        }
    }

    /**
     * Visit the graph
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    visit(renderTarget) {
        this.visitNode(renderTarget, this.root);
    }

    /**
     * Visit a node and his children
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     * @param {Node} node A Node instance to visit
     * @private
     */
    visitNode(target, node) {
        if (node.visit(target)) {
            const children = node.getChildren();
            for (let i = 0; i < children.length; i += 1) {
                this.visitNode(target, children[i]);
            }
        }
    }

    /**
     * Return root node
     *
     * @return {Node} node A Node instance
     */
    getRoot() {
        return this.root;
    }
}

export default Scene;
