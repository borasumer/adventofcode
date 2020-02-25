var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day8.txt");
var text = fs.readFileSync(indexPath).toString();
var data = text.split("").map(Number);

//declare the variables
var image = {}; //100s of layers
var arr = []; //

//slice the input into 25 char arrays
while (data.length) {
  arr.push(data.splice(0, 25));
}

//create image layers(100) into the image object
for (var i = 0; i < 100; i++) {
  image[i] = arr.splice(0, 6);
}

//position each layer back to back
const positionLayers = image => {
  const finalImage = [];
  for (var i = 0; i < 6; i++) {
    console.log(finalImage);
    finalImage.push([..."#".repeat(25)]); //create the canvas that is made of '#'
  }
  Object.keys(image).map(function(key, _index) {
    image[key].map((line, x) => {
      line.map((pixel, y) => {
        switch (pixel) {
          case 0:
            if (finalImage[x][y] == "#") {
              finalImage[x][y] = "X";
            }
            break;
          case 1:
            if (finalImage[x][y] == "#") {
              finalImage[x][y] = ".";
            }
            break;
          default:
            break;
        }
      });
    });
  });
  return finalImage.join("\n"); //line break after each layer ends
};

console.log(positionLayers(image));
