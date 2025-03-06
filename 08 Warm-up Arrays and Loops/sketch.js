// Warm up Experiences
// 1. Summing an array
// 2. Drawing with Loops Practice

let a = [22, 11, 5, 5, 90, 80, 70, 60];
//        0   1  2  3   4   5   6   7
//a.length is 8


function setup() {
  createCanvas(400, 400);
  background(220);
  let total = 0;
  for(let currentNumber of a) {
    total += currentNumber;
  }

  //for(let i = 0; i < a.length; i++){
  //total = total + a[i];
  //}

  print(total);
  crossCircles()
}

function draw() {

}

function crossCircles() {
  for (let x = 0; x <= width; x += width/10){
    circle(x,x,20);
    circle(x, 400-x, 20);
  }

}