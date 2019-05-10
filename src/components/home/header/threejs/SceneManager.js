import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';

export default canvas => {

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,-10, 9);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const mousePosition = {
        x: 0,
        y: 0
    }

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("gray");

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        // const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        // renderer.setPixelRatio(DPR);
        // renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 
        return renderer;
    }

    function buildCamera(width, height) {
        const fieldOfView = 38;
        const nearPlane = 4;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, 2, nearPlane, farPlane);
        camera.position.z = 25;
        return camera;
        
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene)
        ];

        return sceneSubjects;
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const cameraa = buildCamera();
    const sceneSubjects = createSceneSubjects(scene);

    function update() {
        const elapsedTime = clock.getElapsedTime();
        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);
        // updateCameraPositionRelativeToMouse();
        checkRotation();
        renderer.render(scene, cameraa);
    }
//(x,y,z)
    function checkRotation(width, height){
        var x = cameraa.position.x,
          y = cameraa.position.y,
          z = cameraa.position.z;
        //   console.log(x, y, z)
        if (width < 9){
          cameraa.position.x = x * Math.cos(width) + z * Math.sin(width);
          cameraa.position.z = z * Math.cos(width) - x * Math.sin(width);
        } else if (width > 9){
          cameraa.position.x = x * Math.cos(width) + z * Math.sin(width);
          cameraa.position.z = z * Math.cos(width) - x * Math.sin(width);
        }
        cameraa.lookAt(scene.position); 
        // console.log(scene.position)

      }

    //   function updateCameraPositionRelativeToMouse(width, height) {
    //     if (width && height) {
    //         console.log(width)
    //         if (width < 7.6) {
    //             const y = -10;
    //             const x = 0;
    //             const z = width*5;
    //             console.log('left side', x, y, z)
    //             cameraa.position.set(0, -10, width*20);
    //         } else if (width > 7.6) {
    //             const y = -10;
    //             const x = 0;
    //             const z = width*5;
    //             console.log('right side', x, y, z)
    //             cameraa.position.set(x, y, z);
    //         } 
    //         // console.log('if upda', 50/width, -10, width*10, scene.background)
    //     } else {
    //         cameraa.lookAt(origin);
    //     }
    // }

    // function updateCameraPositionRelativeToMouse(width, height) {
    //     if (width && height) {
    //         console.log(width)
    //         if (width < 2) {
    //             cameraa.position.set(0, -10, 50/width);
    //         } else if (width > 2) {
    //             cameraa.position.set(0, -10, width*10);
    //         } else if (width > 9) {
    //             cameraa.position.set(0, -10, 100-width);
    //         }
    //         // console.log('if upda', 50/width, -10, width*10, scene.background)
    //     } else {
    //         cameraa.lookAt(origin);
    //     }
    // }

    // function onWindowResize() {
    //     const { width, height } = canvas;
        
    //     screenDimensions.width = width;
    //     screenDimensions.height = height;

    //     camera.aspect = width / height;
    //     camera.updateProjectionMatrix();
        
    //     renderer.setSize(width, height);
    // }

    // function onMouseMove(x, y) {
    //     mousePosition.x = x;
    //     mousePosition.y = y;
    //     console.log('onmousemove', mousePosition)
    // }

    //  function handler(e) {
    //     e = e || window.event;
    
    //     var pageX = e.pageX;
    //     var pageY = e.pageY;
    
    //     // IE 8
    //     if (pageX === undefined) {
    //         pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    //         pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    //     }
    
    //     console.log(pageX, pageY);
    // }
    
    // // attach handler to the click event of the document
    // if (document.attachEvent) document.attachEvent('onclick', handler);
    // else document.addEventListener('click', handler);

    return {
        update,
        // updateCameraPositionRelativeToMouse,
        checkRotation
        // onWindowResize,
        
    }
}