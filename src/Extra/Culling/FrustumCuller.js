import {Culler} from './Culler.js';
import {Frustum} from '../../Math/Frustum.js';

/**
 * Hide elements out of the view
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class FrustumCuller extends Culler
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Frustum: stock camera planes
         *
         * @type {Frustum}
         * @private
         */
        this.frustum = new Frustum();
    }

    /**
     * Execute culling
     *
     * @param {Scene} scene A Scene instance
     * @param {Camera} camera A Camera instance
     * @param {?boolean} overwriteCullingState Set to true to ignore previous culling values
     */
    execute(scene, camera, overwriteCullingState = false)
    {
        if (!this.enabled)
            return;

        // Compute frustum
        this.frustum.fromMatrix(camera.getViewProjectionMatrix());

        // Culling time!
        this.cullNode(scene.getRoot(), overwriteCullingState, true);
    }

    /**
     * Visit a node and his children
     *
     * @param {Node} node A Node instance to visit
     * @param {boolean} overwriteCullingState Set to true to ignore previous culling values
     * @param {boolean} isRootNode True for the root node
     */
    cullNode(node, overwriteCullingState = false, isRootNode = false)
    {
        if (node.isEnabled())
        {
            if (!overwriteCullingState && node.culled)
                return;

            // Update culling state
            node.culled = !isRootNode && !this.frustum.containsBox(node.getBoundingBox());

            // Continue visit
            if (!node.culled)
            {
                let children = node.getChildren();
                for (let i = 0; i < children.length; i++)
                    this.cullNode(children[i], overwriteCullingState, false);
            }
        }
    }
}
