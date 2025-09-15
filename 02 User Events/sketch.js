// User Events - Day 1 Challenge
// Joy M
// September 11. 2025

// Global variables here
// can only work with "simple" data in this
// section of code. No system variables are
// available until in setup(), after4r canvas is made
let circleColor = false;
let currentColor = "white" 
let x;
let y;
let tSize = 50; // for text-font size
//  declaration   initialization

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width / 2;
  y = height / 2 + 50;
}

function draw() {
  let a = 5;
  background(220);
  challenge();
  movement();
  rect(x, y, 60, 30);
  mouseReport()
}

function movement(){
  // check for keyboard pressed each frame
  // and move the rectangle ACCORDINGLY
  if (keyCode === RIGHT_ARROW && keyIsPressed){
    x += 5;
  }
  else if(keyCode  === LEFT_ARROW && keyIsPressed){
    x-=5; 
  }
  if (keyIsDown(UP_ARROW)){
    y-=5
  }
  if(keyIsDown(DOWN_ARROW)){
    y+=5
  }
  if (key ==="r"){
    x= width/2;
    y = height/2 + 50; // reset to the initial place
  }
  if (x>=width){
    x = 0;
  }
  if (x<0){
    x = width;
  }
  if (y>=height){
    y = 0;
  }
  if (y<0){
    y = height;
  }
}


function mouseReport(){
  // inspect some of the built - int(system variables)
  // for working with the mouse
  fill(0);
  let src = mouseX + "," + mouseY + " ," + mouseIsPressed+ "+" + mouseButton;
  textSize(tSize);
  text(src, mouseX, mouseY)
  if(mouseIsPressed){
    tSize = random(10,80);
  }
}

function mousePressed(){
  tSize = random(10,80);
}

function keyPressed(){
  // this is special event function, gets
  // automaticlly called antime a keyboeard
  // button is pressed 

  
  print("key was pressed")
  if(key === "g"){
    currentColor = "green";    
  }
  else if(keyCode === CONTROL){
    currentColor = "aqua";
  }
  circleColor = !circleColor;
  if(key === LEFT_ARROW){
    x=x-10;
  }
}
   
function challenge(){
  noFill();

  if(circleColor){ // circlrColor = true
    fill(currentColor);
  }
  circle(width/2, height/2, 50);// in the middle
  circle(0, 0, 50);// left up corner
  circle(width, 0, 50);// right up cornner
  circle(0, height, 50);// left downn corner
  circle(width, height, 50);// right down corner
}

