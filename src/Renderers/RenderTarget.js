goog.provide('Lemon.RenderTarget');
goog.require('Lemon.Private.Context');
goog.require('Lemon.RenderTask');

/**
 * A rendering target.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.RenderTarget = function() 
{
    /**
    * A reference to the active task.
    * @type {null|Lemon.RenderTask} 
    * @protected
    */
    this.activeTask = null;

    /**
    * Context instance.
    * @type {Lemon.Private.Context} 
    * @protected
    */
    this.context = new Lemon.Private.Context();

    /**
    * Tasks to execute.
    * @type {Array.<Lemon.RenderTask>} 
    * @protected
    */
    this.tasks = [];

    /**
    * The render API to use.
    * @type {Lemon.RenderAPI}
    * @protected
    */
    this.renderApi = null;
};

/**
 * Clear the rendering target.
 * @param {Lemon.Color} color A Color instance.
 */
Lemon.RenderTarget.prototype.clear = function( color ) { };

/**
 * Display.
 */
Lemon.RenderTarget.prototype.display = function() 
{
    // Execute tasks.
    for( var i = 0; i < this.tasks.length; i++ )
        this.tasks[i].execute(this.renderApi);
};

/**
 * Create a new task.
 * @return {number} RenderTask's index.
 */
Lemon.RenderTarget.prototype.createTask = function() 
{ 
    this.tasks.push(new Lemon.RenderTask());
    return (this.tasks.length - 1);
};

/**
 * Render the given scene.
 * @param {Lemon.Scene} scene A Scene instance.
 * @param {Lemon.Camera} camera A Camera instance.
 */
Lemon.RenderTarget.prototype.render = function( scene, camera ) 
{
    // Clear render API cache.
    this.renderApi.clearCache();

    // Set default camera.
    this.renderApi.setActiveCamera(camera);

    // Ensure at least one task is alive.
    if( !this.getActiveTask() )
        this.setActiveTask(this.createTask());

    // Manage the scene.
    scene.visit(this);
};

/**
 * Set the task with the given index active.
 * @param {number} index An integer representing task's index.
 */
Lemon.RenderTarget.prototype.setActiveTask = function( index ) 
{
    if( index >= 0 && index < this.tasks.length )
        this.activeTask = this.tasks[index];
};

/**
 * Get the active task.
 * @return {?Lemon.RenderTask} A RenderTask or null.
 */
Lemon.RenderTarget.prototype.getActiveTask = function() 
{
    return this.activeTask;
};

/**
 * Remove all the tasks in memory.
 */
Lemon.RenderTarget.prototype.removeTasks = function() 
{
    this.tasks.length   = 0;
    this.activeTask     = null;
};

/**
 * Get the render API.
 * @return {Lemon.RenderAPI} A Render API instance.
 */
Lemon.RenderTarget.prototype.getRenderAPI = function() 
{
    return this.renderApi;
};

/**
 * Get size.
 * @return {Array.<number>} A array with size on x and y.
 */
Lemon.RenderTarget.prototype.getSize = function() 
{
    return this.context.getSize();
};
