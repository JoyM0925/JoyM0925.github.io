// Nested Loops and Popping Bubbles
// Joy Min
// Oct 3, 2025

let bubbles = [];
let bubbleSize =10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawWithGrid()
  populateArray();
}

function populateArray(){
  // used a nested loop to generate x, y positions for 
  // all of or bubbles
  for(let x = 0; x < width; x+=bubbleSize){
    for(let y = 0; y < height; y+=bubbleSize){
      let b = {
        x: x,  y:y
      }
      bubbles.push(b);
    }
  }
}

function showBubbles(){
  // traverse the array, and display a bubble at
  // each (x, y)
  for (let i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize)
    // point-in-circle distance check (pop)
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      // to delete an item: use .splice()
      // .splice(pos, #ofItemsToDel [replacementItems])
      bubbles.splice(i, 3)
    }
  }
}

function draw() {
  background(220);
  showBubbles()
}

// function drawWithGrid(){
//   for ( let x = 0; x <= windowWidth; x+=30){
//     for( let y = 0; y <= windowHeight; y+=30){
//       circle(x, y, 10);
//     }
//   }
// }