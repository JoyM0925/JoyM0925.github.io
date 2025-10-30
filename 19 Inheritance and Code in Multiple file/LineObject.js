class LineObject extends AnimatedObject{
    constructor(){
      super(random(width), random(height));
    }
  
    move(){ // combo override, but built on parent version
      super.move(); // runs the parent version move();
      this.x -= 5;
      if (this.x < 0){
        this.x = width   
      }
    }
  
    display(){
      if (mouseIsPressed){
        strokeWeight(12);
      }
      else{
        strokeWeight(3);
      }
      line(this.x, this.y, this.x + 15, this.y);
    }
  }