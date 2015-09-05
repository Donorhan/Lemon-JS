goog.provide('Lemon.RenderCommand');
goog.require('Lemon.RenderAPI');

/**
 * An abstract rendering command.
 * @constructor
 */
Lemon.RenderCommand = function() { };

/**
 * Indicate if the command concern an opaque element.
 * @return {boolean} True if command must be in the opaque queue.
 */
Lemon.RenderCommand.prototype.isOpaque = function() { return true; };

/**
 * Execute the command.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 */
Lemon.RenderCommand.prototype.execute = function( renderAPI ) { };
