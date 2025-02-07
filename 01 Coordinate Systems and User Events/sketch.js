// Coordinate System and User Events
// Joy Min
// Feb 6th, 2025
// not run-to-sompletion, but interactive programs...

function setup() {
  // runs Once, at the very beginning...
  createCanvas(500, 500);
  //
}

function draw() {
  //draw LOOP, repeats over aand over forever
  // - target of 60 frames per second
  // A new image is drawn at the bottom of the loop
  background(220);
  demoCircle();
}

//function twoCircles(){
  //draw two circles, one at a fixed location
  //and one at the same mouse location
  //fill(0,255,0); //green fill
  //stroke(0,0,255); //blue outline
  //strokeWeight(5); //thickness of outline
  //circle(200,100,50);

  //noStroke(); //turns off outlines
  //fill(255, 0, 0,); //red fill
  //circle(mouseX, mouseY, 30);
  // secret calculated delay()
  //screen updates at end of loop

//}

function demoCircle(){
  fill(0,255,0);
  circle(0,0,100);
  circle(500,0,100);
  circle(0,500,100);
  circle(500,500,100);
  fill(0,255,0);
  circle(250,250,100);
}
