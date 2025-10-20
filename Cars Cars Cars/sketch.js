// Cars Cars Cars
// Joy Min
// Oct 20, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawRoad();
}

function drawRoad() {
  // black road surface
  fill(50);
  rect(0, 100, width, 300);

  // dashed yellow line
  for (let i = 0; i < width; i += 40) {
    fill(225, 225, 0);
    noStroke();
    rect(i, 500 / 2, 30, 5);
  }

}

class Vehicles{
  constructor(type, x, y, d, s){
  // type -> type of cars; x -> x-position; y -> y-position; d -> direction; s -> speed
    this.type = type;
    this.x = x;
    this.y = y;
    this.d = d;
    this.s = s;
    this.color = color(random(120,200), random(120, 200), random(120, 200) );
  }

  display(){

    rectMode(CENTER);
    if (this.type === 0) { // 0 = car
      cars();
    } 
    else{
      trucks(); // 1 = truck
    }
    rectMode(CORNER);
  }
}

function cars(){
  // drawing the car
  fill(this.color);
  rect(this.x, this.y, 40, 20); // body of the car
  // 4 wheels of the car
  fill(255);
  ellipse(this.x - 15, this.y - 10, 6, 6); // left up wheel
  ellipse(this.x + 15, this.y - 10, 6, 6); // right up wheel
  ellipse(this.x - 15, this.y + 10, 6, 6); // left down wheel
  ellipse(this.x + 15, this.y + 10, 6, 6); // right down wheel
}

function trucks(){
  // drawing the truck
  fill(this.color);
  rect(this.x, this.y, 60, 30); // body

  fill(200, 220, 240);
  rect(this.x - 20, this.y, 20, 30); // windowsheild
}