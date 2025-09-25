// Working with Image
// Joy Min
// September 25, 2025


//Global Variables
let lionL, lionR;
let facingright = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets()
  noCursor();
}

async function loadAssets() {
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}


function draw() {
  background(220);
  if(pmouseX < mouseX){
    facingright = true;
  }
  else if (pmouseX > mouseX){
    facingright = false
  }

  if (facingright) {
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
}
