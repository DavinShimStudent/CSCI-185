const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(117, 314, 100, '#afc272', '3f5364');

    drawGrid(canvasWidth, canvasHeight);

 
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Click or drag your mouse.", canvasWidth/2, canvasHeight/2);
    noFill();
}

// replace this function with YOUR creature!


function mouseClicked() {
    drawCreature(mouseX, mouseY, Math.random()* 50 + 50, '#afc272', '3f5364');
}

function mouseDragged() {
    drawCreature(mouseX, mouseY, Math.random()* 50 + 50, '#afc272', '3f5364');
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