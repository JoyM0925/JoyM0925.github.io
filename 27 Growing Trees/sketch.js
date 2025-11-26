// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 4;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES);
}

function draw() {

  background(220);
  angle = map (mouseX, 0, width, 0, 180)
  translate(width/2, height);
  branch(320)
}

function branch(len){
  let t = map(len, 2, 220, 2, 20);
  strokeWeight(t);
  line(0, 0, 0, -len);
  translate(0, -len);
  if ( len > 2){
    push();
     rotate(angle);
     branch( len * 0.6);
    pop();
    push();
     rotate(-angle);
     branch(len * 0.6)
    pop();
  }
}