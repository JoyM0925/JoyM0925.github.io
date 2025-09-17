// Interactive Scene
// Joy Min
// Sep 16

let c1x = 100; // first cloud's x position
let c1y = 100; // first cloud's y position
let c2x = 400; // second cloud's x position
let c2y = 130; // second cloud's y position
let x = 600;// x position for ship
let y = 550;// y position for ship
let currentBack = 0;
let backgroundColor;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  x = mouseX;
  changeBackground();
  mountain();
  river();
  cloud();
  moveofcloud();
  ship();
  mysignature();

}
function cloud(){
  // first cloud
  noStroke();
  fill(225);
  circle(c1x, c1y, 70);
  circle(c1x+20, c1y+40, 50);
  circle(c1x+30, c1y+0, 90);
  circle(c1x+50, c1y+30, 60);
  circle(c1x+30, c1y+0, 90);
  circle(c1x+70, c1y+0, 60);

  // second cloud
  noStroke();
  fill(225);
  circle(c2x, c2y, 70);
  circle(c2x+20, c2y+40, 50);
  circle(c2x+30, c2y+0, 90);
  circle(c2x+50, c2y+30, 60);
  circle(c2x+30, c2y+0, 90);
  circle(c2x+70, c2y+0, 60);
}

function moveofcloud(){
  if (keyIsDown(65)){//a is pressed, move cloud 1 to the left
    c1x -=10;
  }
  if (keyIsDown(68)){//d is pressed, move cloud 1 to the right
    c1x +=10;
  }
  if (keyIsDown(90)){//z is pressed, move cloud 2 to the left
    c2x -=10;
  }
  if (keyIsDown(67)){//c is pressed, move cloud 12to the right
    c2x +=10;
  }
  //make sure that the clouds can't run out of boudries.
  if (c1x <0){
    c1x = 800;
  }
  if (c1x >800){
    c1x = 0
  }
  if (c2x <0){
    c2x = 800;
  }
  if (c2x >800){
    c2x = 0
  }
  // reset position
  if (key === "r"){ 
    c1x = 100; 
    c1y = 100; 
    c2x = 400; 
    c2y = 130;
    x=600; 
  }
  
}

function river(){
  fill(102, 178, 255);
  stroke(0, 128, 255);
  rect(0,450, 800, 200);//river

}

function mountain(){
  fill(80, 255, 190)
  stroke(0, 153, 76,)
  triangle(215, 600, 330, 250, 550, 600);//mt behind1
  fill(80, 255, 190)
  stroke(0, 153, 76,)
  triangle(600, 600, 700, 250,780, 600);//mt behind2
  fill(51, 255, 150)
  stroke(0, 153, 76,)
  triangle(-220, 600, 215, 200, 450, 600);//mt1
  fill(51, 255, 150)
  stroke(0, 153, 76,)
  triangle(680, 600, 780, 200, 850, 600);//mt2
  fill(0, 255, 128)
  stroke(0, 153, 76,)
  triangle(200, 600, 600, 160, 780, 600);//mt3
  
}

function ship(){
  fill(145, 213, 251);
  stroke(22, 173, 251);
  quad(x-90, y-80, x+180, y-80, x+110, y+20, x-20, y+20); // body of the ship
  fill(145, 213, 251);
  rect(x+50,y-180,3, 100); // flag
  fill(254, 213, 251);
  triangle(x+50, y-150, x+0,y-150,x+50, y-180);
  fill(2, 156, 251) // decoration on ship
  circle(x+10, y-30, 50);
  fill(116, 225, 251);
  circle(x+10, y-30, 30);
  fill(2, 156, 251)
  circle(x+80, y-30, 50);
  fill(116, 225, 251);
  circle(x+80, y-30, 30);
}

function mysignature() {
  fill(255);
  textSize(20);
  text("Joy M", 20, height - 20);
}

function changeBackground() {


  // if current back = 0, background as normal
  if (currentBack === 0) {
    backgroundColor = color(153, 204, 255);
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


