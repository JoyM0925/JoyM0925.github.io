// 2D arrays basics
// Joy Min
// April 2, 2025

let grid =  
[ [0,   60,  120, 180, 240],
  [240, 180, 120, 60,  0],
  [0,   200, 0,   200, 0],
];

let squareSize = 10;
const NUMS_ROWS = 3;   const NUMS_COLS = 5;

function setup() {
  createCanvas(NUMS_COLS * squareSize, NUMS_ROWS * squareSize);
}

function renderGrid(){
  // interpret the information in to the 2D array, and draw a grid of colores on the screen to reflect it.
  for (let y = 0; y < NUMS_ROWS; y++){
    for (let x = 0; x < NUMS_COLS; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function getCurrentY(){
  // determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}

function getCurrentX(){
  // determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function mousePressed(){
  // determine current tile to a random greyscale value
  let x = getCurrentX();
  let y = getCurrentY();
  grid[y][x] = floor(random(255));
}

function draw() {
  background(220);
  renderGrid();

  //temporary helper
  fill(255, 0, 0);
  text(floor(mouseX/squareSize), mouseX, mouseY);
}
