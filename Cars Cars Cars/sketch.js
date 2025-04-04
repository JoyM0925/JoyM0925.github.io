// Cars Cars Cars
// Joy Min
// March 21, 2025

let v; 
let eastbound = []; // to hold all our cars in eastbound
let westbound = []; // to hold all our cars in westbound

function setup() {
  createCanvas(800, 500);

  for (let i = 0; i < 20; i++) { // push 20 Vehicles into each array
    // upper lane: moving LEFT
    let v1 = new Vehicle(int(random(2)), random(width), random(120, 220), 0, random(-5, -2));  // direction 0 = left
    westbound.push(v1); // add to west array

    // lower lane: moving RIGHT
    let v2 = new Vehicle(int(random(2)), random(width), random(280, 370), 1, random(2, 5));    // direction 1 = right
    eastbound.push(v2); // add to east array
  }

}

function draw() {
  background(220);
  drawRoad(); // draw the road

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
  fill(0);
  rect(0, 100, width, 300);

  // dashed yellow line
  for (let i = 0; i < width; i += 40) {
    fill(225, 225, 0);
    rect(i, height / 2, 30, 5);
  }

}

class Vehicle {
  constructor(type, x, y, direction, xSpeed) {
    this.type = type; // there are two types of vehivles, 0 = car, 1 = truck
    this.x = x; // x position
    this.y = y; // y position
    this.direction = direction; 
    this.xSpeed = xSpeed;
    this.color = color(random(120,200), random(120, 200), random(120, 200) ); // i choose the range of colors which makes morandi colors like, make the color of the window more balanced

  }

  display() {
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

    } else { // 1 = truck
      // drawing the truck
      fill(this.color);
      rect(this.x, this.y, 60, 30); // body

      fill(200, 220, 240);
      rect(this.x - 20, this.y, 20, 30); // the windowsheild(guess it spell so)
    }

    rectMode(CORNER);

  }

  move() { // the movement of the vehicles
    this.x += this.xSpeed; // adjust location according to the location


    // if the vehicle runs out of one side of the window, then let it appear on another side of the window
    if (this.x > width && this.direction === 1) { 
      this.x = 0;
    } else if (this.x < 0 && this.direction === 0) {
      this.x = width;
    }

  }

  speedUp() { // speed up for vehicles
    if (this.direction === 1 && this.xSpeed < 15) {
      this.xSpeed += 0.2;
    } else if (this.direction === 0 && this.xSpeed > -15) {
      this.xSpeed -= 0.2;
    }

  }

  speedDown() { // speed down for vehicles
    if (this.direction === 1 && this.xSpeed > 0) {
      this.xSpeed -= 0.2;
    } else if (this.direction === 0 && this.xSpeed < 0) {
      this.xSpeed += 0.2;
    }

  }

  changeColor() { // random colors but in morandi colors range
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

function mousePressed() {
  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {
      // SHIFT + LEFT
      let type = int(random(2));
      let y = random(120, 220); // uppper lane
      let v3 = new Vehicle(type, mouseX, y, 0, random(-5, -2));
      westbound.push(v3);
    } else {
      // NORMAL LEFT
      let type = int(random(2));
      let y = random(280, 370); // down lane
      let v4 = new Vehicle(type, mouseX, y, 1, random(2, 5));
      eastbound.push(v4);
    }
  }
}
