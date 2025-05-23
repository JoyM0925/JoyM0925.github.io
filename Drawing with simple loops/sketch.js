// Drawing with simple loops
// Joy Min
// Feb 24, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circlrLine();
}

function circlrLine() {
  //use a loop (for or while) to draw a line
  //of circle side by side
  let d = 40; //diameter of each circle
  let y = height/2;
  let xStart = 0;
  let xEnd = width;

  //use a loop to do the drawing
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0 40 80 120 160 200 240
    circle(x, y, d);
  
  }
}

function gradientBackground() {
  //create a gradient to use as background
  let h = 50;

  //use a loop to draw vertical strack of rectangles
  for(let y = 0; y < height; y += h){
    noStroke();
    let mappedY = map(y, 0, height, 0, 255);
    let reversedY = map(y, 0, height, 255, 0);
    fill(mappedY, reversedY, mouseX);
    rect(0, y, width, h);
  }
}