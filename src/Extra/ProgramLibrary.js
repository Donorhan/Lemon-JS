import {FileLoader} from '../Loaders/FileLoader.js';
import {Program} from '../Program.js';

/**
 * A class to manage programs/shaders
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class ProgramLibrary 
{
    /**
     * Get the program with the given name
     *
     * @param {string} name Program's name
     * @return {Program} A Program instance, otherwise null is the program doesn't exist
     */
    static get(name) 
    {
        let program = ProgramLibrary.programs[name];
        if (!program)
        {
            program = new Program();
            ProgramLibrary.programs[name] = program;
        }

        return program;
    }

    /**
     * Load a new program
     *
     * @param {string} name Program's name
     * @param {string} vertexShaderFile Path to the vertex shader file
     * @param {string} fragmentShaderFile Path to the fragment shader file
     * @param {Array.<string>=} defines An array with defines data
     * @return {?Program} A Program instance
     */
    static load(name, vertexShaderFile, fragmentShaderFile, defines) 
    {
        // Get/Create program
        let program = ProgramLibrary.get(name);

        // Chunck variables
        let chunkPatterns = /include\[([^\]]*)\]/g;

        // Prepare cache
        ProgramLibrary.cache[name] = { data: null, ready: false, sources: [] };

        /**
        * Callback for chunks
        *
        * @param {boolean} status Load status
        * @param {string} chunkData Chunk data
        * @param {Object=} userData Additional data
        */ 
        let chunkCallback = function( status, chunkData, userData )
        {
            // Put chunk data in cache
            ProgramLibrary.chunks[userData].data  = chunkData;
            ProgramLibrary.chunks[userData].ready = true;

            // Try to update
            ProgramLibrary.tryUpdateWaitingPrograms();                        
        };

        // Callback processing chunk
        let callback = function(type, programName, data)
        {
            let program = ProgramLibrary.programs[name];
            let sources = program.getSources();
            let chunks  = data.match(chunkPatterns);

            // Analyse if the file ask external chunks
            if (chunks)
            {
                let missingChunkCount = chunks.length;

                for (let i = 0; i < chunks.length; i++)
                {
                    let chunk       = chunks[i];
                    let chunkPath   = chunk.substring(chunk.lastIndexOf('[') + 1, chunk.lastIndexOf(']'));

                    if (ProgramLibrary.chunks[chunkPath] && ProgramLibrary.chunks[chunkPath].ready)
                        missingChunkCount--;
                    else if( !ProgramLibrary.chunks[chunkPath] )
                    {
                        ProgramLibrary.chunks[chunkPath] = { data: '', ready: false };
                        FileLoader.load(ProgramLibrary.folderPath + chunkPath + '?' + new Date().getTime(), chunkCallback, chunkPath);
                    }
                }

                // Everything is in memory? We can fill the program directly
                let result = ProgramLibrary.replaceChunks(data);
                if (missingChunkCount === 0)
                    ProgramLibrary.fillProgram(sources, program, name, type, result || '');
            }
            else 
                ProgramLibrary.fillProgram(sources, program, name, type, data);
        };

        // Load vertex file
        FileLoader.load(ProgramLibrary.folderPath + vertexShaderFile + '?' + new Date().getTime(), (status, data) =>
        {
            data = ProgramLibrary.addDefines(data, defines || []);
            ProgramLibrary.cache[name].sources[0] = data;
            callback(ProgramLibrary.Target.Vertex, name, data);        
        });

        // Load fragment file
        FileLoader.load(ProgramLibrary.folderPath + fragmentShaderFile + '?' + new Date().getTime(), (status, data) =>
        {
            data = ProgramLibrary.addDefines(data, defines || []);
            
            ProgramLibrary.cache[name].sources[1] = data;
            callback(ProgramLibrary.Target.Fragment, name, data);
        });   

        return program;
    }

    /**
     * Shortcut to fill program with sources and clear the cache.
     * @private
     * @param {Array.<string>} sources Vertex and fragment sources.
     * @param {Program} program A Program instance.
     * @param {string} name Program's name.
     * @param {ProgramLibrary.Target} type Type of data.
     * @param {string} data Data to add to the program.
     */
    static fillProgram(sources, program, name, type, data)
    {
        if (type == ProgramLibrary.Target.Vertex)
            program.loadFromData(data, sources[1]);
        else
            program.loadFromData(sources[0], data);

        if (program.isReady())
            delete ProgramLibrary.cache[name];
    };

    /**
     * Update waiting programs
     *
     * @private
     */
    static tryUpdateWaitingPrograms() 
    {
        for (let i in ProgramLibrary.programs)
        {
            if (!ProgramLibrary.programs[i].isReady())
            {
                let sources = ProgramLibrary.programs[i].getSources();
                for (let j = 0; j < 2; j++)
                {
                    if (!sources[j])
                    {
                        let source = ProgramLibrary.replaceChunks(ProgramLibrary.cache[i].sources[j]);
                        if (source)
                            ProgramLibrary.fillProgram(sources, ProgramLibrary.programs[i], i, (j === 0) ? ProgramLibrary.Target.Vertex : ProgramLibrary.Target.Fragment, source);
                    }
                }
            }
        }
    }

    /**
     * Fill programs with chunks data
     *
     * @private
     * @param {string} data Data to process
     * @return {?string} A string if everything is ok, otherwise null
     */
    static replaceChunks(data) 
    {
        let chunkPattern = /include\[([^\]]*)\]/;
        let result       = data;

        while (chunkPattern.test(result))
        {
            let chunk       = result.match(chunkPattern);
            let chunkName   = chunk[0].substring(chunk[0].lastIndexOf('[') + 1, chunk[0].lastIndexOf(']'));

            // We need to wait all chunks to continue.
            if (!ProgramLibrary.chunks[chunkName] || !ProgramLibrary.chunks[chunkName].ready)
                return null;

            result = result.replace(chunk[0], ProgramLibrary.chunks[chunkName].data || '');
        }

        return result;
    }

    /**
     * Add defines to the program
     *
     * @private
     * @param {string} source Source data
     * @param {Array.<string>} defines An array with defines to add to the source parameter
     * @return {string} The new string
     */
    static addDefines(source, defines) 
    {
        if (!defines)
            return source;

        let defineString = '';
        for (let i = 0; i < defines.length; i++)
            defineString += '#define ' + defines[i] + '\n'; 

        return defineString + source;
    }
}

/**
 * Put data in cache due to asynchrone loading
 *
 * @type {Array.<{data: null, ready: boolean, sources: Array<string>}>}
 */
ProgramLibrary.cache = [];

/**
 * Chunks in cache
 *
 * @type {Array.<{data: string, ready: boolean}>}
 */
ProgramLibrary.chunks = [];

/**
 * Path to the folder with shaders
 *
 * @type {string}
 */
ProgramLibrary.folderPath = '../shaders/';

/**
 * Shaders
 *
 * @type {Array.<Program>}
 */
ProgramLibrary.programs = [];

/**
 * Target
 *
 * @enum {number}
 */
ProgramLibrary.Target = { Vertex: 0, Fragment: 1 };
