// Image Exercises Sample
// Joy Min
// Nov 14, 2025

// FIRST IMAGE---------------------------------CHIP

// let myImage;

// async function setup() {
  
//   pixelDensity(1);
//   //myImage = await loadImage("assets/nuit.jpg");
//   myImage = await loadImage("assets/chip.jpg");
//   createCanvas(600, 600);
// }

// // For each pixel, remove the red component (set to 0)
// //                 halve the blue component
// // R G B A R G B A

// function colorEffect() {
//   //use the single loop strategy
//   for (let i = 0; i < pixels.length; i += 4){
//     let r = pixels[i]; // R
//     let g = pixels[i + 1]; // G
//     let b = pixels[i + 2]; // B
//                            // Nothing for A
//
//     // Determine which RGB value is the greatest.
//     if (r >= g && r >= b){
//       // Red is the largest -> set this pixel to pure red
//       pixels[i] = 255; // R
//       pixels[i + 1] = 0; // G
//       pixels[i + 2] = 0; // B
//     } 
//
//       else if (g >= r && g >= b){
//       // Green is the largest -> set this pixel to pure green
//       pixels[i] = 0; // R
//       pixels[i + 1] = 255; // G
//       pixels[i + 2] = 0; // B
//     } 
//
//       else{
//       // Otherwise blue is the largest -> set this pixel to pure blue
//       pixels[i] = 0; // R
//       pixels[i + 1] = 0; // G
//       pixels[i + 2] = 255; // B
//     }
//   }
// }

// function draw() {
//   background(220);
//   image(myImage,0,0);
//   loadPixels(); //populate the pixels array

//     colorEffect(); //replace w/ each different exercise

//   updatePixels();  //redraw based on our changes
// }








// //SECOUND IMAGE --------------------- RACE

// let myImage;

// async function setup() {
  
//   pixelDensity(1);
//   //myImage = await loadImage("assets/nuit.jpg");
//   myImage = await loadImage("assets/race.jpg");
//   createCanvas(600, 600);
// }

// // For each pixel, remove the red component (set to 0)
// //                 halve the blue component
// // R G B A R G B A

// function colorEffect() {
//   for (let y = 0; y < height; y++){
//     for (let x = 0; x < width; x++){
//       let index = (width * y + x)*4;

//       // Check if the pixel is on the right half of the screen
//       if (x > width / 2){
//         // Set the green component to 0
//         pixels[index + 1] = 0;  // G = 0
//       }
//     }
//   }
// }

// function draw() {
//   background(220);
//   image(myImage,0,0);
//   loadPixels(); //populate the pixels array

//     colorEffect(); //replace w/ each different exercise

//   updatePixels();  //redraw based on our changes
// }







// //THIRD IMAGE --------------------- NUIT

// let myImage;

// async function setup() {
  
//   pixelDensity(1);
//   //myImage = await loadImage("assets/nuit.jpg");
//   myImage = await loadImage("assets/nuit.jpg");
//   createCanvas(600, 600);
// }

// // For each pixel, remove the red component (set to 0)
// //                 halve the blue component
// // R G B A R G B A

// function setPixelOneD(pos, r, g, b) {
//   // pos → 1D location in pixels array (red component)
//   // r,g,b → new colors for that pixel
//   pixels[pos] = r;
//   pixels[pos + 1] = g;
//   pixels[pos + 2] = b;
// }

// function setPixel(x, y, r, g, b) {
//   //x,y → pixel location
//   //r,g,b → new pixel color
//   let index = (width * y + x) * 4
//   setPixelOneD(index, r, g, b);
// }

// function getAvg(x, y) {
//   //return the avg intensity of pixel (x,y);
//   let i = (width * y + x) * 4
//   let r = pixels[i];
//   let g = pixels[i + 1];
//   let b = pixels[i + 2];
//   return (r + g + b) / 3
// }


// function colorEffect() {
//   for (let x = 0; x < width; x++){
//     for (let y = 0; y < height; y++){

//       // get the average intensity of this pixel (0–255)
//       let avg = getAvg(x, y);

//       // choose a color based on the table
//       if (avg >= 205 && avg <= 255){
//         // 205–255 -> 170, 230, 220
//         setPixel(x, y, 170, 230, 220);
//       } else if (avg >= 155 && avg <= 204){
//         // 155–204 ->105, 150, 210
//         setPixel(x, y, 105, 150, 210);
//       } else if (avg >= 105 && avg <= 154){
//         // 105–154 -> 120, 180, 60
//         setPixel(x, y, 120, 180, 60);
//       } else if (avg >= 55 && avg <= 104){
//         // 55–104 -> 130, 30, 130
//         setPixel(x, y, 130, 30, 130);
//       } else {
//         // 0–54 -> 90, 10, 50
//         setPixel(x, y, 90, 10, 50);
//       }

//     }
//   }
// }

// function draw() {
//   background(220);
//   image(myImage,0,0);
//   loadPixels(); //populate the pixels array

//     colorEffect(); //replace w/ each different exercise

//   updatePixels();  //redraw based on our changes
// }











// //FORTH IMAGE --------------------- HAND

// let myImage;

// async function setup() {
  
//   pixelDensity(1);
//   myImage = await loadImage("assets/hand.jpg");
//   createCanvas(600, 600);
// }

// // For each pixel, remove the red component (set to 0)
// //                 halve the blue component
// // R G B A R G B A


// function colorEffect() {
//   for (let x = width / 2; x < width; x++){
//     for (let y = 0; y < height; y++){
//       // right side x pixel location
//       let rightIndex = (y * width + x) * 4;
//       // find the mirror x location on the left side
//       let mirrorX = width - x;
//       let leftIndex = (y * width + mirrorX) * 4;

//       // copy the rgb from right to left
//       pixels[leftIndex] = pixels[rightIndex]; // R
//       pixels[leftIndex + 1] = pixels[rightIndex + 1]; // G
//       pixels[leftIndex + 2] = pixels[rightIndex + 2]; // B
//     }
//   }
// }

// function draw() {
//   background(220);
//   image(myImage,0,0);
//   loadPixels(); //populate the pixels array

//     colorEffect(); //replace w/ each different exercise

//   updatePixels();  //redraw based on our changes
// }













//FIFTH IMAGE --------------------- BUTTERFLY

let myImage;

async function setup() {
  
  pixelDensity(1);
  myImage = await loadImage("assets/butterfly.jpg");
  createCanvas(600, 600);
}

// For each pixel, remove the red component (set to 0)
//                 halve the blue component
// R G B A R G B A

function indexAt(x, y) {
  return (y * width + x) * 4;
}

function colorEffect() {
  let midX = width/2;
  let midY = height/2;

  // make an new copy of image called original so that we can use indexAt(x,y) to copy the certain area of the original im

  // loop over only the top-left quadrant (Q1)
  for (let x = 0; x < midX; x++) {
    for (let y = 0; y < midY; y++) {

      // indices of the four quadrants in the ORIGINAL image
      let iQ1 = indexAt(x, y); // top-left
      let iQ2 = indexAt(x + midX, y); // top-right
      let iQ3 = indexAt(x, y + midY); // bottom-left
      let iQ4 = indexAt(x + midX, y + midY); // bottom-right

      // CLOCKWISE rotation using the original backup:
      // Q3 -> Q1
      pixels[iQ1] = original[iQ3];
      pixels[iQ1 + 1] = original[iQ3 + 1];
      pixels[iQ1 + 2] = original[iQ3 + 2];

      // Q1 -> Q2
      pixels[iQ2] = original[iQ1];
      pixels[iQ2 + 1] = original[iQ1 + 1];
      pixels[iQ2 + 2] = original[iQ1 + 2];

      // Q2 -> Q4
      pixels[iQ4] = original[iQ2];
      pixels[iQ4 + 1] = original[iQ2 + 1];
      pixels[iQ4 + 2] = original[iQ2 + 2];

      // Q4 -> Q3
      pixels[iQ3] = original[iQ4];
      pixels[iQ3 + 1] = original[iQ4 + 1];
      pixels[iQ3 + 2] = original[iQ4 + 2];
    }
  }
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels(); //populate the pixels array

    colorEffect(); //replace w/ each different exercise

  updatePixels();  //redraw based on our changes
}