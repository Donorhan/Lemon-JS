import ProgramLibrary from '../../../src/Extra/ProgramLibrary';

// Animation's method.
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// Set path to shaders.
ProgramLibrary.folderPath = '../../shaders/GLSL/';

// Render the scene.
export default (callback) => {
    let previous = 0;
    let diff = 0;

    function mainLoop(timestamp) {
        requestAnimationFrame(mainLoop);

        // Calculate elapsed time between two frames.
        diff = timestamp - previous;
        previous = timestamp;

        callback(diff);
    }

    requestAnimationFrame(mainLoop);
};
