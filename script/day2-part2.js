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

//changing the array's 1 and 2 index
const modifyIntcode = (input, position_1, position_2) => {
  copy = [...input]; //not to mutate the original input / intCodeValues
  copy[1] = position_1;
  copy[2] = position_2;
  return myFunc(copy);
};

//for loop iteration, to see what 1 and 2 values give 19690720 //
for (let l = 0; l < 99; l++) {
  for (let k = 0; k < 99; k++) {
    if (modifyIntcode(intCodeValues, l, k) === 19690720) {
      let result = 100 * l + k;
      console.log(result);
    }
  }
}
