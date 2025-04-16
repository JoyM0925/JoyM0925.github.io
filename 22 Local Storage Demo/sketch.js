// Local Storage Demo
// Joy Min 
// APril 16, 2025

let x, y;
let xSpeed, ySpeed;
let totalBounces = 0;


function setup() {
  createCanvas(300, 200);
  x = width/2; y = height/2;
  xSpeed = 5;
  ySpeed = 3;
  if(localStorage.getItem("numNounces")===null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numNounces"));
  }
  textSize(30);
  textAlign(CENTER, CENTER);


}

function draw() {
  background(220);

  updateBall();
  text(totalBounces, width/2, height/2);
}

function updateBall(){
  x += xSpeed; y += ySpeed;
  if(x < 0 || x > width){
    xSpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  if(y < 0 || y > height){
    ySpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  circle(x, y, 20);
}