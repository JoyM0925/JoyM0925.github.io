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
  let highestpeak = 0; 
  let sumheight = 0; // total height for calc averg height


  // use a loop to generate and draw
  // several rectangles side to side
  // to look like some 2D terrain
  rectMode(CORNERS);

  for(let i = 0; i<rectcount; i++){
    //generate a random height. 
    //change this from using random() to noise()
    stroke(255, 153, 153)
    fill(255, 204, 204)
    let x = i*rectWidth
    let heightvalue = noise(noisevalue)
    noisevalue += noisespeed
    let rectheight = map(heightvalue, 0, 1, minheight, maxheight); 
    sumheight += rectheight; // add total height for averaging after every loop
    let x2 = x + rectWidth;
    let y2 = height - rectheight;
    rect(x, height, x2, y2);
    
  }
  
  rectMode(CORNER);

}

function draw() {
  // background(220);
  generateTerrain();
}
