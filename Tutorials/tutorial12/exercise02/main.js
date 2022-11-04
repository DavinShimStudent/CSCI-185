const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawShape(100, 100, 150, '#db5461', '#102e4a');
drawShape(200, 200, 75, '#102e4a', '#8093f1');
drawShape(100, 325, 100, '#8093f1', '#7fb285');
drawShape(250, 375, 125, '#7fb285', '#0bc9cd');
drawShape(450, 200, 250, '#0bc9cd', '#db5461');

    drawGrid(canvasWidth, canvasHeight);
}

function drawShape(x, y, bigdiameter, bigcolor, smallcolor){
    fill(bigcolor);
    circle(x, y, bigdiameter);

    fill(smallcolor);
    circle(x, y, bigdiameter/2);
    
}

// function definition goes here:
