/**
 * An abstract rendering command
 *
 * @category Rendering
 */
class RenderCommand {
    /**
     * Indicate if the command concern an opaque element
     *
     * @return {boolean} True if command must be in the opaque queue
     */
    isOpaque() { return true; }

    /**
     * Execute the command
     *
     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
     */
    execute(renderAPI) { }
}

export default RenderCommand;
