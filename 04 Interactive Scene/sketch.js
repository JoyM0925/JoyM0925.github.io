// Interactive Scene
// Joy Min
// Feb 25, 2025


let currentBack = 0;
let origColor = [0, 0, 39];// original background color
let backgroundColor; // background color situation


function setup() {
  createCanvas(950, 650);
}




function draw() {
  changeBackground();
  drawthewholeplanet();
  drawanaerolite();
  drawSmallPlanet();
  mysignature();
}


function changeBackground() {
  let redValue = map(mouseY, 0, height, 0, 255); // chang the color of the background is depending on both how close theaerolite close to the planet and the currentback value


  // if current back = 0, background as normal
  if (currentBack === 0) {
    backgroundColor = color(redValue, 0, 39);
  }
  // if background is not = 0, use other color
  else if (currentBack === 1) {
    backgroundColor = color(50, 50, 150);
  } // blue
  else if (currentBack === 2) {
    backgroundColor = color(100, 50, 100);
  } // violet
  else if (currentBack === 3) {
    backgroundColor = color(180, 50, 50);
  }// orange


  background(backgroundColor);
}


function keyPressed() {
  // press R to reset background color
  if (key === 'r') {
    currentBack = 0; // reset background color
  }
  // every time press any other button, background color change
  else {
    currentBack = currentBack + 1; // 0 → 1 → 2 → 3 → 0
    if (currentBack >= 4 ){// start over again
      currentBack = -1;
      currentBack = currentBack + 1; 
    }
  }
} 




function drawthewholeplanet() {
  drawtheplanet();
  noStroke();
  fill(170, 145, 67);// start draw the dits
  circle(600, 640, 78);
  noStroke();
  fill(170, 140, 67);
  circle(190, 570, 85);
  noStroke();
  fill(170, 135, 67);
  circle(300, 630, 60);
  fill(170, 135, 67);
  circle(250, 490, 30);
  fill(170, 135, 67);
  circle(650, 500, 90);
  fill(170, 145, 67);
  circle(660, 570, 20);
  let redValue = map(mouseY, 0, height, 0, 255);
  fill(170, 155, 67);// start draw the 1 star far away
  square(30, 40, 90);
  fill(backgroundColor);
  circle(30, 40, 90);
  fill(backgroundColor);
  circle(30, 130, 90);
  fill(backgroundColor);
  circle(120, 40, 90);
  fill(backgroundColor);
  circle(120, 130, 90);
  fill(170, 155, 67);// start draw the 2nd star far away
  square(140, 100, 60);
  fill(backgroundColor);
  circle(140, 100, 60);
  fill(backgroundColor);
  circle(200, 100, 60);
  fill(backgroundColor);
  circle(140, 160, 60);
  fill(backgroundColor);
  circle(200, 160, 60);
}




function drawtheplanet() {
  fill(170, 170, 67);
  circle(475, 770, 800);// the planet
  drawFlag(475, 420);
}




function drawanaerolite() {
  fill(128, 128, 128);// the aerolite follows the place of the mouse
  circle(mouseX, mouseY, 60);
  circle(mouseX-10, mouseY-30, 40);
  circle(mouseX-10, mouseY+20, 50);
  circle(mouseX-23, mouseY-10, 55);
  circle(mouseX+20, mouseY-10, 30);
  circle(mouseX, mouseY, 60);
  fill(90, 90, 100);
  circle(mouseX-20, mouseY-15, 10);
  circle(mouseX+6, mouseY+7, 20);
  circle(mouseX-7, mouseY-10, 7);
}


function drawSmallPlanet() {
  fill(120, 150, 255);
  circle(850, 100, 80); // draw the planet
  fill(100, 130, 230);
  ellipse(860, 90, 40, 20); // draw a shadow on the planet
  fill(140, 170, 255);
  ellipse(840, 110, 30, 15); // draw another shadow for depth


}


function drawFlag(x, y) {
  stroke(255);
  strokeWeight(5);
  line(x, y, x, y - 100); // falgpole
  noStroke();
  fill(200, 0, 0);
  rect(x, y - 100, 70, 40); // flag
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Joy", x + 35, y - 80); // myname
}


function mysignature() {
  fill(255);
  textSize(20);
  textAlign(LEFT, BOTTOM);
  text("Joy M", 20, height - 20);
}





