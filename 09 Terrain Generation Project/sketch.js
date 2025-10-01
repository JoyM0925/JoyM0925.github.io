// Starter Code for our 
// Terrain Generation Project
// Joy Min
// September 29

let rectWidth = 10;
let adjustwith = 1;
let noisestart = 0;
let noisespeed = 0.02;
let minheight = 20
let maxheight = 500;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain(){
  let rectcount = windowWidth / rectWidth; // number of rects
  let noisevalue = noisestart;
  let highestpeak = Infinity; 
  let highestX;
  let highestY;
  let sumheight = 0; // total height for calc averg height


  // use a loop to generate and draw
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);

  for(let i = 0; i<rectcount; i++){
    //generate random heights
    stroke(255, 153, 153)
    fill(255, 204, 204)
    let x = i*rectWidth
    noisevalue += noisespeed
    let rectheight = map(noise(noisevalue), 0, 1, minheight, maxheight); 
    let x2 = x + rectWidth;
    let y2 = height - rectheight;
    rect(x, height, x2, y2);
    sumheight += rectheight; // add total height for averaging after every loop
  }
  
  rectMode(CORNER);

}

function draw() {
  background(255);
  generateTerrain();
  if (keyCode === LEFT_ARROW && keyIsDown){
    rectWidth = rectWidth - adjustwith;
  }
  if (keyCode === RIGHT_ARROW && keyIsDown){
    rectWidth = rectWidth + adjustwith;
  }
  noisestart += 0.01;
}
