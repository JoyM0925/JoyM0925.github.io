// 🌈 Neon Rush — Advanced Edition (Final Fixed Version)
// by Joy Min & ChatGPT
// ✅ single-file version for p5.js Web Editor

let player;
let obstacles = [];
let score = 0;
let gameOver = false;
let speed = 5;
let trail = [];
let laneLines = [];

function setup() {
  createCanvas(500, 700);
  player = new Car(width / 2, height - 80);
  textFont('Courier New');
  // create initial lane lines
  for (let i = 0; i < 8; i++) {
    laneLines.push({ y: i * 100 });
  }
}

function draw() {
  // ✨ Subtle background pulse (not too blue)
  let pulse = map(sin(frameCount * 0.02), -1, 1, 5, 20);
  background(10 + pulse, 10 + pulse, 25 + pulse * 2);

  drawRoad();
  drawLaneLines();
  drawBackgroundGlow();

  if (!gameOver) {
    // update score & difficulty
    score += 1;
    if (score % 600 === 0) speed += 0.5;

    // update and draw player
    player.update();
    player.show();

    updateTrail(player.x, player.y);

    // spawn obstacles
    if (frameCount % 50 === 0) {
      obstacles.push(new Obstacle());
    }

    // update obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].update();
      obstacles[i].show();

      if (obstacles[i].offscreen()) {
        obstacles.splice(i, 1);
      } else if (obstacles[i].hits(player)) {
        gameOver = true;
        flashRed();
      }
    }

    // score display
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("SCORE: " + score, 20, 40);
  } else {
    showGameOver();
  }
}

// 🏎️ Car class (3D-ish neon)
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 45;
    this.h = 70;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 7;
    if (keyIsDown(RIGHT_ARROW)) this.x += 7;
    this.x = constrain(this.x, 60, width - 60);
  }

  show() {
    push();
    rectMode(CENTER);
    noStroke();

    // main body
    fill(0, 255, 255);
    rect(this.x, this.y, this.w, this.h, 8);

    // windows
    fill(50, 200, 255);
    rect(this.x, this.y - 10, this.w * 0.6, this.h * 0.3, 5);

    // headlights
    fill(255, 255, 100);
    ellipse(this.x - 15, this.y - this.h / 2 + 5, 8, 8);
    ellipse(this.x + 15, this.y - this.h / 2 + 5, 8, 8);

    // glow outline
    noFill();
    stroke(0, 255, 255, 120);
    strokeWeight(8);
    rect(this.x, this.y, this.w + 10, this.h + 10, 10);
    pop();
  }
}

// 🧱 Obstacle (3D illusion blocks)
class Obstacle {
  constructor() {
    this.x = random(70, width - 70);
    this.y = -40;
    this.w = random(60, 90);
    this.h = 40;
    this.depth = random(40, 80);
    this.col = color(random(150, 255), random(60, 255), random(200, 255));
  }

  update() {
    this.y += speed;
  }

  show() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.w, this.h, 4);

    // shadow to fake depth
    fill(red(this.col) * 0.4, green(this.col) * 0.4, blue(this.col) * 0.4, 120);
    rect(this.x + 5, this.y + this.depth * 0.1, this.w, this.h, 4);
    pop();
  }

  offscreen() {
    return this.y > height + this.h;
  }

  hits(car) {
    return (
      this.y + this.h / 2 > car.y - car.h / 2 &&
      this.y - this.h / 2 < car.y + car.h / 2 &&
      abs(this.x - car.x) < (this.w + car.w) / 2
    );
  }
}

// 🌈 glowing trail behind the car
function updateTrail(x, y) {
  trail.push(createVector(x, y + 50));
  if (trail.length > 25) trail.shift();

  noStroke();
  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 20, 120);
    fill(0, 255, 255, alpha);
    ellipse(trail[i].x, trail[i].y, 25);
  }
}

// 🛣️ road center & edge glow
function drawRoad() {
  noStroke();
  fill(20, 20, 30);
  rect(width / 2, height / 2, width * 0.8, height);

  // side glow
  for (let i = 0; i < 10; i++) {
    stroke(100, 200, 255, 40 - i * 3);
    line(width * 0.1 + i * 2, 0, width * 0.1 + i * 2, height);
    line(width * 0.9 - i * 2, 0, width * 0.9 - i * 2, height);
  }
}

// 🟨 moving lane lines (fixed variable name)
function drawLaneLines() {
  stroke(255, 255, 255, 120);
  strokeWeight(5);
  for (let lane of laneLines) {
    lane.y += speed * 1.5;
    if (lane.y > height) lane.y = -100;
    line(width / 2, lane.y, width / 2, lane.y + 50);
  }
}

// 💫 background glow waves
function drawBackgroundGlow() {
  for (let i = 0; i < height; i += 40) {
    stroke(100, 150, 255, 30);
    line(0, i + (frameCount % 40), width, i + (frameCount % 40));
  }
}

// 💥 red flash
function flashRed() {
  push();
  fill(255, 0, 0, 150);
  rect(0, 0, width, height);
  pop();
}

// ☠️ Game over screen
function showGameOver() {
  fill(255, 80, 120);
  textAlign(CENTER);
  textSize(40);
  text("💥 GAME OVER 💥", width / 2, height / 2);
  textSize(25);
  fill(200);
  text("Final Score: " + score, width / 2, height / 2 + 50);
  textSize(18);
  fill(150);
  text("Press R to Restart", width / 2, height / 2 + 90);
}

// 🧠 key control & restart (arrow-key fix)
function keyPressed() {
  // prevent browser scroll
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    return false;
  }
  // restart
  if (key === 'r' || key === 'R') {
    resetGame();
  }
}

function resetGame() {
  obstacles = [];
  trail = [];
  score = 0;
  speed = 5;
  gameOver = false;
}
