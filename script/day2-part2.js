var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day2.txt");
var text = fs.readFileSync(indexPath).toString();
var intCodeValues = text.split(",").map(Number);

const myFunc = (arr, index = 0) => {
  const opcode = arr[index];
  if (opcode === 99) {
    return arr[0];
  }
  const num1Index = arr[index + 1];
  const num2Index = arr[index + 2];
  const answerIndex = arr[index + 3];
  if (opcode === 1) {
    arr[answerIndex] = arr[num1Index] + arr[num2Index];
    index += 4;
    return myFunc(arr, index);
  }
  if (opcode === 2) {
    arr[answerIndex] = arr[num1Index] * arr[num2Index];
    index += 4;
    return myFunc(arr, index);
  }
};

// console.log(myFunc(intCodeValues));

const iterateIntcode = (input, position_1, position_2) => {
  copy = [...input]; //not to mutate the original input / intCodeValues
  copy[1] = position_1;
  copy[2] = position_2;
  return myFunc(copy);
};

for (let l = 0; l < 100; l++) {
  for (let k = 0; k < 100; k++) {
    if (iterateIntcode(intCodeValues, l, k) === 19690720) {
      console.log(100 * l + k);
    }
  }
}
