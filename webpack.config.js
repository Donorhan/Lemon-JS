const path = require('path');

const examplesPath = 'examples';

module.exports = {
    entry: {
        cube: path.join(__dirname, examplesPath, '01-Cube'),
        sprites: path.join(__dirname, examplesPath, '02-Sprites'),
        model: path.join(__dirname, examplesPath, '03-Model'),
        scene: path.join(__dirname, examplesPath, '04-Scene'),
        lights: path.join(__dirname, examplesPath, '05-Lights'),
        shaders: path.join(__dirname, examplesPath, '06-Shaders'),
        postprocessing: path.join(__dirname, examplesPath, '07-PostProcessing'),
        skybox: path.join(__dirname, examplesPath, '08-Skybox'),
        video: path.join(__dirname, examplesPath, '09-Video'),
        culling: path.join(__dirname, examplesPath, '10-Culling'),
    },
    output: {
        path: path.join(__dirname, examplesPath, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(gl-matrix|webgl-constants)\/).*/,
                loader: 'babel-loader?cacheDirectory=true',
            },
        ],
    },
    optimization: {
        sideEffects: false,
    },
};
