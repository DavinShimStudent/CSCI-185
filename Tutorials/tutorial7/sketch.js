function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background('#456abc');
    // Exercise 1:
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(200, 100, 50, 'navy');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'hotpink');
    drawOval(300, 200, 100, 62.5, 'navy');
    drawOval(400, 200, 62.5, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);

}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {


    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, .75 * size);
    fill('teal');
    circle(centerX, centerY, .5 * size);
    fill('navy');
    circle(centerX, centerY, .25 * size);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    circle(centerX - .16 * size, centerY - .16 * size, .16 * size);
    circle(.16 * size + centerX, centerY - .16 * size, .16 * size);
}


//100, 400, 50 (original circle) 92, 392, 8(eye 1), 108, 392, 8(eye2)