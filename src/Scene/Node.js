goog.provide('Lemon.Node');
goog.require('Lemon.Transformable');

/**
 * A node element is an element of a scene.
 * @description A Node can represent something like a light, a mesh, a sprite, a camera or a text.
 * @constructor
 * @extends {Lemon.Transformable}
 * @param {string=} name A string.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Node = function( name ) 
{
    Lemon.Transformable.call(this);

    /**
    * Node's children.
    * @type {Array.<Lemon.Node>}
    * @private
    */
    this.children = [];

    /**
    * Name, useful to retrieve the node.
    * @type {string}
    * @private
    */
    this.name = name || '';

    /**
    * Node's parent.
    * @type {?Lemon.Node}
    * @private
    */
    this.parent = null;
};
goog.inherits(Lemon.Node, Lemon.Transformable);

/**
 * Add a child to the node.
 * @param {Lemon.Node} node A Node instance.
 */
Lemon.Node.prototype.addChild = function( node ) 
{
    if( node == this )
        return;

    // Detach node from his previous parent.
    if( node.parent )
        node.parent.removeChild(node);

    // Add as a child.
    this.children.push(node);
    node.parent = this;
};

/**
 * Find the child with the given name.
 * @param {string} name A string.
 * @return {?Lemon.Node} A Node instance of null.
 */
Lemon.Node.prototype.findChild = function( name ) 
{
    for( var i = 0; i < this.children.length; i++ )
    {
        if( this.children[i].name == name )
            return this.children[i];
        else
        {
            var child = this.children[i].findChild(name);
            if( child )
                return child;
        }
    }

    return null;
};

/**
 * Remove a child from the node.
 * @param {Lemon.Node} node A Node instance.
 * @return {boolean} True if the operation is a success.
 */
Lemon.Node.prototype.removeChild = function( node ) 
{
    var index = this.children.indexOf(node);
    if( index != -1 )
    {
        this.children.splice(index, 1);
        node.parent = null;
        return true;
    }

    return false;
};

/**
 * Set the name to easily retrieve it later.
 * @param {string} name A string.
 */
Lemon.Node.prototype.setName = function( name ) 
{
    this.name = name;
};

/**
 * Update the node and his children.
 * @param {number} deltaTime A floating value representing time elapsed between two frames.
 * @param {boolean} parentUpdated Indicate if the parent element have been updated.
 * @return {boolean} True if the node have been updated.
 */
Lemon.Node.prototype.update = function( deltaTime, parentUpdated ) 
{ 
    var parentMatrix = this.parent ? this.parent.getTransformationMatrix() : null;
    return this.computeTransformationMatrix(parentMatrix, parentUpdated);
};

/**
 * Visit the node and his children.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Node.prototype.visit = function( renderTarget ) { };

/**
 * Return Node's children.
 * @return {Array.<Lemon.Node>} An array of Node.
 */
Lemon.Node.prototype.getChildren = function() 
{
    return this.children;
};

/**
 * Indicate if the current node is the scene's root.
 * @return {boolean} True if it's the root node, otherwise false.
 */
Lemon.Node.prototype.isRoot = function() 
{
    return (this.parent === null);
};
