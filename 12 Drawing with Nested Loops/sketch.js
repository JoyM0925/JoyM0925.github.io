// Drawing with Nested Loops
// Joy Min
// March 7, 2024

let gridSpacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
}
 
function roundedDist(x1, y1, x2, y2) {
  // take two coordinate points and returns
  // the distance between 2, but rounded
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(sq(a)+sq(b));
  return round(c);
}

function renderGrid(){
  //use nested loop to draw objects in a grid arrangement
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y< height; y += gridSpacing){
      circle(x, y, gridSpacing);
      let d = roundedDist(x,y, mouseX, mouseY);
      // list fill value based on the proximity to the mouse
      let alpha = map(d, 0, 150,255,0);
      if(d<150){
        fill(50, 100, 150, alpha); noStroke();
      }
      else{
        fill(255);
      }
      textAlign(CENTER, CENTER);
      text(d, x, y);
    }
  }
}

function loopReview() {
  // quickly recap single nested loops
  for (let x = 0; x<= 0; x=x+20) {// x: 0 20 40
    for (let y = 0; y<= 40; y+=20){// y: 0 20 40
      print(x, y);
    }
  }
}
