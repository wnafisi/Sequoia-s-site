import SceneManager from './SceneManager';

export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas);
    console.log('sceneeemangaer',sceneManager)


    render();

    function createCanvas(document, container) {
    
        const canvas = document.createElement('canvas');  
        canvas.setAttribute("width", document.body.clientWidth)   
        canvas.setAttribute("height", document.body.clientWidth)   
        container.appendChild(canvas);
        console.log(canvas)
        return canvas;
    }

    // function bindEventListeners() {
    //     window.onresize = resizeCanvas;
    //     window.onmousemove = mouseMove;
    //     resizeCanvas();	
    // }

    // function resizeCanvas() {        
    //     canvas.style.width = '100%';
    //     canvas.style.height= '100%';
        
    //     canvas.width  = canvas.offsetWidth;
    //     canvas.height = canvas.offsetHeight;

    //     canvasHalfWidth = Math.round(canvas.offsetWidth/2);
    //     canvasHalfHeight = Math.round(canvas.offsetHeight/2);

    //     sceneManager.onWindowResize()
    // }

    // function mouseMove({screenX, screenY}) {
    //     sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
    // }

    function handler(e) {
        e = e || window.event;
        var pageX = e.pageX;
        var pageY = e.pageY;
        // IE 8
        if (pageX === undefined) {
            pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        // sceneManager.updateCameraPositionRelativeToMouse(pageX/100, pageY/100);
        sceneManager.checkRotation(pageX/10000, pageY/10000);
    }
    
    // attach handler to the click event of the document
    if (document.attachEvent) {
        document.attachEvent('mousemove', handler);
    } else {
        document.addEventListener('mousemove', handler);
    }

    function render() {
        requestAnimationFrame(render);
        sceneManager.update();
        
    }
}