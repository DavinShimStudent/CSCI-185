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

function heart(x, y, size){
beginShape();
vertex(x, y);
bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
endShape(CLOSE);
}
function drawCreature(positionX, positionY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    heart(positionX, positionY, size); //body

    
    fill(secondaryColor); //eye1
    circle(positionX-size*4/24, positionY+size/3.5, size/6);

    fill(secondaryColor); //eye2
    circle(positionX+size*4/24, positionY+size/3.5, size/6);

    line(positionX-size*4/24, positionY+size/1.7, positionX+size*4/24, positionY+size/1.7)
}