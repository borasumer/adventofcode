var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day1-part2.txt");
var text = fs.readFileSync(indexPath).toString();
var modulesMassValues = text.split("\n").map(Number);

//calculate the fuel amount
const calcModuleFuel = (massOfModule, divider, substractionValue) => {
  let result = Math.floor(massOfModule / divider);
  let fuelForModule = result - substractionValue;
  return fuelForModule;
};

//calculate the total fuel amount for each module
const calcTotalFuel = _modulesMassValues => {
  let fuelArrForEach = [];
  _modulesMassValues.map(mass => {
    do {
      mass = calcModuleFuel(mass, 3, 2);
      if (mass > 0) {
        fuelArrForEach.push(mass);
      }
    } while (mass > 0);

    fuelArrForEach.reduce((total, curr) => {
      return total + curr;
    }, 0);
  });
  return fuelArrForEach;
};

//return the total amount of fuel for all modules
const newTotalFuel = calcTotalFuel(modulesMassValues).reduce(
  (total, current) => {
    return total + current;
  },
  0
);
console.log("total: ", newTotalFuel);
