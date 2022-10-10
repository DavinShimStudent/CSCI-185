let circleCount = 0;
let yCor = 200;
function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    while (circleCount < 5){
        
        drawCircle(100, yCor, 50)
        yCor += 50

    }

    drawGrid(canvasWidth, canvasHeight);
}

function drawCircle(centerX, centerY, size){
    circle(centerX, centerY, size);
    circleCount += 1;
}
