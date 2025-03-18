// Terrain Generation Project
// Joy Min
// March 3, 2025

let rectWidth = 10; 
let rectwidthadjust = 1; // adjust witdh
let noiseStart = 0; 
let noiseSpeed = 0.02; 
let minHeight = 20; // max height for rects
let maxHeight = 500; 
let highestX = 0, highestY = 0; // locate highest peak
let avgHeight = 0; 




function setup() {
  createCanvas(windowWidth, windowHeight);
}



function generateTerrain() {
  let noiseValue = noiseStart; 
  let highestpeak = 0; 
  let sumHeight = 0; // total height for calc averg height
  let rectCount = width / rectWidth; // number of rects


  rectMode(CORNERS); 
  for (let i = 0; i < rectCount; i++) {
    let x = i * rectWidth; // locate every rect by width
    let heightValue = noise(noiseValue); // change value of the height of rects
    let rectHeight = map(heightValue, 0, 1, minHeight, maxHeight); 
    sumHeight += rectHeight; // add total height for averaging after every loop

    let x2 = x + rectWidth;// the location of x of 
    let y2 = height - rectHeight; // the location of the actual height of rect
    fill(255, 182, 193);
    stroke(255, 105, 180);
    rect(x, height, x2, y2);


    if (rectHeight > highestpeak) { // find highest peak
      highestpeak = rectHeight;
      highestX = x + rectWidth / 2;  //in the middle of the particular rect 
      highestY = y2; 

    }
    noiseValue += noiseSpeed; // steply increase the value of noiseValie
  
  }

  avgHeight = sumHeight / rectCount; 

}

function draw() {
  background(220); 

  if (keyIsDown(LEFT_ARROW)) { // since keyPressed, keyIsPressed, keyCode, keyReleased, keyTyped dosen't work, so i used keyIsDown which is the only one remained in the recommend section
    if (rectWidth - rectwidthadjust >= 5) { 
        rectWidth = rectWidth - rectwidthadjust; // decrease
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (rectWidth + rectwidthadjust <= 50) { 
        rectWidth = rectWidth + rectwidthadjust; // increase
    }
  }

  noiseStart += 0.01; // let tarrian goes left

  generateTerrain(); 
  drawFlag(highestX, highestY); // flag find the highest peak
  drawAverageHeightBand(); // averg band for heifht

}

function drawFlag(x, y) {
  stroke(255, 105, 190);
  strokeWeight(3);
  line(x, y, x, y - 30);
  fill(255, 182, 180);
  noStroke();
  triangle(x, y - 30, x + 15, y - 20, x, y - 10);


}



function drawAverageHeightBand() {
  fill(255, 105, 200, 100); 
  noStroke();
  rect(0, height - avgHeight - 10, width, height - avgHeight + 10);

}
