var renderer, scene, camera, rotation = 0, sprites = [];

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(0, 4, 6);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Our first model!
    {
        var texture = new Lemon.Texture();
        texture.loadFromFile('../assets/images/box.jpg');

        var angle = Math.PI / 3.0;
        var radius = 2;

        for( var i = 0; i < 6; i++ )
        {
            var sprite = new Lemon.Sprite();
            sprite.setTexture(texture);
            sprite.setPosition(Math.cos(i * angle) * radius, 0, Math.sin(i * angle) * radius);
            scene.add(sprite);

            sprites.push(sprite);
        }
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    rotation += 0.001 * deltatime;
    camera.move(Math.cos(rotation) * 4, 4, 6);


    // Ask sprite to look at camera.
    var viewMatrix = camera.getViewMatrix();
    for( var i = 0; i < sprites.length; i++ )
        sprites[i].lookAt(camera.getPosition(), [viewMatrix[1], viewMatrix[5], viewMatrix[9]]);

    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(30, 30, 30));
    renderer.render(scene, camera);
    renderer.display();
}
