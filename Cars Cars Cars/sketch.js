// Cars Cars Cars
// Joy Min
// March 21, 2025

let singleCar;

function setup() {
  createCanvas(800, 500);
  singleCar = new Car(width/2, height/2, this.color);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  // create the whole road
  fill(0);
  rect(0, 100, width, 300);
  // create the yellow dot lines in the middle of the road
  for (let i = -20; i < width; i+=40) {
    fill(225, 255, 0);
    rect(i+20, height/2, 30, 5);
  }
}

class Car{
  //1. constructor
  constructor(x,y){
    this.x = x;   
    this.y = y;   
    this.size = 20;
    this.c = color(random(255),random(255),random(255));
  }
  //2. class methods
  display(){  //render the walker on screen
    rectMode(CENTER);
    fill(this.c);
    rect(x, y, 60, 40);
  }

  move(){
  }
}