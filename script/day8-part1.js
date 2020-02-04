var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day8.txt");
var text = fs.readFileSync(indexPath).toString();
var data = text.split("").map(Number);
// console.log(data.length / 25 / 6);

var image = {};
var arr = [];

while (data.length) {
  arr.push(data.splice(0, 25));
}

for (var i = 1; i < 101; i++) {
  image[i] = arr.splice(0, 6);
}

const mapFunc = (array, number) => {
  return array.map(innerArray => {
    return innerArray.filter(x => {
      return x !== number;
    });
  });
};

Object.keys(image).map(function(key, _index) {
  image[key] = mapFunc(image[key], 0);
});

var maxArr = [];
const findFewestArr = image => {
  Object.keys(image).map(function(key, _index) {
    var countArr = 0;
    image[key].map(layer => {
      countArr = countArr + layer.length;
    });
    maxArr.push(countArr);
  });
  let biggestArrIndex = maxArr.indexOf(Math.max(...maxArr)) + 1;
  // console.log(biggestArrIndex);
  return image[biggestArrIndex];
};

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
countNumbers(findFewestArr(image));
const mult = count1s * count2s;
console.log(mult);
