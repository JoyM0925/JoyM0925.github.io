// Project Title
// Your Name
// Oct 10
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global ---
let myBall;
let ballCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball (100,100)
}

function draw() {
  background(220);
  // process simple ball object
  myBall.move();
  myBall.display();

  //add new objects to Array
  if(mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY))
  }

  // process COLLECTION of objects
  for(let b of ballCollection){
    b.move()
    b.display()
  }
}

class Ball{
  // 1. Constructor
  constructor(x,y){
    this.x = x; 
    this.y = y;
    this.c = color(random(255),random(255),random(255));
    this.size =15; 
    this.speed = random(2,10)
  }
  // 2. CLass Methods/ Functions
  display(){
    fill(this.c);
    circle(this.x, this.y,this.size);
  }
  move(){
    // horizontal movement only
    this.x += this.speed;
    if(this.x > width){
      this.x = 0
    }

  }
}