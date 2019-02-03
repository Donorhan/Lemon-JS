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

        /**
         * An array with visible nodes
         *
         * @type {Node[]}
         * @private
         */
        this.nodes = [];
    }

    /**
     * Execute culling
     *
     * @param {Node} node A Node instance
     * @param {Camera} camera A Camera instance
     * @return {Node[]} An array of visibles Node
     */
    execute(node, camera) {
        // Compute frustum
        this.frustum.fromMatrix(camera.getViewProjectionMatrix());

        // Culling time!
        this.nodes = [];
        this.cullNode(node, true);

        return this.nodes;
    }

    /**
     * Visits a node and his children
     *
     * @param {Node} node A Node instance to visit
     * @param {boolean} isRootNode True for the root node
     */
    cullNode(node, isRootNode = false) {
        if (node.isEnabled()) {
            const culled = !isRootNode && !this.frustum.containsBox(node.getBoundingBox());

            // Continue the visit
            if (!culled) {
                // Preserve the node in the scene
                if (!isRootNode) {
                    this.nodes.push(node);
                }

                const children = node.getChildren();
                children.forEach((child) => {
                    this.cullNode(child, false);
                });
            }
        }
    }
}

export default FrustumCuller;
