var renderer, scene, camera, mesh, rotation = 0;

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

    // The mesh.
    {
        // Load default shader.
        Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag');

        // Create material.
        var material = new Lemon.Material();
        var pass     = material.createPass();
        pass.add("material.ambient", Lemon.Type.Float, [1.0, 1.0, 1.0]);
        pass.add("material.diffuse", Lemon.Type.Float, [0.55, 0.55, 0.55]);
        pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
        pass.add("material.shininess", Lemon.Type.Float, 38.4);

        // Create the mesh.
        mesh = new Lemon.Mesh();
        mesh.setMaterial(material);
        mesh.setGeometry(createGeometry());
        mesh.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
        scene.add(mesh);
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
    mesh.setRotation(rotation, rotation, rotation);
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(30, 30, 30));
    renderer.render(scene, camera);
    renderer.display();
}

function createGeometry()
{
    var geometry = Lemon.Geometry.createCube(0.5, 0.5, 0.5)

    // Set colors
    var colors = new Float32Array([
        1, 0, 0, 1,
        0, 0, 1, 1,
        0, 1, 1, 1,
        0, 1, 0, 1,
             
        1, 0, 0, 1,
        1, 0, 1, 1,
        0, 1, 1, 1,
        1, 1, 0, 1,
             
        0, 1, 0, 1,
        0, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 0, 1,
             
        0, 0, 1, 1,
        0, 1, 0, 1,
        1, 1, 0, 1,
        1, 0, 0, 1,
             
        0, 0, 1, 1,
        0, 1, 0, 1,
        1, 1, 0, 1,
        1, 0, 0, 1,
             
        0, 0, 1, 1,
        0, 1, 1, 1,
        1, 1, 0, 1,
        1, 0, 1, 1
    ]);
    geometry.setColors(colors);

    return geometry;
}
