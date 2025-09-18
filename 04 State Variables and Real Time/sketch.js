// state Variable and real time
// Joy Min
// September 18, 2025

// Global Variables
let shapestates = 0; // 0-circle 1- square 2 - triangle 3-transistion
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  background(220);
  drawshape();
  magageTimer();
  if(shapestates === 3 && elapsedTime>2000){
    shapestates = 0;
  }
}

function Keypressed(){
  if(shapestates < 3){
    shapestates ++;
    if(shapestates === 3)
      startTime = millis();
  }
}

function magageTimer(){
  elapsedTime = millis() - startTime;
  text((elapsedTime/1000).toFixed(2), width*0.3, height*0.75)
}

function drawshape(){
  //inspect or state variable, and draw 1 of 4 possible
  //options, depending on the current value
  switch(shapestates){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;
      let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for(let i = 0; i<20; i++){
        let x = random(width*0.4, width*0.6);
        let y = random(height*0.4, height*0.6);
        line(x, y, x+25, y)
      }
  }
}