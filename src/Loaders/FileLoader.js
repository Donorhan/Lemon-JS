goog.provide('Lemon.Loaders.FileLoader');

/**
 * A class to load file using Ajax.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Loaders.FileLoader = function() { };

/**
 * Load a file.
 * @param {string} filePath Path to the file to load.
 * @param {function(boolean, string, Object=)} callback Callback.
 * @param {Object=} userData User data.
 */
Lemon.Loaders.FileLoader.load = function( filePath, callback, userData )
{
    var reader = new XMLHttpRequest();
    reader.onreadystatechange = function()
    {
        if( reader.readyState === 4 && (reader.status === 200 || reader.status === 0) )
            callback(true, reader.responseText, userData);
    };
    reader.open('GET', filePath, true);
    reader.send();
};
