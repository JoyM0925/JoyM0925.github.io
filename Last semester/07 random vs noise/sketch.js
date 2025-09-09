// Random vs Noise
// Joy Min
//Feb 28

let mySeed;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.1;

function setup() {
  createCanvas(600,600);
  mySeed = random(1000);
  textAlign(CENTER, CENTER);
}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
}

function randomNumbers() {
  let x = 100;
  while( x<= 500){
    let randomNum = round(random(1,100));
    fill(200, 140, 140);
    noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 200);
    x += 50;
  }
}

function noiseNumbers() {
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime);
    randomNum = map(randomNum, 0, 1, 1, 100);
    randomNum = round(randomNum);
    fill(140, 220, 140);
    noStroke();
    circle(x, 400, randomNum);
    fill(0);
    text(randomNum, x, 400);
    x += 50;
    noiseTime += noiseSpeed;
  }
}