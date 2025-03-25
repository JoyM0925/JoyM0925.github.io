// Cars Cars Cars
// Joy Min
// March 21, 2025

let v; 
let east = []; 
let west = [];

function setup() {
  createCanvas(800, 500);
  for(let i = 0; i< 20; i++) {// create westward cars
    let y = random(120,230);
    v = new Vehicle(0, random(width), y, 0, random(2, 5));
    west.push(v);
    // create eastward cars
    y = random(270,380);
    v = new Vehicle(0, random(width), y, 0, random(2, 5));
    east.push(v);
  }
}

function draw() {
  background(220);
  drawRoad();
  v.display();
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

class Vehicle{
  //1. constructor
  constructor(type, x, y, direction, xspeed){
    this.x = x;   
    this.y = y;
    this.c = color(random(30, 255),random(30, 255),random(30, 255));
    this.xspeed = xspeed;
    this.d = direction;
    this.t = type;
  }
  //2. class methods
  display(){  
    rectMode(CENTER);
    fill(this.c);
    if (this.t === 0){
      rect(this.x, this.y, 40, 20); // a car
    }
    else{
      rect(this.x, this.y, 60, 20);// a truck
    }
    rectMode(CORNER);
  }

  move(){
  }
}