import {ContextResource} from '../ContextResource.js';

/**
 * A texture
 *
 * @extends {ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class TextureInterface extends ContextResource
{
    /**
     * Constructor
     */
    constructor()
    {
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
     * Indicate if texture is ready
     *
     * @return {boolean} True if the texture is ready to be use
     */
    isReady()
    {
        return this.ready;
    }

    /**
     * Indicate if the texture use mip-mapping
     *
     * @return {boolean} True if the texture is mip-mapped
     */
    isMipmaped()
    {
        return this.mipmap;
    }

    /**
     * Indicate if the texture is repeated
     *
     * @return {boolean} True if the texture is repeated
     */
    isRepeated()
    {
        return false;
    }

    /**
     * Indicate if the texture is smoothed
     *
     * @return {boolean} True if the texture is smoothed
     */
    isSmoothed()
    {
        return false;
    }

    /**
     * Indicate if the texture must use mip-mapping
     *
     * @param {boolean} value True to use mip-mapping
     */
    useMipmap(value)
    {
        this.mipmap = value;
    }
}