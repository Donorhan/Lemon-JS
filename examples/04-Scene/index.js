import {
    Camera, Color, Geometry, Material, Mesh, PointLight, ProgramLibrary, RenderCanvas, Scene, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.cube1 = null;
        this.cube2 = null;
        this.cube3 = null;
        this.geometry = null;
        this.rotation = 0;
        this.scene = null;

        this.init();
    }

    init() {
        ProgramLibrary.loadFromFile('PhongShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_LIGHT']);

        this.renderer = new RenderCanvas('simulation');

        this.camera = new Camera();
        this.camera.move(0, 4, 8);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // The root cube
        this.cube1 = this.createCube([1.0, 0.0, 0.0]);
        this.scene.add(this.cube1);

        // Cube 2: child of cube 1
        this.cube2 = this.createCube([0.0, 1.0, 0.0]);
        this.cube2.setPosition(2, 0, 0);
        this.cube1.addChild(this.cube2);

        // Cube 3: child of cube 2
        this.cube3 = this.createCube([0.0, 0.0, 1.0]);
        this.cube3.setPosition(0, 2, 0);
        this.cube2.addChild(this.cube3);

        // Add a light
        this.light = new PointLight();
        this.light.setPosition(0, 2, 0);
        this.scene.add(this.light);
    }

    createCube(color) {
        if (!this.geometry) {
            this.geometry = Geometry.createCube(0.5, 0.5, 0.5);
        }

        const material = new Material();
        const pass = material.createPass();
        pass.add('material.ambient', Type.Float, color);
        pass.add('material.diffuse', Type.Float, color);
        pass.add('material.specular', Type.Float, [0.7, 0.7, 0.7]);
        pass.add('material.shininess', Type.Float, 38.4);

        const cube = new Mesh();
        cube.setMaterial(material);
        cube.setGeometry(this.geometry);
        cube.setProgram(ProgramLibrary.get('PhongShader'));

        return cube;
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.1 * deltatime;
        this.cube1.setRotation(0, this.rotation, 0);
        this.cube2.setRotation(this.rotation, 0, 0);
        this.cube3.setRotation(0, 0, Math.cos(this.rotation / 100.0) * 360);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
