// 2D Array Puzzle Game
// Joy Min
// April 19, 2025

let grid = [];
let squareSize = 60;
const NUM_ROWS = 3;
const NUM_COLS = 5;

let mode = 0; // 0 = cross, 1 = 2x2 square

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  randomizeGrid(); // random every time
}

function draw() {
  background(220);
  renderGrid();
  if (checkWin()) {
    fill(0, 255, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
  showOverlay(getCurrentX(), getCurrentY());
}

function renderGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(grid[y][x]);
      stroke(0);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function getCurrentX() {
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / squareSize);
}

function getCurrentY() {
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize);
}

function mousePressed() {
  let x = getCurrentX();
  let y = getCurrentY();

  if (keyIsDown(SHIFT)) {
    // Cheater Cheater: only flip the clicked square
    flip(x, y);
  } else if (mode === 1) {
    // 2x2 square flip
    let positions = [[x, y], [x + 1, y], [x, y + 1], [x + 1, y + 1]];
    for (let i = 0; i < positions.length; i++) {
      let px = positions[i][0];
      let py = positions[i][1];
      if (px >= 0 && px < NUM_COLS && py >= 0 && py < NUM_ROWS) {
        flip(px, py);
      }
    }
  } else {
    // Cross flip
    flip(x, y);
    if (x > 0) flip(x - 1, y);
    if (x < NUM_COLS - 1) flip(x + 1, y);
    if (y > 0) flip(x, y - 1);
    if (y < NUM_ROWS - 1) flip(x, y + 1);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    // space key toggles flip mode
    mode = (mode + 1) % 2;
  }
}

function flip(x, y) {
  if (grid[y][x] === 0) {
    grid[y][x] = 255;
  } else {
    grid[y][x] = 0;
  }
}

function randomizeGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    grid[y] = [];
    for (let x = 0; x < NUM_COLS; x++) {
      grid[y][x] = random([0, 255]);
    }
  }
}

function checkWin() {
  let first = grid[0][0];
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      if (grid[y][x] !== first) {
        return false;
      }
    }
  }
  return true;
}

function showOverlay(cx, cy) {
  noStroke();
  fill(0, 255, 0, 100);

  if (keyIsDown(SHIFT)) {
    // Preview for Cheater mode
    if (cx >= 0 && cx < NUM_COLS && cy >= 0 && cy < NUM_ROWS) {
      square(cx * squareSize, cy * squareSize, squareSize);
    }
  } else if (mode === 1) {
    // 2x2 square overlay
    let positions = [[cx, cy], [cx + 1, cy], [cx, cy + 1], [cx + 1, cy + 1]];
    for (let i = 0; i < positions.length; i++) {
      let x = positions[i][0];
      let y = positions[i][1];
      if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
        square(x * squareSize, y * squareSize, squareSize);
      }
    }
  } else {
    // Cross overlay
    let positions = [[cx, cy], [cx - 1, cy], [cx + 1, cy], [cx, cy - 1], [cx, cy + 1]];
    for (let i = 0; i < positions.length; i++) {
      let x = positions[i][0];
      let y = positions[i][1];
      if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
        square(x * squareSize, y * squareSize, squareSize);
      }
    }
  }
}