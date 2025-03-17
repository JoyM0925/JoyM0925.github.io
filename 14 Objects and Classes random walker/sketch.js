// OACRW
// JM
// M 14

let singleWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "green");
}

function draw() {
  background(220);
  singleWalker.display();
}

class Walker {
  // 1. constructor
  constructor(x, y, c){
    this.x = x; this.y = y, this.c = c;
    this.speed = random(2,10);
    this.size = 5;

  }
  // 2. class method
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);

  }

  move(){
    
  }
}