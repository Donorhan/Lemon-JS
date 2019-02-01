import {
    Camera, Color, DrawingMode, DirectionalLight, Geometry, Material, Mesh, PointLight, ProgramLibrary, RenderCanvas, Scene, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.cube = null;
        this.lights = [];
        this.rotation = 0;
        this.scene = null;
        this.time = 0;

        this.init();
    }

    init() {
        ProgramLibrary.load('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_LIGHT']);

        this.renderer = new RenderCanvas('simulation');

        this.camera = new Camera();
        this.camera.move(0, 3, 9);
        this.camera.lookAt(0, 1.7, 0);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // Scene elements
        this.createCube();
        this.createLights();
        this.createWalls();

        // Add a light
        this.light = new PointLight();
        this.light.setPosition(0, 2, 0);
        this.scene.add(this.light);
    }

    createCube() {
        const cubeMaterial = new Material();
        const pass = cubeMaterial.createPass();
        pass.add('material.ambient', Type.Float, [0.05, 0.05, 0.05]);
        pass.add('material.diffuse', Type.Float, [0.5, 0.5, 0.5]);
        pass.add('material.specular', Type.Float, [0.7, 0.7, 0.7]);
        pass.add('material.shininess', Type.Float, 38.4);


        this.cube = new Mesh();
        this.cube.setPosition(0, 2, 0);
        this.cube.setMaterial(cubeMaterial);
        this.cube.setGeometry(Geometry.createCube(0.5, 0.5, 0.5));
        this.cube.setProgram(ProgramLibrary.get('DefaultShader'));
        this.scene.add(this.cube);
    }

    createLights() {
        const sunLight = new DirectionalLight();
        sunLight.setDirection(0, -1, -0.5);
        this.scene.add(sunLight);

        // Some point lights
        for (let i = 0; i < 3; i += 1) {
            const light = new PointLight();
            light.setPosition(0, 4, 3);

            if (i === 0) {
                light.setAmbientColor(255, 0, 0);
                light.setDiffuseColor(255, 0, 0);
            } else if (i === 1) {
                light.setAmbientColor(0, 255, 0);
                light.setDiffuseColor(0, 255, 0);
            } else if (i === 2) {
                light.setAmbientColor(0, 0, 255);
                light.setDiffuseColor(0, 0, 255);
            }

            this.scene.add(light);
            this.lights.push(light);
        }
    }

    createWalls() {
        const program = ProgramLibrary.get('DefaultShader');

        // Shared geometry and material.
        const wallGeometry = Geometry.createRectangle(5.0, 5.0);
        const wallMaterial = new Material();
        const pass = wallMaterial.createPass();
        pass.drawingMode = DrawingMode.TrianglesStrip;
        pass.add('material.ambient', Type.Float, [0.05, 0.05, 0.05]);
        pass.add('material.diffuse', Type.Float, [0.55, 0.55, 0.55]);
        pass.add('material.specular', Type.Float, [0.7, 0.7, 0.7]);
        pass.add('material.shininess', Type.Float, 200);

        // Ground
        const ground = new Mesh();
        ground.setRotation(-90, 0, 0);
        ground.setMaterial(wallMaterial);
        ground.setProgram(program);
        ground.setGeometry(wallGeometry);
        this.scene.add(ground);

        // Back wall
        const backWall = new Mesh();
        backWall.setPosition(0, 2.5, -5);
        backWall.setMaterial(wallMaterial);
        backWall.setProgram(program);
        backWall.setGeometry(wallGeometry);
        this.scene.add(backWall);

        // Left wall
        const leftWall = new Mesh();
        leftWall.setRotation(0, 90, 0);
        leftWall.setPosition(-5, 2.5, 0);
        leftWall.setMaterial(wallMaterial);
        leftWall.setProgram(program);
        leftWall.setGeometry(wallGeometry);
        this.scene.add(leftWall);

        // Right wall
        const rightWall = new Mesh();
        rightWall.setRotation(0, -90, 0);
        rightWall.setPosition(5, 2.5, 0);
        rightWall.setMaterial(wallMaterial);
        rightWall.setProgram(program);
        rightWall.setGeometry(wallGeometry);
        this.scene.add(rightWall);
    }

    render(deltatime) {
        // Update logic
        this.time += deltatime / 100;
        if (this.time > 100) {
            this.time = 0;
        }

        // Move lights
        for (let i = 0; i < this.lights.length; i += 1) {
            this.lights[i].setPosition(Math.cos(this.time / 8.0 + (i * 2)) * 3, Math.sin(this.time / 8.0 + i), Math.sin(this.time / 8.0 + (i * 4)) * 3);
        }

        // Rotate cube
        this.rotation += 0.2 * deltatime;
        this.cube.setRotation(45, this.rotation, 45);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(230, 230, 230));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
