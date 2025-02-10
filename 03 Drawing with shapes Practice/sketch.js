// Drawing with Shapes Practice
// Joy Min
// Feb 10, 2025

// Global Variable Declarations
let boxX = 200, boxY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCharacters();
}

function drawBox() {
  // draw  box on the screen
  fill(255,430,10);
  rect(boxX, boxY, 50, 50, 5, 5, 0, 0);
  rect(boxX, boxY - 50, 30);
}

function keyPressed() {
  if(key === "a"){
    boxX = 0;
  }
  if(key === "b"){
    boxY = 400;
  }
  if(keyCode === ESCAPE){
    boxX = width * 0.85; // 85% across the screen
    boxY = height * 0.6; // 60% down the screen
  }
}

function drawCharacters() {
  noStroke();
  fill(150,400,150);
  rect(boxX, boxY, 100, 100, 50, 50, 0, 0); //body part
  rect(boxX, boxY+100, 5, 30); // left leg
  rect(boxX+95, boxY+100, 5, 30); // right leg
  fill(0,0,0);
  circle(boxX +25, boxY +50, 9); // left eye
  circle(boxX +75, boxY +50, 9); // right eye
  rect(boxX + 27, boxY + 70, 50, 3); // mouth
}