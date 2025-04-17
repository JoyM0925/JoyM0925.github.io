// 2D Puzzle Game Final Version - With All Features
// Mr. Scott starter + Completed by Joy Min
// Features: Flip, Clicker Checker, Shift, Win, Overlay, Cross/Square toggle

let grid = [];
let squareSize = 60;
const NUM_ROWS = 3;
const NUM_COLS = 5;

let clickerMode = false; // 'Clicker Checker' Mode
let squareMode = false;  // false = cross mode, true = square mode
let hoverX = -1;
let hoverY = -1;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  randomizeGrid();
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

  showOverlay(hoverX, hoverY);
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
  return constrain(floor(mouseX / squareSize), 0, NUM_COLS - 1);
}

function getCurrentY() {
  return constrain(floor(mouseY / squareSize), 0, NUM_ROWS - 1);
}

function mouseMoved() {
  hoverX = getCurrentX();
  hoverY = getCurrentY();
}

function mousePressed() {
  let x = getCurrentX();
  let y = getCurrentY();

  if (keyIsDown(SHIFT)) {
    flip(x, y); // only flip center tile for Cheater Checker test
    return false;
  }

  if (mouseButton === LEFT) {
    if (clickerMode) {
      flip3x3(x, y);
    } else {
      if (squareMode) {
        flip3x3(x, y);
      } else {
        flipCross(x, y);
      }
    }
  }

  if (mouseButton === CENTER) {
    shiftRowRight(y);
  }

  if (mouseButton === RIGHT) {
    shiftColDown(x);
  }

  return false;
}

function keyPressed() {
  if (key === 'C') {
    clickerMode = !clickerMode;
    console.log("Clicker Checker Mode:", clickerMode);
  }

  if (key === ' ') {
    squareMode = !squareMode;
    console.log("Flip Mode:", squareMode ? "Square (3x3)" : "Cross");
  }
}

function flip(x, y) {
  if (grid[y][x] === 0) {
    grid[y][x] = 255;
  } else {
    grid[y][x] = 0;
  }
}

function flipCross(x, y) {
  flip(x, y);
  if (x > 0) flip(x - 1, y);
  if (x < NUM_COLS - 1) flip(x + 1, y);
  if (y > 0) flip(x, y - 1);
  if (y < NUM_ROWS - 1) flip(x, y + 1);
}

function flip3x3(cx, cy) {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      let x = cx + dx;
      let y = cy + dy;
      if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
        flip(x, y);
      }
    }
  }
}

function shiftRowRight(row) {
  let last = grid[row][NUM_COLS - 1];
  for (let i = NUM_COLS - 1; i > 0; i--) {
    grid[row][i] = grid[row][i - 1];
  }
  grid[row][0] = last;
}

function shiftColDown(col) {
  let last = grid[NUM_ROWS - 1][col];
  for (let i = NUM_ROWS - 1; i > 0; i--) {
    grid[i][col] = grid[i - 1][col];
  }
  grid[0][col] = last;
}

function checkWin() {
  let first = grid[0][0];
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      if (grid[y][x] !== first) return false;
    }
  }
  return true;
}

function randomizeGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    grid[y] = [];
    for (let x = 0; x < NUM_COLS; x++) {
      grid[y][x] = random([0, 255]);
    }
  }
}

function showOverlay(cx, cy) {
  if (cx < 0 || cy < 0 || cx >= NUM_COLS || cy >= NUM_ROWS) return;

  noStroke();
  fill(0, 255, 0, 100); // semi-transparent green

  if (squareMode || clickerMode) {
    // Square (3x3)
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        let x = cx + dx;
        let y = cy + dy;
        if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
          square(x * squareSize, y * squareSize, squareSize);
        }
      }
    }
  } else {
    // Cross
    let coords = [[cx, cy], [cx - 1, cy], [cx + 1, cy], [cx, cy - 1], [cx, cy + 1]];
    for (let [x, y] of coords) {
      if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
        square(x * squareSize, y * squareSize, squareSize);
      }
    }
  }
}
