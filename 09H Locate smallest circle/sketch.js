// FInd the smallest circle
// Joy Min
// October 1, 2025

let NUM_CIRCLES = 40

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawcircle()
}

function draw() {
  //background(220);
}

function drawcircle(){
  // draw som erandom circles
  noFill();
  let smallestDiameter = Infinity;
  let smallestX;
  let smallestY;
  for (let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height)
    let d = random(20, 100)

    if(d < smallestDiameter){
      smallestDiameter = d;
      smallestX = x;
      smallestY = y;
    }

    circle(x, y, d);
  }
  // at this point we should have acess
  // to the smallest circle
  fill(255,0,0);
  circle(smallestX, smallestY, smallestDiameter)
}