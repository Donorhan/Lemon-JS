import Node from '../Scene/Node';

/**
 * A drawable element
 *
 * @category Drawables
 * @extends {Node}
 */
class Drawable extends Node {
    /**
     * Draw the element
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     */
    draw(renderTarget) { }

    /**
     * Visit the node and his children
     *
     * @param {RenderTarget} renderTarget Renderer who called this method
     * @return {boolean} True if visit was successful, otherwise false
     */
    visit(renderTarget) {
        if (!super.visit(renderTarget)) {
            return false;
        }

        this.draw(renderTarget);
        return true;
    }
}

export default Drawable;
