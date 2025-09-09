//Image Basics
//Mr. Scott
//Feb 26, 2025

//Global Variables
let lionL, lionR;
let pinImages = []; // 0-8
let currtntFrame = 0;

function preload() {
  lionL = loadImage("asset/lion-left.png");
  lionR = loadImage("asset/lion-right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  image(lionL, mouseX, mouseY);
}
