// PlNETS And Moons
// Joy Min
// March 19

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.creatMoons();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  //1. Constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }
  //2. Class Functions
  display(){
    //draw the planets + all the moons
    circle(this.x, this.y, this.s);
    for(let m of this.moons){
      m.update();
    }
  }

  relocate(x, y){
    this.x = x;
    this.y = y;
    for(let m of this.moons){
      m.x = x;
      m.y = y;
    }
  }

  creatMoons(){
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.angle = 0;
    this.orbitRadius = 80;
    this.s = 25;
  }

  update(){
    //handles all internal class function calls
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}