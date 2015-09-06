var renderer, scene, camera, cube, rotation = 0;

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(3, 3, 3);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Our first mesh!
    {
        // Load default shader.
        Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_TEXTURE', 'USE_LIGHT']);

        // Texture to apply.
        var boxTexture = new Lemon.Texture();
        boxTexture.loadFromFile('../assets/images/box.jpg');

        // Create material.
        var material = new Lemon.Material();
        var pass     = material.createPass();
        pass.add('texture', Lemon.Type.Texture2D, boxTexture);
        pass.add("material.ambient", Lemon.Type.Float, [0.0, 0.0, 0.0]);
        pass.add("material.diffuse", Lemon.Type.Float, [0.55, 0.55, 0.55]);
        pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
        pass.add("material.shininess", Lemon.Type.Float, 38.4);

        // Create the cube.
        cube = new Lemon.Mesh();
        cube.setMaterial(material);
        cube.setGeometry(Lemon.Geometry.createCube(0.5, 0.5, 0.5));
        cube.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
        scene.add(cube);
    }

    // Add a light
    {
        var light = new Lemon.PointLight();
        light.setPosition(0, 3, 0);
        scene.add(light);
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    rotation += 0.1 * deltatime;
    cube.setRotation(rotation, rotation, rotation);
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(30, 30, 30));
    renderer.render(scene, camera);
    renderer.display();
}
