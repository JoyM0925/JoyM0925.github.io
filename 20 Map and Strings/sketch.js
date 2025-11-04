// Map Data Structure and Reading Files
// Joy Min
// Oct 31, 2025

let textFile;
let imageText, rows, cols, colorMap;

function preLoad() {
  // use this function to load the text from our file
  textFile = loadStrings("assets/info.txt");
  imageText = loadStrings("assets/colorImage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // processText();

  // Determine the # of rows and columns
  rows = imageText.length;
  cols = imageText[0].length;

  // COntruct the Map of Colors
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)]
  ]);

  drawImage();
}

function drawImage(){
  // read though our text info
  // and construct an image
  let pixelSize = 50;
  for (let y = 0; y < rows; y++){
    let currentRow = imageText[y];
    for (let x = 0; x < rows; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      rect(x*pixelSize, y*pixelSize, pixelSize,pixelSize);
    }
  }
}

function processText(){
  // look at 3 different ways to split up a larger string into words or individual characters
  // split() and ... spread syntax

  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}

function draw() {
  background(220);
}
