// Planets and Moon
// Joy Min
// Oct 17, 2025
// Overwriting Objects, basic transform

// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2)
}

function draw() {
  background(30);
  myPlanet.createMoon();
  myPlanet.display();
}

function mousePressed(){
  // regular click -> add a moon
  // shift click -> reset the moon
  if ( keyIsDown && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2)
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY; 
  }
}

class Planet{
  // constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }

  // class methods

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  // class methods
  display(){
    // draw the planet + all of its moons
    noStroke();
    fill(253, 242, 93);
    circle(this.x , this.y, this.s);

    // for the moons
    for (let m of this.moons){
      m.updates();
    }
  }
}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = random(0.11,1);
    this.angle = 0;
    this.orbitRadius = random(80, 500);
    this.s = random(5, 30);
    this.c = color(random(255),random(255),random(255));
  }

  display(x,y){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(this.c);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move(){
    this.angle += this.speed;

  }

  updates(x, y){
    // helper function to hadle calling the
    // class method internally
    this.move();
    this.display(x,y);
  }
}