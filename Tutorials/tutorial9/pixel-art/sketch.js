const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
]; 
const L = [[0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 2, 3]
];   
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    // first 6 rows of frank


    // first 6 rows of the heart
    drawPixelArt(heart, 20, 20, 15, 'hotpink', 'black', 'white');
    drawPixelArt(frank, 120, 250, 12, 'blue', 'green', 'white');
    drawPixelArt(heart, 420, 250, 8, 'red', 'purple', 'black');
    drawPixelArt(heart, 55, 415, 6, 'yellow', 'black', 'white');
    drawPixelArt(heart, 350, 135, 5, 'hotpink', 'black', 'white');
    drawPixelArt(frank, 315, 380, 15, 'hotpink', 'black', 'white');
    drawPixelArt(frank, 420, 10, 10, 'hotpink', 'black', 'white');
    drawPixelArt(L, 700, 500, 15, 'hotpink', 'black', 'green');
    }


function drawRow (row, topX, topY, pixelWidth, color1, color2, color3) {
    let palette = ['transparent', color1, color2, color3];
    for (let i = 0; i < row.length; i++) {
        const color = palette[row[i]];
        fill(color);
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
    }
}
//'hotpink', 'black', 'white'
function drawPixelArt(grid, topX, topY, pixelWidth, color1, color2, color3){
    for (let i = 0; i < grid.length; i++) {
        drawRow(grid[i], topX, topY, pixelWidth, color1, color2, color3);
        topY += pixelWidth
    }
}
