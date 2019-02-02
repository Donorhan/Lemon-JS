Lemon-JS
======
An accessible rendering engine in Javascript.

Note: The goal of this project is to stay simple to make people understand and experiment with 3D rendering

### Demonstrations
 - [A simple cube](https://www.dorhan.fr/Demos/Lemon/exemples/01-Cube)
 - [Billboard sprites](https://www.dorhan.fr/Demos/Lemon/exemples/02-Sprites)
 - [A 3D model](https://www.dorhan.fr/Demos/Lemon/exemples/03-Model)
 - [Scene management](https://www.dorhan.fr/Demos/Lemon/exemples/04-Scene)
 - [Lights](https://www.dorhan.fr/Demos/Lemon/exemples/05-Lights)
 - [Make blob using shaders](https://www.dorhan.fr/Demos/Lemon/exemples/06-Shaders)
 - [Post processing stack](https://www.dorhan.fr/Demos/Lemon/exemples/07-PostProcessing)

### Features
- Access to the low level API
- Rendering queues and commands system
- Lights support
- Shaders
- Scene management (nodes, hierrachy, …)
- Separated "engine" logic from the low level part
- Post processing
- Loading models, sprites, videos and custom mesh

### Todo
- Fonts support
- Advanced lighting
- Batching

### Installation
- Download [the latest version](https://github.com/Donorhan/Lemon-JS/releases) of LemonJS or install it from NPM
- Copy "shaders" folder to your project to get default shaders
- Enjoy!

### The Hello world of 3D : A cube

```javascript
// Use the ProgramLibrary helper to build a shader with lights and texture support
ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_LIGHT', 'USE_TEXTURE']);

// Create a new renderer using HTML identifier
const renderer = new RenderCanvas("simulation");

// A camera to draw the scene
const camera = new Camera();
camera.move(3, 3, 3);
camera.setViewport(0, 0, renderer.getWidth(), renderer.getHeight());

// Create a scene where we can add sprites, lights, objects, …
const scene = new Scene();

// Now we can create our first cube
const cube = new Mesh(
    Geometry.createCube(0.5, 0.5, 0.5),
    Material.create('default'),
    ProgramLibrary.get('DefaultShader'),
);
scene.add(cube);

// A light to see something
const light = new PointLight();
light.setPosition(0, 3, 0);
scene.add(light);
```

```javascript
function applicationLoop(deltatime) {
    // Update scene …
    scene.update(deltatime);

    // … then draw it!
    renderer.clear(new Color(30, 30, 30));
    renderer.render(scene, camera);
    renderer.display();
}
```

The result [can be found here](https://www.dorhan.fr/Demos/Lemon/exemples/01-Cube).

### How to contribute
- Clone this repository
- `npm install` from the folder
- `npm run dev` (developement) or `npm run build` (production)
- Enjoy!

### License
[MIT](https://github.com/Donorhan/Lemon-JS/blob/master/LICENSE.md)
