// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time = d.getTime();
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
let years = Math.round(d.getTime() / year);


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  translate(width/2, height/2);
  push();

  strokeWeight(1)
  circle(0,0,150);
  for(let i = 0; i < 12; i++){
    strokeWeight(3);
    line(0, 55, 0, 70);
    rotate(30);
  }
  for( let i = 0; i < 60; i++){
    strokeWeight(0.5)
    line(0, 55, 0, 70)
    rotate(6)
  }
  r
  otate(frameCount)/60;
  strokeWeight(2);
  line(0,0, 0, 60)
  pop();

  

  
}
