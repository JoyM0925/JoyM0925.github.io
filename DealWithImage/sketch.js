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













// //FIFTH IMAGE --------------------- BUTTERFLY

// let myImage;

// async function setup() {
  
//   pixelDensity(1);
//   myImage = await loadImage("assets/butterfly.jpg");
//   createCanvas(600, 600);
// }

// // For each pixel, remove the red component (set to 0)
// //                 halve the blue component
// // R G B A R G B A



// function colorEffect() {
//   // use the 2 midlines ( x and y) to define the 4 quadrants
//   let midX = width/2;
//   let midY = height/2;

//   // cut the four quadrants from the original image
//   let Q1 = myImage.get(0, 0, midX, midY); // top-left
//   let Q2 = myImage.get(midX, 0,midX, midY); // top-right
//   let Q3 = myImage.get(0, midY, midX, midY); // bottom-left
//   let Q4 = myImage.get(midX, midY, midX, midY); // bottom-right

//   // Q3 → Q1
//   image(Q3, 0, 0, midX, midY);

//   // Q1 → Q2
//   image(Q1, midX, 0, midX, midY);

//   // Q2 → Q4
//   image(Q2, midX, midY, midX, midY);

//   // Q4 → Q3
//   image(Q4, 0, midY, midX, midY);
// }

// function draw() {
//   background(220);
//   image(myImage,0,0);
//   // loadPixels(); //populate the pixels array

//     colorEffect(); //replace w/ each different exercise

//   // updatePixels();  //redraw based on our changes
// }







//FIFTH IMAGE --------------------- BUTTERFLY

let myImage;

async function setup() {
  
  pixelDensity(1);
  myImage = await loadImage("assets/nuit.jpg");
  createCanvas(600, 600);
}

// For each pixel, remove the red component (set to 0)
//                 halve the blue component
// R G B A R G B A



function colorEffect(radius){
  let original = structuredClone(pixels);// make a copy of the original pic

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      let count = 0;

      // center
      let i = (y * width + x) * 4;
      sumR += original[i];
      sumG += original[i + 1];
      sumB += original[i + 2];
      count++;

      // top left 
      let x1 = x - radius;
      let y1 = y - radius;
      if (x1 >= 0 && y1 >= 0) {
        let j = (y1 * width + x1) * 4;
        sumR += original[j];
        sumG += original[j + 1];
        sumB += original[j + 2];
        count++;
      }

      // top right
      let x2 = x + radius;
      let y2 = y - radius;
      if (x2 < width && y2 >= 0) {
        let j = (y2 * width + x2) * 4;
        sumR += original[j];
        sumG += original[j + 1];
        sumB += original[j + 2];
        count++;
      }

      // down left
      let x3 = x - radius;
      let y3 = y + radius;
      if (x3 >= 0 && y3 < height) {
        let j = (y3 * width + x3) * 4;
        sumR += original[j];
        sumG += original[j + 1];
        sumB += original[j + 2];
        count++;
      }

      // down rigfht
      let x4 = x + radius;
      let y4 = y + radius;
      if (x4 < width && y4 < height) {
        let j = (y4 * width + x4) * 4;
        sumR += original[j];
        sumG += original[j + 1];
        sumB += original[j + 2];
        count++;
      }

      // get zhe avg of the pixel and update
      pixels[i]     = sumR / count;
      pixels[i + 1] = sumG / count;
      pixels[i + 2] = sumB / count;
    }
  }
}

  
     

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels(); //populate the pixels array

    colorEffect(20); //replace w/ each different exercise

  updatePixels();  //redraw based on our changes
}