// Interactive Scene
// Joy Min
// Sep 16

let c1x = 100; // first cloud's x position
let c1y = 100; // first cloud's y position

let c2x = 400; // second cloud's x position
let c2y = 130; // second cloud's y position


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(153, 204, 255);
  mountain()
  river()
  cloud()
  moveofcloud()
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
  if (keyIsDown(65)){//a is pressed
    c1x -=10;
  }
  if (keyIsDown(68)){//a is pressed
    c1x +=10;
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

