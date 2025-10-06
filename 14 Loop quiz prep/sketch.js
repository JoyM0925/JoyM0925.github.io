// Loop quiz prep
// Joy Min
// Oct 6, 2025

let gridsize = 40

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  strokeWeight(10)
  let x = 0;
  while(x < width){
    let y = 0;
    while (y < height){
      if(abs(width/2 - x)> 100){
        point(x,y);
      }
      y += gridsize
    }
    x += gridsize
  }
}

function draw() {
  background(220);
}
