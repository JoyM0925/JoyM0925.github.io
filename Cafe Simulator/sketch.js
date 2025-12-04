// Cafe Simulator 
// Joy M
// Dec 4, 2025

let backgroundimage;

function setup() {
  createCanvas(6008, 4400); // 6008*4400px -> image
  loadAssets();
}

function draw() {
  background(220)
  let imgW = startscreenimage.width;
  let imgH = startscreenimage.height;
  let scale = min(windowWidth / imgW, windowHeight / imgH);// find the minimum value and the right scale even while the user is changing the size of the window

  let displayW = imgW * scale;
  let displayH = imgH * scale;
  let x = (windowWidth - displayW) / 2;
  let y = (windowHeight - displayH) / 2;

  image(startscreenimage, x, y, displayW, displayH);

}

async function loadAssets() {
  startscreenimage = await loadImage("assets/startscreen.png");
}
