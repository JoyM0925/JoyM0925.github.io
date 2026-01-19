// Cafe Simulator 
// Joy M
// Dec 4, 2025

let globalscale = 0.18 //make the canva stay in a fixed scale no matter what the scale of the window is
let startImage;
let blurImage;
let tutorialBoard;
let tutorialBoard2;
let tutorialBoard3;
let cancelButton; 
let cafeOrderPage;
let pressToContinueImg;  
let pulseScale = 1;
let pulseSpeed = 0.003; // 
let pulseGrowing = true;
let dayOneBoard;
let dayOneState = "none"; // none -> showing -> moving -> counting -> ending -> result
let dayOneTimer = 100; // 100s countdown
let dayOneStartTime = 0; // record when board first appears
let hasCustomer = false;
let currentCustomer;
let customer1;
let customer2;
let customer3;
let customer4;
let customer5;
let customerImgs = [];
let rightClicker;
let kitchenPage;
let leftClicker;
let liquidMachine;
let placeCup;
let redBeanBowl;
let blackBobaBowl;
let coconutBowl;
let coffeeButton;
let orangeJuiceButton;
let teaButton;
let finishButton; 
let currentDrink = "empty"; // empty || coffee || orange || tea
let emptyGlass;
let coffeeDrink;
let orangeDrink;
let teaDrink;
let currentTopping = "none"; // none || redbean || coconut || boba
let redBeanTopping;
let coconutJellyTopping;
let bobaTopping;
let order1;
let order2;
let order3;
let order4;
let order5;

let orderImgs = [];

// order format: [drink, topping]
let orders = [
  ["tea", "redbean"], // C1 catmush
  ["orange", "boba"], // C2 bearmush
  ["coffee", "coconut"], // C3 kidmush
  ["tea", "boba"], // C4 witchmush
  ["orange", "coconut"] // C5 pigmush
];


let score = 0;
let scorePopupText = "";
let scorePopupFrames = 0;


let boardClicker;
let restartButton;

let showBoardClicker = false;
let showResultText = false;

let gameState = "start"; // start -> tutorial -> tutorial2 -> tutorial3 -> orderPage -> kitchen


// AREA CHECKING PART
let lcX, lcY, lcW, lcH; // left clicker button area
let rcX, rcY, rcW, rcH; // right clicker button area
let boardX, boardY, boardW, boardH; // board animation values
let targetX, targetY, targetW, targetH; // for countdown board
let cancelX, cancelY, cancelW, cancelH; // check the area of cancel button

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
  rightClicker = await loadImage("assets/rightclicker.png");
  kitchenPage = await loadImage("assets/kitchenpage.png");
  leftClicker = await loadImage("assets/leftclicker.png");
  liquidMachine = await loadImage("assets/liquidmachine.png");
  placeCup = await loadImage("assets/placecup.png");
  redBeanBowl = await loadImage("assets/redbeanbowl.png");
  blackBobaBowl = await loadImage("assets/blackbobabowl.png");
  coconutBowl = await loadImage("assets/coconutbowl.png");
  coffeeButton = await loadImage("assets/coffebotton.png");
  orangeJuiceButton = await loadImage("assets/orangejuicebutton.png");
  teaButton = await loadImage("assets/teabutton.png");
  finishButton = await loadImage("assets/finishbutton.png");
  emptyGlass = await loadImage("assets/emptyglass.png");
  coffeeDrink = await loadImage("assets/coffee.png");
  orangeDrink = await loadImage("assets/orangejuice.png");
  teaDrink = await loadImage("assets/tea.png");
  redBeanTopping = await loadImage("assets/redbean.png");
  coconutJellyTopping = await loadImage("assets/coconutjelly.png");
  bobaTopping = await loadImage("assets/boba.png");
  boardClicker = await loadImage("assets/boardclicker.png");
  restartButton = await loadImage("assets/restartbutton.png");



  // ORDER PART
  order1 = await loadImage("assets/c1order.png");
  order2 = await loadImage("assets/c2order.png");
  order3 = await loadImage("assets/c3order.png");
  order4 = await loadImage("assets/c4order.png");
  order5 = await loadImage("assets/c5order.png");

  orderImgs = [
    order1,
    order2,
    order3,
    order4,
    order5
  ];


  // CUSTOMER PART'
  customer1 = await loadImage("assets/c1.png");
  customer2 = await loadImage("assets/c2.png");
  customer3 = await loadImage("assets/c3.png");
  customer4 = await loadImage("assets/c4.png");
  customer5 = await loadImage("assets/c5.png");

  customerImgs = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5
  ];
}


function setup() {
  createCanvas(1100, 800);
  loadAssets();
}

function draw() {
  background(255);

  if (gameState === "start") {

    // start image (fixed scale)
    let sW = startImage.width * globalscale;
    let sH = startImage.height * globalscale;
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

    let pW = pressToContinueImg.width * globalscale * pulseScale;
    let pH = pressToContinueImg.height * globalscale * pulseScale;

    image(pressToContinueImg, 0, -240, pW, pH);

    // space to next page
    if (keyIsDown(32)) { 
      gameState = "tutorial";
    }
  }

  // tutorial part
  else if (gameState === "tutorial") {
    drawTutorialPage(tutorialBoard);
  }

  else if (gameState === "tutorial2") {
    drawTutorialPage(tutorialBoard2);
  }

  else if (gameState === "tutorial3") {
    drawTutorialPage(tutorialBoard3);
  }

  // order page
  else if (gameState === "orderPage") {

    // draw the cafe background
    let oW = cafeOrderPage.width * globalscale;
    let oH = cafeOrderPage.height * globalscale;
    image(cafeOrderPage, (width - oW) / 2, (height - oH) / 2, oW, oH);

    // draw the dayoneboard
    drawDayOneBoard();
    drawRightClicker();
    drawScorePopup();


    if (dayOneState === "counting" && !hasCustomer) {
      spawnCustomer();
    }
  
    
    // customer appear
    if (hasCustomer && currentCustomer.state !== "done") {
      currentCustomer.update();
      currentCustomer.display();
    }
    
    
    
  }

  else if (gameState === "kitchen") {

    // draw kitchen background (fixed scale)
    let kW = kitchenPage.width * globalscale;
    let kH = kitchenPage.height * globalscale;
    image(kitchenPage, (width - kW) / 2, (height - kH) / 2, kW, kH);
  
  
    drawLiquidMachine();
    drawTeaButton();    
    drawOrangeJuiceButton(); 
    drawCoffeeButton(); 
    drawRedBeanBowl();
    drawBlackBobaBowl(); 
    drawCoconutBowl(); 
    drawFinishButton();
    drawPlaceCup(); 
    drawLeftClicker();
    drawScorePopup();

  }
  
}

function drawTutorialPage(boardImg) {

  // background for turorial
  let bW = blurImage.width * globalscale;
  let bH = blurImage.height * globalscale;
  image(blurImage, (width - bW) / 2, (height - bH) / 2, bW, bH);

  // board scale
  let displayW = boardImg.width * globalscale;
  let displayH = boardImg.height * globalscale;
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
    tint(200); // learnt tint from p5js, a transparant cover layer to make the buttons look like being pressed down
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
  // board clicker click
  if (dayOneState === "result" && showBoardClicker) {

    let bcW = boardClicker.width * globalscale * 0.25;
    let bcH = boardClicker.height * globalscale * 0.25;
    let bcX = 725;
    let bcY = 400;

    if (mouseX > bcX && mouseX < bcX + bcW && mouseY > bcY && mouseY < bcY + bcH) {
      showBoardClicker = false;
      showResultText = true;
      return;
    }
  }


  // click restart
  if (dayOneState === "result" && showResultText) {

    let rW = restartButton.width * globalscale * 0.3;
    let rH = restartButton.height * globalscale * 0.3;

    let rX = 550;
    let rY = 450;

    if (mouseX > rX && mouseX < rX + rW && mouseY > rY && mouseY < rY + rH) {
      restartGame();
      return;
    }
  }



    // orderPage -> kitchen
  if (gameState === "orderPage" && mouseInRightClicker()) {
    gameState = "kitchen";
    return;
  }

  // kitchen -> orderPage
  if (gameState === "kitchen" && mouseInLeftClicker()) {
    gameState = "orderPage";
    return;
  }


  if (mouseInCancel()&& (gameState === "tutorial" || gameState === "tutorial2" || gameState === "tutorial3")) { // you can canel the tutorial whenever you want
    gameState = "orderPage";
    dayOneState = "showing";
    dayOneStartTime = millis(); // start to count down
  
    //  full scale
    boardW = dayOneBoard.width * globalscale;
    boardH = dayOneBoard.height * globalscale;
  
    boardX = (width - boardW) / 2;
    boardY = (height - boardH) / 2 ;
  
    // final small scale
    targetW = boardW * 0.3;
    targetH = boardH * 0.3;
  
    targetX = width/2 - 100;
    targetY = 0;
  
    return;
  }

    // kitchen drink buttons (click to change drink)
  if (gameState === "kitchen") {

    // tea button
    let tW = teaButton.width * globalscale * 0.1;  
    let tH = teaButton.height * globalscale * 0.1;
    let tX = 100;
    let tY = 200;
    if (mouseX > tX && mouseX < tX + tW && mouseY > tY && mouseY < tY + tH) {
      currentDrink = "tea";
      return;
    }

    // orange button
    let ojW = orangeJuiceButton.width * globalscale * 0.1;
    let ojH = orangeJuiceButton.height * globalscale * 0.1;
    let ojX = 220;
    let ojY = 200;
    if (mouseX > ojX && mouseX < ojX + ojW && mouseY > ojY && mouseY < ojY + ojH) {
      currentDrink = "orange";
      return;
    }

    // coffee button
    let cbW = coffeeButton.width * globalscale * 0.1;
    let cbH = coffeeButton.height * globalscale * 0.1;
    let cbX = 340;
    let cbY = 200;
    if (mouseX > cbX && mouseX < cbX + cbW && mouseY > cbY && mouseY < cbY + cbH) {
      currentDrink = "coffee";
      return;
    }
  }

  if (gameState === "kitchen") {

    // red bean topping
    let rbW = redBeanBowl.width * globalscale * 0.2;
    let rbH = redBeanBowl.height * globalscale * 0.2;
    if (mouseX > 570 && mouseX < 570 + rbW && mouseY > 300 && mouseY < 300 + rbH) {
      currentTopping = "redbean";
      return;
    }
  
    // boba topping
    let bbW = blackBobaBowl.width * globalscale * 0.2;
    let bbH = blackBobaBowl.height * globalscale * 0.2;
    if (mouseX > 850 && mouseX < 850 + bbW && mouseY > 300 && mouseY < 300 + bbH) {
      currentTopping = "boba";
      return;
    }
  
    // coconut jelly topping
    let cbW = coconutBowl.width * globalscale * 0.2;
    let cbH = coconutBowl.height * globalscale * 0.2;
    if (mouseX > 650 && mouseX < 650 + cbW && mouseY > 480 && mouseY < 480 + cbH) {
      currentTopping = "coconut";
      return;
    }

    // finish button (submit)
    let fbW = finishButton.width * globalscale * 0.2;
    let fbH = finishButton.height * globalscale * 0.2;
    let fbX = 700;
    let fbY = 650;

    if (mouseX > fbX && mouseX < fbX + fbW && mouseY > fbY && mouseY < fbY + fbH) {
      submitOrder();
      return;
    }

  }
  
}


function mouseInCancel() {
  return (mouseX > cancelX && mouseX < cancelX + cancelW && mouseY > cancelY && mouseY < cancelY + cancelH);
}

function drawDayOneBoard() {

  if (dayOneState === "none") {
    return;
  }

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

    // lerp movement learnt rom p5js
    boardX = lerp(boardX, targetX, 0.05); // lerp is calculates a number between two numbers at a specific increment.(from p5 reference)
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
    let elapsed = floor((millis() - dayOneStartTime) / 1000); // mills -> learnt from p5js and floor() leanrt from chatgpt to improve the logic of countdown, or the number of countdown gonna change once per frame
    let remaining = dayOneTimer - elapsed;
    if (remaining < 0) {
      remaining = 0;
    }; // make sure the coundown never go bwlow 0

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
    // countdown stopped
    if (remaining === 0) {

      dayOneState = "ending";

      // stop all the customer
      hasCustomer = false;


      // set the target to get the larger board
      targetW = dayOneBoard.width * globalscale;
      targetH = dayOneBoard.height * globalscale;
      targetX = (width - targetW) / 2;
      targetY = (height - targetH) / 2;
    }

  }

  if (dayOneState === "ending") {

    // board getting larger 
    boardX = lerp(boardX, targetX, 0.06);
    boardY = lerp(boardY, targetY, 0.06);
    boardW = lerp(boardW, targetW, 0.06);
    boardH = lerp(boardH, targetH, 0.06);
  
    image(dayOneBoard, boardX, boardY, boardW, boardH);
  
    // result showing
    let d = dist(boardX, boardY, targetX, targetY);// dist learnt from p5js; find the distance from the orginal location and the target place
    if (d < 8) { // when the distance < 8, showing the result
      dayOneState = "result";
      showBoardClicker = true;
    }
    
  
    return;
  }

  if (dayOneState === "result") {

    image(dayOneBoard, boardX, boardY, boardW, boardH);
  
    textAlign(CENTER, CENTER);
    noStroke();
  
    if (!showResultText) {
      // show the score
      fill(0);
      textSize(boardH * 0.18);
      text("SCORE", boardX + boardW / 2, boardY + boardH * 0.42);
  
      fill(185, 60, 60);
      textSize(boardH * 0.22);
      text(score, boardX + boardW / 2, boardY + boardH * 0.58);
    } 
    else {
      // pass or fail
      fill(0);
      textSize(boardH * 0.2);
  
      let resultText = score > 1000 ? "YOU PASSED" : "YOU FAILED";
      text(resultText, boardX + boardW / 2, boardY + boardH * 0.48);
    }
  
    // board clicker
    if (showBoardClicker) {
      drawBoardClicker();
    }
  
    // restart button
    if (showResultText) {
      drawRestartButton();
    }
  
    return;
  }
  
  
  
}

class customers {
  constructor(img, orderImg, orderData) {

    this.img = img;
    this.orderImg = orderImg;
    this.order = orderData;   

    // size
    this.w = this.img.width * globalscale * 0.35;
    this.h = this.img.height * globalscale * 0.35;

    // start position
    this.x = width + this.w;
    this.y = height / 2 - 40;

    // mid point of the screen
    this.targetX = width / 2 + 180;

    this.speed = 6;
    this.state = "entering"; // entering -> waiting -> leaving
  }


  update() {
    if (this.state === "entering") {
      this.x -= this.speed; // steadly entering the screen
      if (this.x <= this.targetX) {
        this.x = this.targetX;
        this.state = "waiting";
      }
    }

    else if (this.state === "leaving") {
      this.x += this.speed;
      if (this.x > width + this.w) {
        this.state = "done";
        hasCustomer = false; // dispear from the screen, the customer state became false and ready for the next customer
      }
    }
  }

  display() {
    // draw customer
    image(this.img, this.x, this.y, this.w, this.h);
  
    // draw order box above head
    if (this.state === "waiting" && this.orderImg) {
  
      let oW = this.orderImg.width * globalscale * 0.4;
      let oH = this.orderImg.height * globalscale * 0.4;
  
      let oX = this.x + this.w / 2 - oW / 2;
      let oY = this.y - oH + 20;
  
      image(this.orderImg, oX, oY, oW, oH);
    }
  }
  

  finishOrder() {
    this.state = "leaving";
  }

}

function spawnCustomer() {
  if (hasCustomer) { // check if has customer to aviod crashing
    return;
  }

  let r = random(100); // 0 -> 100
  let index;
  if (r < 20) { // c1
    index = 0;   
  }
  else if (r < 40) { // c2
    index = 1;
  }
  else if (r < 60) { // c3
    index = 2;
  }
  else if (r < 80) { // c4
    index = 3;
  }
  else { // c5
    index = 4;
  }

  currentCustomer = new customers(
    customerImgs[index],
    orderImgs[index],
    orders[index]
  ); // fix order and order image for one customer

  hasCustomer = true;
}



function drawRightClicker() {
  if (dayOneState === "none") { // check thr state of which screen to aviod crashing
    return;
  }
  if (gameState !== "orderPage") { // crashed once, and teh right clicker appeared on kitche page
    return;
  }
  rcW = 140;
  rcH = 140;

  rcX = 960;
  rcY = height/2;

  let hovering = mouseX > rcX && mouseX < rcX + rcW && mouseY > rcY && mouseY < rcY + rcH;

  if (hovering){
    tint(200);
  } 

  image(rightClicker, rcX, rcY, rcW, rcH);
  tint(255);
}

function mouseInRightClicker() {
  return mouseX > rcX && mouseX < rcX + rcW && mouseY > rcY && mouseY < rcY + rcH;
}

function drawLeftClicker() {
  if (gameState !== "kitchen") { // check if kitchen to aviod crashing
    return;
  }

  lcW = 140;
  lcH = 140;

  lcX = 10;
  lcY = height/2;

  let hovering = mouseX > lcX && mouseX < lcX + lcW && mouseY > lcY && mouseY < lcY + lcH;

  if (hovering){
    tint(200);
  } 
  image(leftClicker, lcX, lcY, lcW, lcH);
  tint(255);
}

function mouseInLeftClicker() {
  return mouseX > lcX && mouseX < lcX + lcW && mouseY > lcY && mouseY < lcY + lcH;
}

function drawLiquidMachine() {
  if (gameState !== "kitchen") { // has to be kitchen
    return;
  }

  let lmW = liquidMachine.width * globalscale * 0.5
  let lmH = liquidMachine.height * globalscale * 0.5;

  let lmX = 30;
  let lmY = 0;

  image(liquidMachine, lmX, lmY, lmW, lmH);
}

function drawPlaceCup() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  // cup size  
  let pcW = placeCup.width * globalscale * 0.35;
  let pcH = placeCup.height * globalscale * 0.35;

  let pcX = 80;
  let pcY = 460;

  // draw cup holder
  image(placeCup, pcX, pcY, pcW, pcH);

  // choose drink image
  let img = emptyGlass;
  if (currentDrink === "coffee") {
    img = coffeeDrink;
  }
  else if (currentDrink === "orange") {
    img = orangeDrink;
  }
  else if (currentDrink === "tea") {
    img = teaDrink;
  }

  let dX = 200
  let dY = 400
  let dW = img.width * globalscale * 0.2;
  let dH = img.height * globalscale * 0.2;

  image(img, dX, dY, dW, dH);

  // draw topping ABOVE drink
  let toppingImg;

  if (currentTopping !== "none") {
    if (currentTopping === "redbean") {
      toppingImg = redBeanTopping;
    }
    else if (currentTopping === "coconut") {
      toppingImg = coconutJellyTopping;
    }
    else if (currentTopping === "boba") {
      toppingImg = bobaTopping;
    }

    let tW = toppingImg.width * globalscale * 0.08;
    let tH = toppingImg.height * globalscale * 0.08;

    image(toppingImg, 235, 530, tW, tH);
  }


}


function drawRedBeanBowl() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let rbW = redBeanBowl.width * globalscale * 0.2;
  let rbH = redBeanBowl.height * globalscale * 0.2;

  let rbX = 570;
  let rbY = 300;

  let hovering = mouseX > rbX && mouseX < rbX + rbW && mouseY > rbY && mouseY < rbY + rbH;

  if (hovering){
    tint(200);
  } 
  image(redBeanBowl, rbX, rbY, rbW, rbH);
  tint(255);
}


function drawBlackBobaBowl() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let bbW = blackBobaBowl.width * globalscale * 0.2;
  let bbH = blackBobaBowl.height * globalscale * 0.2;

  let bbX = 850;
  let bbY = 300;

  let hovering = mouseX > bbX && mouseX < bbX + bbW && mouseY > bbY && mouseY < bbY + bbH;

  if (hovering){
    tint(200);
  } 
  image(blackBobaBowl, bbX, bbY, bbW, bbH);
  tint(255);
}


function drawCoconutBowl() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }
  
  let cbW = coconutBowl.width * globalscale * 0.2;
  let cbH = coconutBowl.height * globalscale * 0.2;

  let cbX = 650;
  let cbY = 480;

  let hovering = mouseX > cbX && mouseX < cbX + cbW && mouseY > cbY && mouseY < cbY + cbH;

  if (hovering){
    tint(200);
  } 
  image(coconutBowl, cbX, cbY, cbW, cbH);
  tint(255);
}


function drawCoffeeButton() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let cbW = coffeeButton.width * globalscale * 0.1;
  let cbH = coffeeButton.height * globalscale * 0.1;

  let cbX = 340;
  let cbY = 200;

  let hovering = mouseX > cbX && mouseX < cbX + cbW && mouseY > cbY && mouseY < cbY + cbH;

  if (hovering) {
    tint(200);
  }
  image(coffeeButton, cbX, cbY, cbW, cbH);
  tint(255);
}


function drawOrangeJuiceButton() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let ojW = orangeJuiceButton.width * globalscale * 0.1;
  let ojH = orangeJuiceButton.height * globalscale * 0.1;

  let ojX = 220;
  let ojY = 200;

  let hovering = mouseX > ojX && mouseX < ojX + ojW && mouseY > ojY && mouseY < ojY + ojH;

  if (hovering){
    tint(200);
  } 
  image(orangeJuiceButton, ojX, ojY, ojW, ojH);
  tint(255);
}


function drawTeaButton() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let tW = teaButton.width * globalscale * 0.1;
  let tH = teaButton.height * globalscale * 0.1;

  let tX = 100; 
  let tY = 200;  

  let hovering = mouseX > tX && mouseX < tX + tW && mouseY > tY && mouseY < tY + tH;

  if (hovering){
    tint(200);
  } 
  image(teaButton, tX, tY, tW, tH);
  tint(255);
}


function drawFinishButton() {
  if (gameState !== "kitchen") { // only appear on ktchen page
    return;
  }

  let fbW = finishButton.width * globalscale * 0.2;
  let fbH = finishButton.height * globalscale * 0.2;

  let fbX = 700;
  let fbY = 650;

  let hovering = mouseX > fbX && mouseX < fbX + fbW && mouseY > fbY && mouseY < fbY + fbH;

  if (hovering){
    tint(200);
  } 
  image(finishButton, fbX, fbY, fbW, fbH);
  tint(255);
}


function submitOrder() {
  if (!currentCustomer){ // only appear on ktchen page
    return;
  }

  // order[0] = drink, order[1] = topping
  let correctDrink = currentCustomer.order[0];
  let correctTopping = currentCustomer.order[1];


  if (currentDrink === correctDrink && currentTopping === correctTopping) { // correct order + 100
    score += 100;
    scorePopupText = "+100";
  } 
  else { // incorrect order -50
    score -= 50;
    scorePopupText = "-50";
  }

  scorePopupFrames = 60; // show for about 1 second


  // reset player state
  currentDrink = "empty";
  currentTopping = "none";

  // stop customer
  hasCustomer = false; 

  // my friends' advice -> go back to order page automatically after subbmiting the order
  gameState = "orderPage";

}


function drawScorePopup() {
  if (scorePopupText === "") { // only appear on ktchen page
    return;
  } 

  if (scorePopupFrames <= 0) {
    return;
  }
  
  scorePopupFrames-- ; // only appear one ssecond, so -- in every frame in evry draw action
  
  fill(185, 60, 60);
  textSize(32);
  text(scorePopupText, width - 50, 30);
  
}

function drawBoardClicker() {

  let bcW = boardClicker.width * globalscale * 0.2;
  let bcH = boardClicker.height * globalscale * 0.2;

  let bcX = 725;
  let bcY = 400;

  let hovering = mouseX > bcX && mouseX < bcX + bcW &&  mouseY > bcY && mouseY < bcY + bcH;

  if (hovering) {
    tint(200);
  }
  image(boardClicker, bcX, bcY, bcW, bcH);
  tint(255);
}


function drawRestartButton() {

  let rW = restartButton.width * globalscale * 0.2;
  let rH = restartButton.height * globalscale * 0.2;

  let rX = 550;
  let rY = 450;

  let hovering = mouseX > rX && mouseX < rX + rW && mouseY > rY && mouseY < rY + rH;

  if (hovering) {
    tint(200);
  }
  image(restartButton, rX, rY, rW, rH);
  tint(255);
}


function restartGame() {

  // game state
  gameState = "start";

  // day one
  dayOneState = "none";
  showBoardClicker = false;
  showResultText = false;

  // gameplay
  score = 0;
  hasCustomer = false;


  // visuals
  pulseScale = 1;
}
