goog.provide('Lemon.RenderTask');
goog.require('Lemon.RenderAPI');

/**
 * A rendering task.
 * @constructor
 */
Lemon.RenderTask = function()
{
    /**
    * Queue with opaques commands to process.
    * @type {Array.<Array.<Lemon.RenderCommand>>}
    * @private
    */
    this.opaqueQueue = [];

    /**
    * Queue with transparents commands to process.
    * @type {Array.<Array.<Lemon.RenderCommand>>}
    * @private
    */
    this.transparentQueue = [];
};

/**
 * Add a command to the task.
 * @param {Lemon.RenderCommand} command A RenderCommand instance.
 * @param {number=} queue ID of the queue.
 */
Lemon.RenderTask.prototype.addCommand = function( command, queue ) 
{
    var queueID = queue || 0;

    if( command.isOpaque() )
    {
        this.opaqueQueue[queueID] = this.opaqueQueue[queueID] || [];
        this.opaqueQueue[queueID].push(command);
    }
    else
    {
        this.transparentQueue[queueID] = this.transparentQueue[queueID] || [];
        this.transparentQueue[queueID].push(command);
    }
};

/**
 * Execute the task.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 */
Lemon.RenderTask.prototype.execute = function( renderAPI ) 
{ 
    var i = 0, j = 0;

    // First we execute opaque commands.
    for( i = 0; i < this.opaqueQueue.length; i++ )
    {
        for( j = 0; j < this.opaqueQueue[i].length; j++ )
            this.opaqueQueue[i][j].execute(renderAPI);
    }

    // Secondly, we execute non-opaque ones.
    for( i = 0; i < this.transparentQueue.length; i++ )
    {
        for( j = 0; j < this.transparentQueue[i].length; j++ )
            this.transparentQueue[i][j].execute(renderAPI);
    }
};
