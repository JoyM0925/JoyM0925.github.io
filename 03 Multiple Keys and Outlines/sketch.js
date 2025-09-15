// Multiple Keys and Outlines
// Joy Min
// September 25

// kkeyIsDown( keycode ) + returns boolean
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  checkMulti();
}

function checkMulti(){
  strokeWeight( mouseX / 10 );
  stroke(255, 204, 229);
  fill(255, 102, 178 );
  // check for multiple keypresses(3 simulacteneous)
  let a = keyIsDown(65); // "a"
  let b = keyIsDown(65); // "b"
  let c = keyIsDown(67); // "c"
  textSize(40);
  text("a:"+ a + "\tb:" + b + "\tc:" + c, 100, 300);
}