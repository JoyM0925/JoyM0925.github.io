// Imagae Animation
// Joy Min
// Oct 2, 2025

let pinImages = []; // array === list
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading")
  frameRate(58)
}

async function loadAssets() {
  // load all of our pinwheel images
  for(let i = 0; i < 9; i++){
    pinImages.push(await loadImage("assets/pin-0" + i + ".png"));
  }
}

function draw() { // this Is a loop
  background(255, 204, 204);
  // animateWithFor()

  // manage current image to display
  current += 1;
  if (current > 8){
    current = 0
  }
  image(pinImages[current], width/2, height*0.6)
}// Screen is updated here!

function animateWithFor(){
  // try to make an animation with a FOR loop
  // -- does't work!
  // FOr loop yeild a single image
  imageMode(CENTER)
  for(i = 0; i < 9; i++){
    image(pinImages[i], width/2, height*0.7);
  }
}