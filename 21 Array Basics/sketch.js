// 2D Array Basics
// Joy Min
// Nov 3, 2025


// 0 (black)     255 (white)
// grid is 5 x 4 in dimension

let grid = [];

let rows = 10; // y
let cols = 10; // x
let mode = 0; // store a variable called mode, if it is odd number then square flip, even -> cross flip; it starts with 0 -> cross number
let squareSize = 100;

function setup() { 
  createCanvas(cols*squareSize, rows*squareSize);
  randomGrid();
}

function draw() {
  background(220);
  renderGrid();

  // overlays
  if (keyIsDown(SHIFT)){
    overlayOfFlip(getCurrentX(), getCurrentY()) // overlay of single title 
  }
  else{
    if (mode%2 == 1){ // odd -> square 
      overlayOfSquareflip(getCurrentX(), getCurrentY()) // overlay of square 
    }
    else{ // even -> cross 
      overlayOfCrossflip(getCurrentX(), getCurrentY()) // overlay of cross 
    }
  }

  if (checkWiWHite() || checkWiBlack()) { // check if the whole screen is black or white
    fill(51, 153, 255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

function renderGrid(){
  // interpret the information in the 2D array, and draw
  // a grid of square on the screen to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}

function keyPressed(){
  if (key === " "){ // once the space bar pressed, the variable mode ++
    mode++;
  }
}

function mousePressed(){
  // Flip the current tile 
  // Only do this if the mouse is on canvas 
  let x = getCurrentX();
  let y = getCurrentY();

  // flip
  if (keyIsDown(SHIFT)){ // single title flip
    flip(x,y)
  }
  else{
    if (mode%2 == 1){ //odd -> square flip
      squareFlip(x,y) // overlay of square
    }
    else{ // even -> cross 
      crossflip(x,y); // overlay of cross
    }
  }
}

function getCurrentX(){
  // Determine current col of mouse position 
  let constrainedX = constrain(mouseX, 0, width-1);
  return (floor(constrainedX/squareSize));
}

function getCurrentY(){
  // Determine current row of mouse position 
  let constrainedY = constrain(mouseY, 0, height-1);
  return (floor(constrainedY/squareSize));
}

function flip(x, y){
  // Takes a tile at x, y and invert its value 
  if(grid[y][x] === 0){
    grid[y][x] = 255;
  }
  else{
    grid[y][x] = 0;
  }
}

function overlayOfFlip(x,y){
  if(x >= 0 && x < cols && y >= 0 && y < rows){ // check the boundary
    if (grid[y][x] === 255){ // if the tile is white
      fill(255, 204, 204); // cover with light pink
      square(x * squareSize, y * squareSize, squareSize);
    }
    else { // if it is black
      fill(255, 104,104); // cover with dark pink
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function crossflip(x, y){
  //IF THEY EXIST:
  //flip our NSEW neighbours (cross pattern)
  flip(x, y)
  if(x+1 < cols) flip(x+1,y);
  if(y-1 >= 0) flip(x, y-1);
  if(x-1 < cols) flip(x-1,y);
  if(y+1 >= 0) flip(x, y+1);
}

function overlayOfCrossflip(x,y){
  // center
  if(x >= 0 && x < cols && y >= 0 && y < rows){
    if (grid[y][x] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square(x * squareSize, y * squareSize, squareSize);
  }

  // left
  if (x-1 >= 0 && x-1 < cols && y >= 0 && y < rows){
    if (grid[y][x-1] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square((x-1) * squareSize, y * squareSize, squareSize);
  }

  // right
  if (x+1 >= 0 && x+1 < cols && y >= 0 && y < rows){
    if (grid[y][x+1] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square((x+1) * squareSize, y * squareSize, squareSize);
  }

  // up
  if (x >= 0 && x < cols && y-1 >= 0 && y-1 < rows){
    if (grid[y-1][x] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square(x * squareSize, (y-1) * squareSize, squareSize);
  }

  // down
  if (x >= 0 && x < cols && y+1 >= 0 && y+1 < rows){
    if (grid[y+1][x] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square(x * squareSize, (y+1) * squareSize, squareSize);
  }
}

function squareFlip(x,y){ 
  flip(x, y) // left down
  if(x+1 < cols) flip(x+1,y); // right down
  if(y-1 >= 0) flip(x, y-1); // left up
  flip(x+1, y-1) // right up
}

function overlayOfSquareflip(x,y){
  // left dowwn
  if(x >= 0 && x < cols && y >= 0 && y < rows){
    if (grid[y][x] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square(x * squareSize, y * squareSize, squareSize);
  }

  // right up
  if(x+1 >= 0 && x+1 < cols && y-1 >= 0 && y-1 < rows){
    if (grid[y-1][x+1] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square((x+1) * squareSize, (y-1) * squareSize, squareSize);
  }

  // right down
  if(x+1 >= 0 && x+1 < cols && y >= 0 && y < rows){
    if (grid[y][x+1] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square((x+1) * squareSize, y * squareSize, squareSize);
  }

  // left up
  if(x >= 0 && x < cols && y-1 >= 0 && y-1 < rows){
    if (grid[y-1][x] === 255){
      fill(255, 204, 204);
    } else{
      fill(255, 104,104);
    }
    square(x * squareSize, (y-1) * squareSize, squareSize);
  }
}


function checkWiWHite() { 
  let colorW = 255;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // check if each of the tile is white or not
      if (grid[y][x] !== colorW) {
        return false;
      }
    }
  }
  return true;
}

function checkWiBlack() {
  let colorB = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // check if each of the tile is black or not
      if (grid[y][x] !== colorB) {
        return false;
      }
    }
  }
  return true;
}

function randomGrid(){
  for (let y = 0; y < rows; y++) {
    grid[y] = []; // push the # of rows of arrays into the grid[];
    for (let x = 0; x < cols; x++) {
      if(random(1)<= 0.5){ // there is 50% of chance push the number(0 or 255)into the []
        grid[y][x] = 0; // black
      }
      else {
        grid[y][x] = 255; // white
      }
    }
  }
}



// let grid = [
  
//   [0,     0,   0,  255,   0],
//   [255,   0, 255,    0, 255],
//   [255, 255,   0,  255, 255],
//   [0,   255,   0,    0,   0]

// ];

// let rows = grid.length; // y
// let cols = grid[0].length; // x

// let squareSize = 100;

// function setup() { 
//   createCanvas(cols*squareSize, rows*squareSize);
// }

// function draw() {
//   background(220);
//   renderGrid();
//   if (checkWiWHite() || checkWiBlack()) {
//     fill(51, 153, 255);
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     text("You Win!", width / 2, height / 2);
//   }
// }

// function renderGrid(){
//   // interpret the information in the 2D array, and draw
//   // a grid of square on the screen to reflect it.
//   for (let y = 0; y < rows; y++){
//     for (let x = 0; x < cols; x++){
//       let fillColor = grid[y][x];
//       fill(fillColor);
//       square(x*squareSize,y*squareSize,squareSize);
//     }
//   }
// }

// function mousePressed(){
//   // Flip the current tile 
//   // Only do this if the mouse is on canvas 
//   let x = getCurrentX();
//   let y = getCurrentY();

//   // ALWAYS: flip the "focus tile"
//   flip(x, y);
// }

// function getCurrentX(){
//   // Determine current col of mouse position 
//   let constrainedX = constrain(mouseX, 0, width-1);
//   return (floor(constrainedX/squareSize));
// }

// function getCurrentY(){
//   // Determine current row of mouse position 
//   let constrainedY = constrain(mouseY, 0, height-1);
//   return (floor(constrainedY/squareSize));
// }

// function flip(x, y){
//   // Takes a tile at x, y and invert its value 
//   if(grid[y][x] === 0){
//     grid[y][x] = 255;
//   }
//   else{
//     grid[y][x] = 0;
//   }
// }

// function randomGrid(){
//   if (random(1) < 0.5){
//     grid[y][x] = color(0);
//   }
//   else{
//     grid[y][x] = color(255);
//   }
// }

// function checkWiWHite() {
//   let colorW = 255;
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       if (grid[y][x] !== colorW) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function checkWiBlack() {
//   let colorB = 0;
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       if (grid[y][x] !== colorB) {
//         return false;
//       }
//     }
//   }
//   return true;
// }