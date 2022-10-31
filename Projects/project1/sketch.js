const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = canvasWidth / 2
let y = canvasHeight / 2
let width = 100

const t1 = {
    x: 40,
    y: 40,
    width: 40,
    speed: 5,
    color: 'hotpink'
};
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);


    draw()

    stars()




}

function draw(){
    
    drawCreature(294, 314, 91, '#648d8e', '#afc272');
    drawCreature(199, 123, 122, '#3f5364', '#bfdc65');

    drawCreature(x, y, 100, '#afc272', '3f5364');
    if(t1.x > canvasWidth+ t1.width/2){
        t1.x = 100
    }
    else{

    
    t1.x += t1.speed;}


    drawLandscapeObject(t1.x, t1.y, t1.width);
    
    drawLandscapeObject(200, 495, 60);
    drawLandscapeObject(489, 295, 80);


}

async function stars(){
    for(let i = 0; i < 1000; i++){
        strokeWeight(0);
        fill('white');
        circle(Math.random() * canvasWidth, Math.random() * canvasHeight, Math.random() * 2 + .5);}}
// replace this function with YOUR creature!

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 10;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 10;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 10;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 10;
    } else if (ev.code == 'Space'){ clear();}
    // redraw circle:
    clear();
    
    drawCreature(x, y, width, '#afc272', '3f5364');
    stars();
    
    
    // message
   displayMessage();
}


function drawLandscapeObject(treeX, treeY, treeSize){
    fill('brown');
    rect(treeX, treeY, treeSize, treeSize * 3);

    fill('green');
    circle(treeX + treeSize/2, treeY - treeSize/2, treeSize * 1.5)
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

function mouseClicked() {
    drawLandscapeObject(mouseX, mouseY, 30);
}

document.addEventListener('keydown', moveController);