// Obejct-Object Interaction
// Joy Min
// October 16, 2025
// Global Variables
let nodes = [];
let reach = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // create one node per mousePress
  nodes.push(new csNode(mouseX, mouseY));
  //[csNode, csNode, csNode]
  //    0        1      2
}

function draw() {
  background(40);
  // loop by item is good when we don't
  // plan on deleting objects from array
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}

class csNode{
  //1. contructor
  constructor(x,y){
    // properties related to position/display
    this.x = x;
    this.y = y;
    this.size = 1;
    this.c = color(random(255),random(255),random(255));

    // peopertoes related to movemen
    this.xTime = random(10);
    this.yTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  // 2. Class Method
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    // use perlin noise for x/y movement
    let xSpeed = noise(this.xTime); // 0 - 1
    xSpeed = map(xSpeed, 0, 1,  -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0){
      this.x = width;
    }
    else if(this.x > width){
      this.x = 0;
    }

    // now the same for Y
    let ySpeed = noise(this.yTime); // 0 - 1
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0){
      this.y = height;
    }
    else if(this.y > height){
      this.y = 0;
    }
  }

  connect(nodeArray){
    // check if the current point is close to any array
    // point. If so, join with a line
    stroke(this.c);
    for (let n of nodeArray){
      // this.x  this.y  n.x  n.y
      if(n !== this){
        let d = dist(this.x, this.y, n.x, n.y)
        if(d < reach){
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}