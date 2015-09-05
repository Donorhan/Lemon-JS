goog.provide('Lemon.ProgramLibrary');
goog.require('Lemon.Loaders.FileLoader');
goog.require('Lemon.Program');

/**
 * A class to manage programs/shaders.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.ProgramLibrary = function() { };

/**
 * Put data in cache due to asynchrone loading.
 * @type {Array.<{data: null, ready: boolean, sources: Array<string>}>}
 */
Lemon.ProgramLibrary.cache = [];

/**
 * Chunks in cache.
 * @type {Array.<{data: string, ready: boolean}>}
 */
Lemon.ProgramLibrary.chunks = [];

/**
 * Path to the folder with shaders.
 * @type {string}
 */
Lemon.ProgramLibrary.folderPath = '../shaders/';

/**
 * Shaders.
 * @type {Array.<Lemon.Program>}
 */
Lemon.ProgramLibrary.programs = [];

/**
 * Target.
 * @enum {number}
 */
Lemon.ProgramLibrary.Target = { Vertex: 0, Fragment: 1 };

/**
 * Get the program with the given name.
 * @param {string} name Program's name.
 * @return {Lemon.Program} A Program instance, otherwise null is the program doesn't exist.
 */
Lemon.ProgramLibrary.get = function( name ) 
{
    var program = Lemon.ProgramLibrary.programs[name];
    if( !program )
    {
        program                             = new Lemon.Program();
        Lemon.ProgramLibrary.programs[name] = program;
    }

    return program;
};

/**
 * Load a new program.
 * @param {string} name Program's name.
 * @param {string} vertexShaderFile Path to the vertex shader file.
 * @param {string} fragmentShaderFile Path to the fragment shader file.
 * @param {Array.<string>=} defines An array with defines data.
 * @return {?Lemon.Program} A Program instance.
 */
Lemon.ProgramLibrary.load = function( name, vertexShaderFile, fragmentShaderFile, defines ) 
{
    // Get/Create program.
    var program = Lemon.ProgramLibrary.get(name);

    // Chunck variables.
    var chunkPatterns = /include\[([^\]]*)\]/g;

    // Prepare cache.
    Lemon.ProgramLibrary.cache[name] = { data: null, ready: false, sources: [] };

    /**
    * Callback for chunks.
    * @param {boolean} status Load status.
    * @param {string} chunkData Chunk data.
    * @param {Object=} userData Additional data.
    */ 
    var chunkCallback = function( status, chunkData, userData )
    {
        // Put chunk data in cache.
        Lemon.ProgramLibrary.chunks[userData].data     = chunkData;
        Lemon.ProgramLibrary.chunks[userData].ready    = true;

        // Try to update.
        Lemon.ProgramLibrary.tryUpdateWaitingPrograms();                        
    };

    // Callback processing chunk.
    var callback = function( type, programName, data )
    {
        var program = Lemon.ProgramLibrary.programs[name];
        var sources = program.getSources();
        var chunks  = data.match(chunkPatterns);

        // Analyse if the file ask external chunks.
        if( chunks )
        {
            var missingChunkCount = chunks.length;

            for( var i = 0; i < chunks.length; i++ )
            {
                var chunk       = chunks[i];
                var chunkPath   = chunk.substring(chunk.lastIndexOf('[') + 1, chunk.lastIndexOf(']'));

                if( Lemon.ProgramLibrary.chunks[chunkPath] && Lemon.ProgramLibrary.chunks[chunkPath].ready )
                    missingChunkCount--;
                else if( !Lemon.ProgramLibrary.chunks[chunkPath] )
                {
                    Lemon.ProgramLibrary.chunks[chunkPath] = { data: '', ready: false };
                    Lemon.Loaders.FileLoader.load(Lemon.ProgramLibrary.folderPath + chunkPath + '?' + new Date().getTime(), chunkCallback, chunkPath);
                }
            }

            // Everything is in memory? We can fill the program directly.
            var result = Lemon.ProgramLibrary.replaceChunks(data);
            if( missingChunkCount === 0 )
                Lemon.ProgramLibrary.fillProgram(sources, program, name, type, result || '');
        }
        else 
            Lemon.ProgramLibrary.fillProgram(sources, program, name, type, data);
    };

    // Load vertex file.
    Lemon.Loaders.FileLoader.load(Lemon.ProgramLibrary.folderPath + vertexShaderFile + '?' + new Date().getTime(), function( status, data )
    {
        data = Lemon.ProgramLibrary.addDefines(data, defines || []);
        Lemon.ProgramLibrary.cache[name].sources[0] = data;
        callback(Lemon.ProgramLibrary.Target.Vertex, name, data);        
    });

    // Load fragment file.
    Lemon.Loaders.FileLoader.load(Lemon.ProgramLibrary.folderPath + fragmentShaderFile + '?' + new Date().getTime(), function( status, data )
    {
        data = Lemon.ProgramLibrary.addDefines(data, defines || []);
        
        Lemon.ProgramLibrary.cache[name].sources[1] = data;
        callback(Lemon.ProgramLibrary.Target.Fragment, name, data);
    });   

    return program;
};

/**
 * Shortcut to fill program with sources and clear the cache.
 * @private
 * @param {Array.<string>} sources Vertex and fragment sources.
 * @param {Lemon.Program} program A Program instance.
 * @param {string} name Program's name.
 * @param {Lemon.ProgramLibrary.Target} type Type of data.
 * @param {string} data Data to add to the program.
 */
Lemon.ProgramLibrary.fillProgram = function( sources, program, name, type, data )
{
    if( type == Lemon.ProgramLibrary.Target.Vertex )
        program.loadFromData(data, sources[1]);
    else
        program.loadFromData(sources[0], data);

    if( program.isReady() )
        delete Lemon.ProgramLibrary.cache[name];
};

/**
 * Update waiting programs.
 * @private
 */
Lemon.ProgramLibrary.tryUpdateWaitingPrograms = function() 
{
    for( var i in Lemon.ProgramLibrary.programs )
    {
        if( !Lemon.ProgramLibrary.programs[i].isReady() )
        {
            var sources = Lemon.ProgramLibrary.programs[i].getSources();
            for( var j = 0; j < 2; j++ )
            {
                if( !sources[j] )
                {
                    var source = Lemon.ProgramLibrary.replaceChunks(Lemon.ProgramLibrary.cache[i].sources[j]);
                    if( source )
                        Lemon.ProgramLibrary.fillProgram(sources, Lemon.ProgramLibrary.programs[i], i, (j === 0) ? Lemon.ProgramLibrary.Target.Vertex : Lemon.ProgramLibrary.Target.Fragment, source);
                }
            }
        }
    }
};

/**
 * Fill programs with chunks data.
 * @private
 * @param {string} data Data to process.
 * @return {?string} A string if everything is ok, otherwise null.
 */
Lemon.ProgramLibrary.replaceChunks = function( data ) 
{
    var chunkPattern    = /include\[([^\]]*)\]/;
    var result          = data;

    while( chunkPattern.test(result) )
    {
        var chunk       = result.match(chunkPattern);
        var chunkName   = chunk[0].substring(chunk[0].lastIndexOf('[') + 1, chunk[0].lastIndexOf(']'));

        // We need to wait all chunks to continue.
        if( !Lemon.ProgramLibrary.chunks[chunkName] || !Lemon.ProgramLibrary.chunks[chunkName].ready )
            return null;

        result = result.replace(chunk[0], Lemon.ProgramLibrary.chunks[chunkName].data || '');
    }

    return result;
};

/**
 * Add defines to the program.
 * @private
 * @param {string} source Source data.
 * @param {Array.<string>} defines An array with defines to add to the source parameter.
 * @return {string} The new string.
 */
Lemon.ProgramLibrary.addDefines = function( source, defines ) 
{
    if( !defines )
        return source;

    var defineString = '';
    for( var i = 0; i < defines.length; i++ )
        defineString += '#define ' + defines[i] + '\n'; 

    return defineString + source;
};
