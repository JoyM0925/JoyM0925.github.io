// Image Processing
// Joy Min
// Nov 13, 2025

let myImage;

async function setup() {
  pixelDensity(1);
  myImage = await loadImage("assets/chip.jpg");
  createCanvas(600,600);
}

//For each pixel, remove the red component (set to 0)
//                havle the blue component (i/2)
// R, G, B, A, R, G

function colorEffect(){
  // USE THE SINGLE LOOP STRATEGY
  for(let i = 0; i < pixels.length/2; i+=4){
    pixels[i] = 0; // R
    pixels[i+2] = pixels[i+2]/2 //B
  }
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels(); // populate the pixels array;

    colorEffect(); // replace w/ each different exercises

  updatePixels(); // redraw base on our chices
} 

