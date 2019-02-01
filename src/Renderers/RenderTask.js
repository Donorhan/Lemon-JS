/**
 * A rendering task
 *
 * @category Rendering
 */
class RenderTask {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Queue with opaques commands to process
         *
         * @type {Array.<Array.<RenderCommand>>}
         * @private
         */
        this.opaqueQueue = [];

        /**
         * Queue with transparents commands to process
         *
         * @type {Array.<Array.<RenderCommand>>}
         * @private
         */
        this.transparentQueue = [];
    }

    /**
     * Add a command to the task
     *
     * @param {RenderCommand} command A RenderCommand instance
     * @param {number=} queue ID of the queue
     */
    addCommand(command, queue = 0) {
        if (command.isOpaque()) {
            this.opaqueQueue[queue] = this.opaqueQueue[queue] || [];
            this.opaqueQueue[queue].push(command);
        } else {
            this.transparentQueue[queue] = this.transparentQueue[queue] || [];
            this.transparentQueue[queue].push(command);
        }
    }

    /**
     * Execute the task
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     */
    execute(renderAPI) {
        let i = 0;
        let j = 0;

        // First we execute opaque commands
        for (i = 0; i < this.opaqueQueue.length; i += 1) {
            for (j = 0; j < this.opaqueQueue[i].length; j += 1) {
                this.opaqueQueue[i][j].execute(renderAPI);
            }
        }

        // Secondly, we execute non-opaque ones
        for (i = 0; i < this.transparentQueue.length; i += 1) {
            for (j = 0; j < this.transparentQueue[i].length; j += 1) {
                this.transparentQueue[i][j].execute(renderAPI);
            }
        }
    }
}

export default RenderTask;
