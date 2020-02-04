var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day8.txt");
var text = fs.readFileSync(indexPath).toString();
var data = text.split("").map(Number);

var image = {};
var arr = [];

while (data.length) {
  arr.push(data.splice(0, 25));
}

for (var i = 1; i < 101; i++) {
  image[i] = arr.splice(0, 6);
}

const positionLayers = image => {
  const finalImage = [];
  for (var i = 0; i < 6; i++) finalImage.push([..."#".repeat(25)]);
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
  return finalImage.join("\n");
};

console.log(positionLayers(image));
