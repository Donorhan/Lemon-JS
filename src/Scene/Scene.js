import {Node} from './Node.js';

/**
 * A scene
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Scene
{
    /**
     * Constructor
     */
    constructor()
    {
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
     */
    add(node)
    {
        this.root.addChild(node);
    }

    /**
     * Find the node with the given name
     *
     * @param {string} name A string
     * @return {?Node} A Node instance of null
     */
    find(name)
    {
        return this.root.findChild(name);
    }

    /**
     * Remove a node element from the scene
     *
     * @param {Node} node A Node instance
     * @return {boolean} True if the operation is a success
     */
    remove(node)
    {
        return this.root.removeChild(node);
    }

    /**
     * Update the graph
     *
     * @param {number} deltaTime A floating value representing time elapsed between two frames
     */
    update(deltaTime)
    {
        // Recursive function to roam the graph
        function update(node, deltaTime, parentUpdated)
        {
            // Update node
            let updated = node.update(deltaTime, parentUpdated);

            // Update his children
            let children = node.getChildren();
            for (let i = 0; i < children.length; i++)
                update(children[i], deltaTime, (updated || parentUpdated));
        }

        // Start the recursive method
        update(this.root, deltaTime, false);
    }

    /**
     * Visit the graph
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    visit(renderTarget)
    {
        // Recursive function to roam the graph
        function visit(node, target)
        {
            if (!node.isEnabled())
                return;

            // Visit node
            node.visit(target);

            // Visit his children
            let children = node.getChildren();
            for (let i = 0; i < children.length; i++)
                visit(children[i], target);
        }

        // Start the recursive method
        visit(this.root, renderTarget);
    }
}
