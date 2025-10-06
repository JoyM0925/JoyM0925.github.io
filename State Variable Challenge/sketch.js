// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 40

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
  movement();
}

// function movement(){
//   rectMode(CORNER)
//   for (let x = 0; x < 800 - rectWith; x+=1){
//     if (x = 800 - rectWith && y === 0){
//       for (let y = 0; y < 800 - rectWith; y+=1){
//         if (y = 800 - rectWith && x === 800 - rectWith){
//           while ( y === 800 - rectWith && x !== 0){
//             x -= 1;
//             while ( x === 0 && y === 800 - rectWith){
//               y -= 1;
//             }
//             rect (x,y,rectWith, rectWith)
//           }
//         }
//       }
//     }
//   }
// }


function movement(){
  rectMode(CORNER);
  for ( let x = 0; x < 800 - rectWidth; x+=10){
    rect(x, 0, rectWidth)
  }
}