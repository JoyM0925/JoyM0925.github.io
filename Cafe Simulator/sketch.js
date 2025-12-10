// Cafe Simulator 
// Joy M
// Dec 4, 2025

let GLOBAL_SCALE = 0.18; //make the canva stay in a fixed scale no matter what the scale of the window is
let startImage;
let blurImage;
let tutorialBoard;
let tutorialBoard2;
let tutorialBoard3;
let cancelButton;     // only button now
let cafeOrderPage;
let pressToContinueImg;  
let pulseScale = 1;
let pulseSpeed = 0.003; // 
let pulseGrowing = true;
let dayOneBoard;
let dayOneState = "none";    // none -> showing -> moving -> counting
let dayOneTimer = 120;       // 2 min countdown
let dayOneStartTime = 0;     // record when board first appears

// board animation values
let boardX, boardY;
let boardW, boardH;

// for countdown board
let targetX, targetY;        // final small position (top-right)
let targetW, targetH;        // final small size (scaled)

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
  pressToContinueImg = await loadImage("assets/presstocontinue.png");
  dayOneBoard = await loadImage("assets/dayonestartboard.png");
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

    // like breath
    if (pulseGrowing){
      pulseScale += pulseSpeed;
    }
    else {
      pulseScale -= pulseSpeed;
    }
    if (pulseScale > 1.08) {
      pulseGrowing = false; // i haven't thought this part would work cuz i originally set pulsescale as 1 so that the max and min scale should be 1 +- 0.02
    }
    if (pulseScale < 0.92) {
      pulseGrowing = true; // however when i only change the number of pulsescale this part still worked so i kept it
    }

    let pW = pressToContinueImg.width * GLOBAL_SCALE * pulseScale;
    let pH = pressToContinueImg.height * GLOBAL_SCALE * pulseScale;

    image(pressToContinueImg, 0, -240, pW, pH);

    // space to next page
    if (keyIsDown(32)) { 
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

    // draw the cafe background
    let oW = cafeOrderPage.width * GLOBAL_SCALE;
    let oH = cafeOrderPage.height * GLOBAL_SCALE;
    image(cafeOrderPage, (width - oW) / 2, (height - oH) / 2, oW, oH);

    // draw the dayoneboard
    drawDayOneBoard();
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

  // cancel button 
  cancelW = 110;
  cancelH = 90;

  cancelX = x + displayW - cancelW - 1020;
  cancelY = y + 80;

  let hoveringCancel = mouseX > cancelX && mouseX < cancelX + cancelW && mouseY > cancelY && mouseY < cancelY + cancelH;

  if (hoveringCancel) {
    tint(200);
  }
  image(cancelButton, cancelX, cancelY, cancelW, cancelH);

  tint(255);
}

// keyboard switch
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

// cancel (exit tutorial) 
function mousePressed() {

  if (mouseInCancel()&& (gameState === "tutorial" || gameState === "tutorial2" || gameState === "tutorial3")) {
    gameState = "orderPage";
    dayOneState = "showing";
    dayOneStartTime = millis();
  
    //  full scale
    boardW = dayOneBoard.width * GLOBAL_SCALE;
    boardH = dayOneBoard.height * GLOBAL_SCALE;
  
    boardX = (width - boardW) / 2;
    boardY = (height - boardH) / 2 ;
  
    // final small scale
    targetW = boardW * 0.3;
    targetH = boardH * 0.3;
  
    targetX = width/2 - 100;
    targetY = 15;
  
    return;
  }
}


function mouseInCancel() {
  return (mouseX > cancelX && mouseX < cancelX + cancelW && 
          mouseY > cancelY && mouseY < cancelY + cancelH);
}

function drawDayOneBoard() {

  if (dayOneState === "none") return;

  if (dayOneState === "showing") {

    // draw board
    image(dayOneBoard, boardX, boardY, boardW, boardH);

    // draw START! 
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);

    // text inside board, lower area
    textSize(boardH * 0.22);

    let startX = boardX + boardW / 2;
    let startY = boardY + boardH - 400;   
    fill(185, 60, 60);
    text("START!", startX, startY);

    let elapsed = millis() - dayOneStartTime;
    if (elapsed > 2000) {
        dayOneState = "moving";
    }
    return;
  } 

  // shrinking + moving to top-right 
  if (dayOneState === "moving") {

    // lerp movement from p5
    boardX = lerp(boardX, targetX, 0.05); // lerp is Calculates a number between two numbers at a specific increment.(from p5 reference)
    boardY = lerp(boardY, targetY , 0.05);
    boardW = lerp(boardW, targetW, 0.05);
    boardH = lerp(boardH, targetH, 0.05);

    image(dayOneBoard, boardX, boardY, boardW, boardH);

    // when close enough -> start countdown
    let d = dist(boardX, boardY, targetX, targetY);
    if (d < 10) {                
        dayOneState = "counting";
        dayOneStartTime = millis();
    }

    return;
  }

  // counting down 
  if (dayOneState === "counting") {

      image(dayOneBoard, boardX, boardY, boardW, boardH);

      // countdown
      let elapsed = floor((millis() - dayOneStartTime) / 1000);
      let remaining = max(0, dayOneTimer - elapsed);

      // color change for last 20 seconds
      if (remaining <= 20) {
        fill(185, 60, 60);  // red for 20s remain warning
      } 
      else {
        fill(0); // normal black
      }

      textSize(boardH * 0.18);
      textAlign(CENTER, CENTER);

      let textX = boardX + boardW / 2;
      let textY = boardY + boardH  - 115;

      text(remaining + "s", textX, textY);
  }
}
