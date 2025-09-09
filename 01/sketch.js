// Joy Min
// Interactive program

function setup() { // runs Once at the first
  createCanvas(windowWidth, windowHeight);
}

function draw() { // runs ove and over
                      // targeting 60 frames per second
  // background(220); 
  fill(255,mouseX,0);
  circle(mouseX, mouseY, 30)
}
