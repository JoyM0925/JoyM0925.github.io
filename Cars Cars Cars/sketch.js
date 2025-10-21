// Cars Cars Cars
// Joy Min
// Oct 20, 2025
let myV;
let eastbound = []; // to hold all our cars in eastbound
let westbound = []; // to hold all our cars in westbound

function setup() {
  createCanvas(windowWidth, windowHeight);
  for ( let i = 0; i < 20; i++){ 
    // hold 20 cars in the westbound
    let myV1 = new vehicles(int(random(2)), random(width), random(120, 200), 0, random(-10, 5));
    westbound.push(myV1);
    // hold 20 cars in the eastbound
    let myV2 = new vehicles(int(random(2)), random(width), random(280, 370), 1, random(5, 10));
    eastbound.push(myV2);
  }
}

function draw() {
  drawRoad();
  // every car runs towards east runs its action
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
  

  // every car runs towards west runs its action
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }

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

class vehicles{
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
    else{
      // drawing the truck
      fill(this.color);
      rect(this.x, this.y, 60, 30); // body

      fill(200, 220, 240);
      rect(this.x - 20, this.y, 20, 30); // windowsheild
    }
    rectMode(CORNER);
  }

  move() { // the movement of the vehicles
    this.x += this.s; // adjust location according to the location

    // if the vehicle runs out of one side of the window, then let it appear on another side of the window
    if (this.x > width && this.d === 1) { 
      this.x = 0;
    } 
    else if (this.x < 0 && this.d === 0) {
      this.x = width;
    }

  }

  speedUp() { // speed up for vehicles
    if (this.d === 1 && this.s < 15) {
      this.s += 0.2;
    } 
    else if (this.d === 0 && this.s > -15) {
      this.s -= 0.2;
    }

  }

  speedDown() { // speed down for vehicles
    if (this.d === 1 && this.s > 0) {
      this.s -= 0.2;
    } 
    else if (this.d === 0 && this.s < 0) {
      this.s += 0.2;
    }

  }

  changeColor() { // random colors 
    this.color = color(random(120,200), random(120, 200), random(120, 200) );

  }

  action() { // every action could lead to a random change
    this.move();
    if (random(1) < 0.01) this.speedUp(); // 1% of change speed up
    if (random(1) < 0.01) this.speedDown(); // 1% of speed down
    if (random(1) < 0.01) this.changeColor(); // 1% of change color 
    this.display();

  }
}

