import * as THREE from 'three'

export default scene => {    

    const lightIn = new THREE.PointLight("#4CAF50", 5);
    lightIn.position.set(-13, -11, 7);
    scene.add(lightIn);

    // const lightOut = new THREE.PointLight("#4CAF50", 10);
    // lightOut.position.set(10,50,180);
    // scene.add(lightOut);

    const lightIn2 = new THREE.PointLight("#4CAF50", 5);
    lightIn2.position.set(13,11,-7);
    scene.add(lightIn2);

    const rad = 80;

    function update(time) {
        // const x = rad * Math.sin(time*0.2)
        const x = time
        // lightOut.position.x = x;
    }

    return {
        update
    }
}