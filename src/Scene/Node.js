import {Transformable} from '../Transformable.js';

/**
 * A node element is an element of a scene
 *
 * @description A Node can represent something like a light, a mesh, a sprite, a camera or a text
 * @extends {Transformable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Node extends Transformable
{
    /**
     * Constructor
     *
     * @param {string=} name A string
     */
    constructor(name = '')
    {
        super();

        /**
         * Node's children
         *
         * @type {Array.<Node>}
         * @private
         */
        this.children = [];

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
     */
    addChild(node)
    {
        if (node == this)
            return;

        // Detach node from his previous parent
        if (node.parent)
            node.parent.removeChild(node);

        // Add as a child
        this.children.push(node);
        node.parent = this;
    }

    /**
     * Find the child with the given name
     *
     * @param {string} name A string
     * @return {?Node} A Node instance of null
     */
    findChild(name)
    {
        for (let i = 0; i < this.children.length; i++)
        {
            if (this.children[i].name == name)
                return this.children[i];
            else
            {
                let child = this.children[i].findChild(name);
                if (child)
                    return child;
            }
        }

        return null;
    }

    /**
     * Remove a child from the node
     *
     * @param {Node} node A Node instance
     * @return {boolean} True if the operation is a success
     */
    removeChild(node)
    {
        let index = this.children.indexOf(node);
        if (index != -1)
        {
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
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * Update the node and his children
     *
     * @param {number} deltaTime A floating value representing time elapsed between two frames
     * @param {boolean} parentUpdated Indicate if the parent element have been updated
     * @return {boolean} True if the node have been updated
     */
    update(deltaTime, parentUpdated)
    {
        let parentMatrix = this.parent ? this.parent.getTransformationMatrix() : null;
        return this.computeTransformationMatrix(parentMatrix, parentUpdated);
    }

    /**
     * Visit the node and his children
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    visit(renderTarget) { };

    /**
     * Return Node's children
     *
     * @return {Array.<Node>} An array of Node
     */
    getChildren()
    {
        return this.children;
    }

    /**
     * Indicate if the current node is the scene's root
     *
     * @return {boolean} True if it's the root node, otherwise false
     */
    isRoot()
    {
        return (this.parent === null);
    }
}
