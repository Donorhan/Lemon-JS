goog.provide('Lemon.Scene');
goog.require('Lemon.Node');

/**
 * A scene.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Scene = function() 
{
    /**
    * Root node.
    * @type {Lemon.Node}
    * @private
    */
    this.root = new Lemon.Node('root');
};

/**
 * Add a node element to the scene.
 * @param {Lemon.Node} node A Node instance.
 */
Lemon.Scene.prototype.add = function( node ) 
{
    this.root.addChild(node);
};

/**
 * Find the node with the given name.
 * @param {string} name A string.
 * @return {?Lemon.Node} A Node instance of null.
 */
Lemon.Scene.prototype.find = function( name ) 
{
    return this.root.findChild(name);    
};

/**
 * Remove a node element from the scene.
 * @param {Lemon.Node} node A Node instance.
 * @return {boolean} True if the operation is a success.
 */
Lemon.Scene.prototype.remove = function( node ) 
{
    return this.root.removeChild(node);
};

/**
 * Update the graph.
 * @param {number} deltaTime A floating value representing time elapsed between two frames.
 */
Lemon.Scene.prototype.update = function( deltaTime ) 
{
    // Recursive function to roam the graph. 
    function update( node, deltaTime, parentUpdated )
    {
        // Update node.
        var updated = node.update(deltaTime, parentUpdated);

        // Update his children.
        var children = node.getChildren();
        for( var i = 0; i < children.length; i++ )
            update(children[i], deltaTime, (updated || parentUpdated));
    }

    // Start the recursive method.
    update(this.root, deltaTime, false);
};

/**
 * Visit the graph.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Scene.prototype.visit = function( renderTarget ) 
{
    // Recursive function to roam the graph. 
    function visit( node, target )
    {
        // Visit node.
        node.visit(target);

        // Vist his children.
        var children = node.getChildren();
        for( var i = 0; i < children.length; i++ )
            visit(children[i], target);
    }

    // Start the recursive method.
    visit(this.root, renderTarget);
};
