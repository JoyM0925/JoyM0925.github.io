//Challenge

let x = 0, y = 0;
let size =20;
let speed = 5;
let direction = 'R';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  square();
}

function square() {
  fill(0);
  square(x, y, size);

}
