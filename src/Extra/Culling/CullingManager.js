import FrustumCuller from './FrustumCuller';
import Node from '../../Scene/Node';

/**
 * Culling manager
 *
 * @category Culling
 */
class CullingManager {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Cullers
         *
         * @type {Map<string, Culler>}
         * @private
         */
        this.cullers = new Map();

        // Add a Frustum Culler by default
        this.add('frustum', new FrustumCuller());
    }

    /**
     * Add a Culler instance
     *
     * @param {string} name Name to assign
     * @param {Culler} culler A Culler instance
     */
    add(name, culler) {
        this.cullers.set(name, culler);
    }

    /**
     * Enable/Disable a Culler
     *
     * @param {string} name Name of the Culler
     * @param {boolean} value True to enable, false to disable
     */
    enable(name, value) {
        const culler = this.cullers.get(name);
        if (culler) {
            culler.enable(value);
        }
    }

    /**
     * Execute culling
     *
     * @param {Node} node A Node instance
     * @param {Camera} camera A Camera instance
     * @return {Node[]} An array of Nodes
     */
    execute(rootNode, camera) {
        let i = 0;

        let newRootNode = rootNode;
        for (const culler of this.cullers.values()) {
            if (culler.isEnabled()) {
                const nodes = culler.execute(newRootNode, camera, i === 0);

                newRootNode = new Node('root');
                newRootNode.setChildren(nodes);
            }

            i += 1;
        }

        return newRootNode.getChildren();
    }
}

export default CullingManager;
