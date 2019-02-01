import ContextResource from '../ContextResource';

/**
 * A texture
 *
 * @category Textures
 * @extends {ContextResource}
 */
class TextureInterface extends ContextResource {
    /**
     * Constructor
     */
    constructor() {
        super();

        /**
         * State
         *
         * @type {boolean}
         * @protected
         */
        this.ready = false;

        /**
         * Mipmap state
         *
         * @type {boolean}
         * @protected
         */
        this.mipmap = true;
    }

    /**
     * Indicates if texture is ready
     *
     * @return {boolean} True if the texture is ready to be use
     */
    isReady() {
        return this.ready;
    }

    /**
     * Indicates if the texture use mip-mapping
     *
     * @return {boolean} True if the texture is mip-mapped
     */
    isMipmaped() {
        return this.mipmap;
    }

    /**
     * Indicates if the texture is repeated
     *
     * @return {boolean} True if the texture is repeated
     */
    isRepeated() {
        return false;
    }

    /**
     * Indicates if the texture is smoothed
     *
     * @return {boolean} True if the texture is smoothed
     */
    isSmoothed() {
        return false;
    }

    /**
     * Indicates if the texture must use mip-mapping
     *
     * @param {boolean} value True to use mip-mapping
     */
    useMipmap(value) {
        this.mipmap = value;
    }
}

export default TextureInterface;
