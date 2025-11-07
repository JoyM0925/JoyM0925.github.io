// 2D Array Basics
// Mr. Scott
// Nov 3, 2025


// 0 (black)     255 (white)
// grid is 5 x 4 in dimension

let grid = [];

let rows = 5; // y
let cols = 5; // x
let mode = 0;
let squareSize = 100;

function setup() { 
  createCanvas(cols*squareSize, rows*squareSize);
  randomGrid();
}

function draw() {
  background(220);
  renderGrid();
  if (checkWiWHite() || checkWiBlack()) {
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
  if (key === " "){
    mode++;
  }
}

function mousePressed(){
  // Flip the current tile 
  // Only do this if the mouse is on canvas 
  let x = getCurrentX();
  let y = getCurrentY();

  if (keyIsDown(SHIFT)){
    flip(x,y)
  }
  else{
    if (mode%2 == 1){
      squareFlip(x,y)
    }
    else{
      crossflip(x,y);
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

function crossflip(x, y){
  //IF THEY EXIST:
  //flip our NSEW neighbours (cross pattern)
  flip(x, y)
  if(x+1 < cols) flip(x+1,y);
  if(y-1 >= 0) flip(x, y-1);
  if(x-1 < cols) flip(x-1,y);
  if(y+1 >= 0) flip(x, y+1);
}

function squareFlip(x,y){ 
  flip(x, y)
  if(x+1 < cols) flip(x+1,y);
  if(y-1 >= 0) flip(x, y-1);
  flip(x+1, y-1)
}

function checkWiWHite() {
  let colorW = 255;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
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
      if (grid[y][x] !== colorB) {
        return false;
      }
    }
  }
  return true;
}

function randomGrid(){
  for (let y = 0; y < rows; y++) {
    grid[y] = [];
    for (let x = 0; x < cols; x++) {
      if(random(1)<= 0.5){
        grid[y][x] = 0;
      }
      else {
        grid[y][x] = 255;
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