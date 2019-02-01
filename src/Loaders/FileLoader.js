/**
 * A class to load file using Ajax
 *
 * @category Loaders
 */
class FileLoader {
    /**
     * Load a file
     *
     * @param {string} filePath Path to the file to load
     * @param {string} name Call's identifier
     */
    static load(filePath, name = '') {
        return new Promise((resolve, reject) => {
            const reader = new XMLHttpRequest();
            reader.onreadystatechange = () => {
                if (reader.readyState === 4 && (reader.status === 200 || reader.status === 0)) {
                    resolve({
                        data: reader.responseText,
                        name
                    });
                } else if (reader.readyState === 4) {
                    reject(Error('Unable to load file'));
                }
            };

            reader.onerror = () => {
                reject(Error('File not found'));
            };

            reader.open('GET', filePath, true);
            reader.send();
        });
    }
}

export default FileLoader;
