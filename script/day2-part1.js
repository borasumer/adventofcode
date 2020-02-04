var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day2.txt");
var text = fs.readFileSync(indexPath).toString();
var intCodeValues = text.split(",").map(Number);

var intCodeValues = [...intCodeValues];

var opcode;
for (var i = 0; i < intCodeValues.length; i += 4) {
  opcode = intCodeValues[i];
  switch (opcode) {
    case 1:
      let pos_one_add = intCodeValues[i + 1]; //store the first value at this position in memory
      let pos_two_add = intCodeValues[i + 2]; //store the second value at this position in memory
      let pos_three_add = intCodeValues[i + 3]; //store the third value at this position in memory
      intCodeValues[pos_three_add] =
        intCodeValues[pos_one_add] + intCodeValues[pos_two_add];
      break;
    case 2:
      let pos_one_mult = intCodeValues[i + 1]; //store the first value at this position in memory
      let pos_two_mult = intCodeValues[i + 2]; //store the second value at this position in memory
      let pos_three_mult = intCodeValues[i + 3]; //store the third value at this position in memory
      intCodeValues[pos_three_mult] =
        intCodeValues[pos_one_mult] * intCodeValues[pos_two_mult];
      break;
    case 99:
      console.log("Program is finished and halted");
      console.log("FIRST VALUE/POSITION 0: ", intCodeValues[0]); //find the first value after the programs is halted
      break;
  }
}
