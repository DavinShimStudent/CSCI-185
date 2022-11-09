const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:



    drawGrid(canvasWidth, canvasHeight);
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn
}


// function definition goes here:
function drawElmo(x, y, size, color, hasNose){
    fill(color);
    circle(x, y, size);
    fill('white');
    circle(x+size/11, y-size/11, size/6);
    fill('white');
    circle(x-size/11, y-size/11, size/6);
    fill('black');
    circle(x+size/11, y-size/11, size/24);
    fill('black');
    circle(x-size/11, y-size/11, size/24);
    if(hasNose == true){
        fill('#db5461');
ellipse(x, y, size*.7/5, size/5); 
    }
}