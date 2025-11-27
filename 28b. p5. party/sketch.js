// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shared = {painting : [], invert: false};

const colors = [
  "#ee6666",
  "#eeee66",
  "#66ee66",
  "#ee66ee",
  "#66eeee",
  "#6666ee"

]

function pickerColor(){
  return random(colors)
}

function mousePressed(){
  shared.painting.push([mouseX, mouseY, c])
  c = pickerColor();
  
}

function preload() {
  // connect to a p5party server
  partyConnect("wss://demoserver.p5party.org", "cs30party" );
  shared = partyloadShared("shared", shared);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = pickerColor();
}

function draw() {
  background(220);
}
