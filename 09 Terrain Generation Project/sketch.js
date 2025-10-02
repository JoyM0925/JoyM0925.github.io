// Starter Code for our 
// Terrain Generation Project
// Joy Min
// September 29

let rectWidth = 10;
let adjustwith = 0.5; // value to ajust rectangle width
let noisestart = 0; 
let noisespeed = 0.02; 
let minheight = 20 
let maxheight = 500;
let avgHeight = 0;
let highestX;
let highestY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain(){
  let rectcount = windowWidth / rectWidth; // number of rects
  let noisevalue = noisestart;
  let sumheight = 0; // total height for calc averg height
  
  let highestpeak = 0; 

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

    if (rectheight > highestpeak) { // find highest peak
      highestpeak = rectheight;
      highestX = x + rectWidth / 2;  //in the middle of the particular rect 
      highestY = y2; 

    }

     
    sumheight += rectheight; // add total height for averaging after every loop
  }
  
  rectMode(CORNER);
  avgHeight = sumheight/rectcount
}

function draw() {
  background(255);
  generateTerrain();
  average();
  drawFlag(highestX, highestY); // flag find the highest peak
  if (keyIsDown(LEFT_ARROW) && rectWidth >=3) {
    rectWidth = rectWidth - adjustwith; // decrease the rectwidth by left arrow button
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rectWidth = rectWidth + adjustwith; // increase ~ by left arrow
  }

  noisestart += 0.01;
}


function drawFlag(x, y) {
  stroke(255, 105, 190);
  strokeWeight(3);
  line(x, y, x, y - 30);
  fill(255, 182, 180);
  noStroke();
  triangle(x, y - 30, x + 15, y - 20, x, y - 10);


}


function average(){
  fill(255, 105, 200, 100); 
  noStroke();
  rect(0, height - avgHeight - 10, width, 10);
}