// Animation's method.
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// Set path to shaders.
Lemon.ProgramLibrary.folderPath = '../../shaders/';

// Render the scene.
function startLoop( callback )
{
    var previous = 0;
    var diff     = 0;

    function mainLoop( timestamp )
    {
        requestAnimationFrame(mainLoop);

        // Calculate elapsed time between two frames.
        diff     = timestamp - previous;
        previous = timestamp;

        callback(diff);
    }
    requestAnimationFrame(mainLoop);
}
