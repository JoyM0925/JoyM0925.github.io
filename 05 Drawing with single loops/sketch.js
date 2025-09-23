// Drawing with single loops
// Joy Min
// September 23, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground()
  circleLine(height * 0.35, 30);
  circleLine(height/2, 50);
  circleLine(height * 0.65, 80);
}

function gradientBackground(){
  // create a gradint to use as a background
  let h = 25; //height of each rectangle

  // use a loop (doesn't have to be WHILE) to
  // draw a vertical stack of rectangles
  let y = 0;
  while (y <= height){
    noStroke();
    let mappedY = map(y, 0, height, 0, 255)
    let flippedY = 255 - mappedY;
    let mappedmouseX = map 
    fill(mappedY, flippedY, 0);
    rect(0, y, width, h);
    y += h;
  }
}

function cDistance(x1, x2, y1, y2){
  // calculate the straight line distance
  // between (x1, y1) and (x2, y2)
  let a = abs(x1 - x2);
  let b = abs(y1 - y2); //c = sqrt(a^2 + b^2)
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return c.toFixed(1) ; // keep only one decimal place
}

function circleLine(y, size){
  // use this function to draw a line of ciecles (loop)
  // y -> number the jheight at which to draw the line
  // size -> number diameter of the circles
  let xStart = width * 0.1; // 10% position from the left
  let xEnd = width * 0.9;   // 90% horizontal pos from left

  for(let x = xStart; x<=xEnd; x+=size){
    let d = cDistance(x, y, mouseX, mouseY);
    if ( d <= size/2){ // dist less than radius, In circle
      fill (200, 200, 0)
    }
    else{
      fill(255)
    }
    circle(x,y,size);
    textAlign(CENTER. CENTER);
    fill(0);
    text(d, x, y)
  }

}