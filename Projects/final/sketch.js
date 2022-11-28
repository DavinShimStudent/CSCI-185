const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {

    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    

    drawGrid(canvasWidth, canvasHeight);


}

function draw(){
    clear();
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
     drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 21, '#afc272', '3f5364');
    landscape();
    platform(40, 300, 50);
    drawGrid(canvasWidth, canvasHeight);


};


function platform(leftX, rightX, y){
    fill('green');
    rect(leftX, y, rightX-leftX, (rightX-leftX)/16);
    fill('#3B2521')
    rect(leftX+(rightX-leftX)/16, y+(rightX-leftX)/16, (rightX-leftX)-(rightX-leftX)/8, (rightX-leftX)/16)
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

function makeCloud(cloudx, cloudy) {
    fill('hotpink')
    noStroke();
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
  } 
  function landscape() {
    
    makeCloud(100, 100);
    makeCloud(1200, 400);
    makeCloud(500, 200);
    makeCloud(1103, 150);
    makeCloud(720, 367);
    makeCloud(630, 210);
    makeCloud(403, 123);
    makeCloud(230, 370);
}

