import FileLoader from '../Loaders/FileLoader';
import { Program } from '../Program';

/**
 * A class to manage programs/shaders
 *
 * @category Shaders
 */
class ProgramLibrary {
    /**
     * Get the program with the given name
     *
     * @param {string} name Program's name
     * @return {Program} A Program instance, otherwise null is the program doesn't exist
     */
    static get(name) {
        let program = ProgramLibrary.programs[name];
        if (!program) {
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
    static async loadFromFile(name, vertexShaderFile, fragmentShaderFile, defines) {
        // Get/Create program
        const program = ProgramLibrary.get(name);

        // Chunck variables
        const chunkPatterns = /include\[([^\]]*)\]/g;

        // Prepare cache
        ProgramLibrary.cache[name] = {
            data: null,
            ready: false,
            sources: [],
        };

        // Callback processing chunk
        const callback = async (type, data) => {
            const newProgram = ProgramLibrary.programs[name];
            const sources = newProgram.getSources();
            const chunks = data.match(chunkPatterns);

            // Analyse if the file ask external chunks
            if (chunks) {
                const waitingChunks = [];
                for (let i = 0; i < chunks.length; i += 1) {
                    const chunk = chunks[i];
                    const chunkPath = chunk.substring(chunk.lastIndexOf('[') + 1, chunk.lastIndexOf(']'));

                    if (!ProgramLibrary.chunks[chunkPath]) {
                        ProgramLibrary.chunks[chunkPath] = { data: '', ready: false };
                        waitingChunks.push(FileLoader.load(`${ProgramLibrary.folderPath}${chunkPath}`, chunkPath));
                    }
                }

                await Promise.all(waitingChunks).then((results) => {
                    results.forEach((response) => {
                        ProgramLibrary.chunks[response.name].data = response.data;
                        ProgramLibrary.chunks[response.name].ready = true;
                    });
                });

                // Try to update
                ProgramLibrary.tryUpdateWaitingPrograms();

                // Everything is in memory? We can fill the program directly
                const result = ProgramLibrary.replaceChunks(data);
                ProgramLibrary.fillProgram(sources, newProgram, name, type, result || '');
            } else {
                ProgramLibrary.fillProgram(sources, newProgram, name, type, data);
            }
        };

        // Load vertex file
        const vertexResponse = await FileLoader.load(`${vertexShaderFile}`);
        const vertexData = ProgramLibrary.addDefines(vertexResponse.data, defines || []);
        ProgramLibrary.cache[name].sources[0] = vertexData;
        await callback(ProgramLibrary.Target.Vertex, vertexData);

        // Load fragment file
        const fragmentResponse = await FileLoader.load(`${fragmentShaderFile}`);
        const fragmentData = ProgramLibrary.addDefines(fragmentResponse.data, defines || []);
        ProgramLibrary.cache[name].sources[1] = fragmentData;
        await callback(ProgramLibrary.Target.Fragment, fragmentData);

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
    static fillProgram(sources, program, name, type, data) {
        if (type === ProgramLibrary.Target.Vertex) {
            program.loadFromData(data, sources[1]);
        } else {
            program.loadFromData(sources[0], data);
        }

        if (program.isReady()) {
            delete ProgramLibrary.cache[name];
        }
    }

    /**
     * Update waiting programs
     *
     * @private
     */
    static tryUpdateWaitingPrograms() {
        for (const i in ProgramLibrary.programs) {
            if (!ProgramLibrary.programs[i].isReady()) {
                const sources = ProgramLibrary.programs[i].getSources();
                for (let j = 0; j < 2; j += 1) {
                    if (!sources[j]) {
                        const source = ProgramLibrary.replaceChunks(ProgramLibrary.cache[i].sources[j]);
                        if (source) {
                            ProgramLibrary.fillProgram(sources, ProgramLibrary.programs[i], i, (j === 0) ? ProgramLibrary.Target.Vertex : ProgramLibrary.Target.Fragment, source);
                        }
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
    static replaceChunks(data) {
        const chunkPattern = /include\[([^\]]*)\]/;
        let result = data;

        while (chunkPattern.test(result)) {
            const chunk = result.match(chunkPattern);
            const chunkName = chunk[0].substring(chunk[0].lastIndexOf('[') + 1, chunk[0].lastIndexOf(']'));

            // We need to wait all chunks to continue.
            if (!ProgramLibrary.chunks[chunkName] || !ProgramLibrary.chunks[chunkName].ready) {
                return null;
            }

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
    static addDefines(source, defines) {
        if (!defines) {
            return source;
        }

        let defineString = '';
        for (let i = 0; i < defines.length; i += 1) {
            defineString += `#define ${defines[i]}\n`;
        }

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

export default ProgramLibrary;
