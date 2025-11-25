// Recursive Imagery
// Joy Min
// Nov 25, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x, y, d){
  // recursively draw concertric circles
  // Base case ... implicit
  if(d>10){
    // recursive circle
    circle(x, y, d);
    centerCircle(x, y, d*0.95);
  }
  // if we skip the recursive case, we
  // unravel on level...base case
}

function circleFractal(x, y, d){
  if(d>10){
    circle(x, y, d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y + d/2, d/2);
  }

}

function luckySquare(x, y, s){
  if ( s> 1){
    push();
    translate(x,y)
    rotate(radians(frameCount));
    setFill(x,y, s)
    square(0, 0, s);
    pop();
    luckySquare(x - s/2, y - s/2, s*0.5);
    luckySquare(x - s/2, y + s/2, s*0.5);
    luckySquare(x + s/2, y - s/2, s*0.5);
    luckySquare(x + s/2, y + s/2, s*0.4);
  }  
}

function setFill(x,y, s){
  if(dist(mouseX, mouseY, x, y) < s/2){
    fill(255, 102, 178)
  }
}
 
function draw() {
  rectMode(CENTER)
  noFill();
  background(0);
  stroke(255, 204, 204); 
  luckySquare(width/2, height/2, width/2)
  //circleFractal(width/2, height/2, width/2)
  //centerCircle(width/2, height/2, width);
}
