// User Events - Day 1 Challenge
// Joy M
// September 11. 2025

// Global variables here
let circleColor = false;
//  declaration   initialization


function setup() {
  createCanvas(400, 400);
}

function draw() {
  let a = 5;
  background(220);
  challenge();
}

function keyPressed(){
  // this is special event function, gets
  // automaticlly called antime a keyboeard
  // button is pressed
  circleColor = !circleColor;
}
   
function challenge(){
  noFill();

  if(circleColor){ // circlrColor = true
    fill(230, 150, 45);
  }
  circle(width/2, height/2, 50);// in the middle
  circle(0, 0, 50);// left up corner
  circle(width, 0, 50);// right up cornner
  circle(0, height, 50);// left downn corner
  circle(width, height, 50);// right down corner
}
