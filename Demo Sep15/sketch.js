// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 200;
let y = 200;
let h = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  alien();
  movement();
}
// function alien(){
//   //head
//   rectMode(CENTER);
//   fill(255, 204, 229); 
//   circle(x, y, h);
//   noStroke();
//   rect(x, y+h/4,h, h/2);
//   fill(255, 204, 229);
//   rect(x-46,y+65, 8, 30); // left leg
//   rect(x+46,y+65, 8, 30); // right leg
//   fill(255, 102, 178 )
//   circle(x-30,y,10); // left eyes
//   circle(x+25,y,10); // right eyes
//   rect(x-2,y+20,40,3);
// }

function alien(){
  fill(255, 204, 229); 
  circle(x, y, h);
  noStroke();
  rect(x-50, y,h, h/2);
  fill(255, 204, 229);
  rect(x-50,y+h/2, 8, 30);
  rect(x+42,y+h/2, 8, 30);
  fill(255, 102, 178 );
  circle(x-30, y, 10);
  circle(x+20, y, 10);
  rect(x-20, y+20, 40, 3);
}

function movement(){
  if (keyCode === RIGHT_ARROW && keyIsPressed){
    x += 10;
  }
  else if(keyCode  === LEFT_ARROW && keyIsPressed){
    x-= 10; 
  }
  if (keyIsDown(UP_ARROW)){
    y-=10
  }
  if(keyIsDown(DOWN_ARROW)){
    y+=10
  }
  if (key ==="r"){
    x= width/2;
    y = height/2 ; // reset to the initial place
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
