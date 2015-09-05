var renderer, scene, camera, cubeMesh, rotation = 0, time = 0, customProgram;

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(0, 3.0, 6);
    camera.lookAt(0, 1.7, 0);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Load default shader.
    Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_LIGHT']);

    // Create 3D scene
    {
        // Shared material.
        var cubeMaterial = new Lemon.Material();
        var pass         = cubeMaterial.createPass();
        pass.add("material.ambient", Lemon.Type.Float, [0.05, 0.05, 0.05]);
        pass.add("material.diffuse", Lemon.Type.Float, [0.5, 0.5, 0.5]);
        pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
        pass.add("material.shininess", Lemon.Type.Float, 38.4); 

        // Shaders/program to use.
        customProgram = new Lemon.Program();
        customProgram.loadFromFiles('../assets/shaders/effect2-VS.txt', '../assets/shaders/effect2-FS.txt');

        // Cubes.
        cubeMesh = new Lemon.Mesh();
        cubeMesh.setPosition(0, 2, 0);
        cubeMesh.setMaterial(cubeMaterial);
        cubeMesh.setGeometry(Lemon.Geometry.createCube(0.5, 0.5, 0.5));
        cubeMesh.setProgram(customProgram);
        scene.add(cubeMesh);
    }

    // Add lights
    {
        // Ambient light (the sun)
        var light = new Lemon.DirectionalLight();
        light.setDirection(0, -1, -0.5);
        scene.add(light);
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    time += deltatime / 100;
    if( time > 100 )
        time = 0;

    // Rotate cube.
    rotation += 0.05 * deltatime;
    cubeMesh.setRotation(45, rotation, 45);

    renderer.getRenderAPI().setUniform(customProgram, 'time', Lemon.Type.Float, time);

    // Update scene.
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(230, 230, 230));
    renderer.setActiveTask(renderer.createTask());
    renderer.render(scene, camera);
    renderer.display();
}
