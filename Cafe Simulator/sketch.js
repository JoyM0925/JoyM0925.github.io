// Cafe Simulator 
// Joy M
// Dec 4, 2025

// GLOBAL SCALE — all images use this scale and do NOT follow window size
let GLOBAL_SCALE = 0.18;

let startImage;
let blurImage;
let tutorialBoard;
let tutorialBoard2;
let tutorialBoard3;
let cancelButton;     // only button now
let cafeOrderPage;

let gameState = "start"; // start -> tutorial -> tutorial2 -> tutorial3 -> orderPage

// check the area of cancel button
let cancelX, cancelY, cancelW, cancelH;

async function loadAssets() {
  startImage = await loadImage("assets/startscreen.png");
  blurImage = await loadImage("assets/blurbackground.png");
  tutorialBoard = await loadImage("assets/tutorial1.png");
  tutorialBoard2 = await loadImage("assets/tutorial2.png");
  tutorialBoard3 = await loadImage("assets/tutorial3.png"); 
  cancelButton = await loadImage("assets/cancelbutton.png");
  cafeOrderPage = await loadImage("assets/cafeorderpage.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
}

function draw() {
  background(255);

  if (gameState === "start") {

    // start image (fixed scale)
    let sW = startImage.width * GLOBAL_SCALE;
    let sH = startImage.height * GLOBAL_SCALE;
    image(startImage, (width - sW) / 2, (height - sH) / 2, sW, sH);

    if (keyIsDown(32)) { // press space to continue
      gameState = "tutorial";
    }
  }

  else if (gameState === "tutorial") {
    drawTutorialPage(tutorialBoard);
  }

  else if (gameState === "tutorial2") {
    drawTutorialPage(tutorialBoard2);
  }

  else if (gameState === "tutorial3") {
    drawTutorialPage(tutorialBoard3);
  }

  else if (gameState === "orderPage") {
    let oW = cafeOrderPage.width * GLOBAL_SCALE;
    let oH = cafeOrderPage.height * GLOBAL_SCALE;
    image(cafeOrderPage, (width - oW) / 2, (height - oH) / 2, oW, oH);
  }
}

function drawTutorialPage(boardImg) {

  // background (fixed scale)
  let bW = blurImage.width * GLOBAL_SCALE;
  let bH = blurImage.height * GLOBAL_SCALE;
  image(blurImage, (width - bW) / 2, (height - bH) / 2, bW, bH);

  // board scale
  let displayW = boardImg.width * GLOBAL_SCALE;
  let displayH = boardImg.height * GLOBAL_SCALE;

  let x = (width - displayW) / 2;
  let y = (height - displayH) / 2; 

  // load the board
  image(boardImg, x, y, displayW, displayH);

  // ----------------- cancel button -------------------
  cancelW = 110;
  cancelH = 90;

  cancelX = x + displayW - cancelW - 1020;
  cancelY = y + 80;

  let hoveringCancel = mouseX > cancelX && mouseX < cancelX + cancelW &&
                      mouseY > cancelY && mouseY < cancelY + cancelH;

  if (hoveringCancel) tint(200);

  image(cancelButton, cancelX, cancelY, cancelW, cancelH);

  tint(255);
}

// ----------------- keyboard navigation -------------------
function keyPressed() {

  if (gameState === "tutorial") {
    if (keyCode === RIGHT_ARROW) gameState = "tutorial2";
  }

  else if (gameState === "tutorial2") {
    if (keyCode === RIGHT_ARROW) gameState = "tutorial3";
    if (keyCode === LEFT_ARROW)  gameState = "tutorial";
  }

  else if (gameState === "tutorial3") {
    if (keyCode === LEFT_ARROW) gameState = "tutorial2";
  }
}

// ----------------- cancel (exit tutorial) -------------------
function mousePressed() {

  if (mouseInCancel() && 
     (gameState === "tutorial" || gameState === "tutorial2" || gameState === "tutorial3")) {

    gameState = "orderPage";
    return;
  }
}

function mouseInCancel() {
  return (mouseX > cancelX && mouseX < cancelX + cancelW && 
          mouseY > cancelY && mouseY < cancelY + cancelH);
}
