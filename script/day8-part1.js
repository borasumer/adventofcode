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

//filter a specific char
const mapFunc = (array, number) => {
  return array.map(innerArray => {
    return innerArray.filter(x => {
      return x !== number;
    });
  });
};

//filter all 0's from each layer
Object.keys(image).map(function(key, _index) {
  image[key] = mapFunc(image[key], 0);
});

//find the layer that contains fewest 0s
var maxArr = [];
const findFewestArr = image => {
  Object.keys(image).map(function(key, _index) {
    var countChar = 0;
    image[key].map(layer => {
      countChar = countChar + layer.length; //count how many chars each layer has
    });
    maxArr.push(countChar); //push the countChar value for each layer into an array
  });
  let biggestArrIndex = maxArr.indexOf(Math.max(...maxArr)); //get the biggest countChar value's index
  return image[biggestArrIndex]; //return the layer that has fewest 0s
};

//count 1s and 2s in the layer that has the fewest 0s
var count1s = 0;
var count2s = 0;
const countNumbers = layer => {
  return layer.map(innerArr => {
    return innerArr.filter(x => {
      if (x == 2) {
        return count2s++;
      } else if (x == 1) {
        return count1s++;
      }
    });
  });
};

//call the func
countNumbers(findFewestArr(image));
const mult = count1s * count2s;
console.log(mult);
