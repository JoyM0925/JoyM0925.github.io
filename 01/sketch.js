// Coordinate Systems and USer Events
// Joy Min
// September 10, 2025
// A first look at ineractive progrms with p5.js


function setup() { // runs Once at the first
  createCanvas(400,400);
  print(windowWidth, windowHeight, width, height);
}

function draw() { // runs ove and over
                      // targeting 60 frames per second
  background(220); // draws a big solid rectangle 
  drawTwoCircles()
}

function drawTwoCircles(){ //[ALT][SHFIT][F] -> Autoformat
  // draws two circles, onc at a fixed loation
  // and one at the mouse location

  // Draw order
  // Later a thing is drawn
  // The higher it is in the draw stack
  
  fill(255, 0, 255)
  circle(width/2, height/2, 100);
  fill(0, 255, 0);// colors are a bit like
                  //picking up a marker, or
                  //filling a paintbrush with paint...
       //R,G,B
  circle(mouseX, mouseY, 30)
}