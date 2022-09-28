function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
     drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 21, '#afc272', '3f5364');
    
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature(positionX, positionY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    rect(positionX, positionY, size, size); //body

    fill(secondaryColor);  //hand1
    circle(positionX+1.25*size, positionY+.5*size, size*.5);

    fill(secondaryColor); //hand2
    circle(positionX, positionY+.5*size, size*.5);
    
    fill('black'); //eye1
    circle(positionX+size*11/12, positionY+size/3, size/6);

    fill('black'); //eye2
    circle(positionX+size*7/12, positionY+size/3, size/6);
}
// define your drawCreature function here:

