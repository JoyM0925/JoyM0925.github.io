// Working with vector
// Joy Min
// Nov 21, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if (mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  for ( let o of objects){
    if (keyIsDown(32)){
      o.move();
    }
    o.calcMouse();
    o.display()
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector (x, y);
    this.vel = createVector(5, -5);
    this.grav = createVector(0, 0.2); // MOUSE ATTRATOR
  }

  calcMouse(){

  }

  move(){
    this.pos.add(this.grav);
    this.pos.add(this.vel)
  }

  display(){
    // display ball
    circle(this.pos.x, this.pos.y, 20)

    // display vectors
    if(true){ // ??
      stroke (255, 0, 0);
      line (0, 0, this.pos.x, this.pos.y);

      let endX = this.pos.y + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0, 0, 255)
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0, 255, 0);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);


    }
  }
}
