var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day2.txt");
var text = fs.readFileSync(indexPath).toString();
var intCodeValues = text.split(",").map(Number);

//make the calculations and get the first value
const myFunc = (arr, index = 0) => {
  const opcode = arr[index];
  if (opcode === 99) {
    return arr[0];
  }
  const pos1Index = arr[index + 1];
  const pos2Index = arr[index + 2];
  const resultIndex = arr[index + 3];
  if (opcode === 1) {
    arr[resultIndex] = arr[pos1Index] + arr[pos2Index];
    index += 4;
    return myFunc(arr, index);
  }
  if (opcode === 2) {
    arr[resultIndex] = arr[pos1Index] * arr[pos2Index];
    index += 4;
    return myFunc(arr, index);
  }
};

console.log("First value: ", myFunc(intCodeValues));
