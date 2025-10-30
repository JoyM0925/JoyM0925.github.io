// Child Class #1 - Circle
class CircleObject extends AnimatedObject{
    constructor(x, y){
      super(x, y);
      // we can also add-on what was in the parent class
      this.size = random(20, 40);
    }
  
    // no mention of move()... it will be same as parent's move()
  
    display(){ // function ovverride; copies overtop of parent version
      if (dist (this.x, this.y, mouseX, mouseY) < this.size/2){
        fill(255, 204, 229);
      }
      else{
        fill(color(random(0,255)));
      }
      strokeWeight(3)
      circle(this.x, this.y, this.size);
    }
  }