import * as THREE from 'three'

export default scene => {    
    // Create an empty scene
    const group = new THREE.Group();

        //BEGInning
        // Create the canvas with a renderer
        // var renderer = new THREE.WebGLRenderer({antialias: true});

        // // Specify the size of the canvas
        // renderer.setSize( window.innerWidth, window.innerHeight );

        // // Add the canvas to the DOM
        // document.body.appendChild( renderer.domElement );
        /**
        * Image
        **/
        // Create a texture loader so we can load our image file
        var loader = new THREE.TextureLoader();

        // Load an image file into a custom material
        var material = new THREE.MeshLambertMaterial({
        map: loader.load('https://i.imgur.com/aueBjie.jpg')
        });

        // create a plane geometry for the image with a width of 10
        // and a height that preserves the image's aspect ratio
        // var geometry = new THREE.PlaneGeometry(7, 14);
        var geometry = new THREE.BoxGeometry(14, 7, 7);


        // combine our image geometry and material into a mesh
        var mesh = new THREE.Mesh(geometry, material);

        // set the position of the image mesh in the x,y,z dimensions
        mesh.position.set(0,0,0)

        // add the image to the scene
        scene.add(mesh);

    

    // Create a Cube Mesh with basic material
    var geometry = new THREE.BoxGeometry( 18, 11, 1 );
    var material = new THREE.MeshLambertMaterial( { color: "yellow" } );
    var cube = new THREE.Mesh( geometry, material );

    // Create a Cube Mesh with basic material
    var geometry2 = new THREE.BoxGeometry( 1, 11, 18 );
    var material2 = new THREE.MeshLambertMaterial( { color: "blue" } );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    

    // Add cube to Scene
    group.add( cube );
    group.add( cube2 );
    // scene.add(group);

    const speed = 0.0;

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;
    }

    function updateRotationSpeed(inputSpeed) {
        const speed = inputSpeed;
    }

    return {
        update,
        updateRotationSpeed
    }
}