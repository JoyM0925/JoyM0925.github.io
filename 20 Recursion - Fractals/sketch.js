// Fractals Demo
// Mr. scott
//April 14, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // reCircle(width/2, height/2, width);
  // cantor(width*0.1, height*0.3, width*0.8, 9);
  circleFractal(width/2, height/2, height/2);
}

function circleFractal(x, y, d){
  noFill();
  if (d > 1){
    circle(x, y, d);
    circleFractal(x-d/2, y, d/2);
    circleFractal(x+d/2, y, d/2);
    circleFractal(x, y-d/2, d/2);
  }
}

// function cantor(x, y, len, depth){
//   if (depth > 1){
//     line(x, y, x+len, y);
//     y += 20;

//     cantor(x, y, len/3, depth-1);
//     cantor(x+len*2/3, y, len/3, depth-1);
//   }
// }

// function reCircle(x,y,d){
//   circle(x, y, d);
//   if (d >= 10){
//     reCircle(x, y, d*0.9);
//   }
  
// }