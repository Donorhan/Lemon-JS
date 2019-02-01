import Culler from './Culler';
import Frustum from '../../Math/Frustum';

/**
 * Hide elements out of the view
 *
 * @category Culling
 */
class FrustumCuller extends Culler {
    /**
     * Constructor
     */
    constructor() {
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
    execute(scene, camera, overwriteCullingState = false) {
        if (!this.enabled) {
            return;
        }

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
    /* eslint no-param-reassign: ["error", { "props": false }] */
    cullNode(node, overwriteCullingState = false, isRootNode = false) {
        if (node.isEnabled()) {
            if (!overwriteCullingState && node.culled) {
                return;
            }

            // Update culling state
            node.culled = !isRootNode && !this.frustum.containsBox(node.getBoundingBox());

            // Continue visit
            if (!node.culled) {
                const children = node.getChildren();
                for (let i = 0; i < children.length; i += 1) {
                    this.cullNode(children[i], overwriteCullingState, false);
                }
            }
        }
    }
}

export default FrustumCuller;
