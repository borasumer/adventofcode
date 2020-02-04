var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day1-part2.txt");
var text = fs.readFileSync(indexPath).toString();
var modulesMassValues = text.split("\n").map(Number);

//! Calculates the fuel needed
const calcModuleFuel = (massOfModule, divider, substractionValue) => {
  let divisionResult = (massOfModule / divider) >> 0;
  let fuelForModule = divisionResult - substractionValue;
  return fuelForModule;
};

//!Returns an array of total fuel amount for each module
const calcTotalFuel = modulesMassValues.map(mass => {
  let fuelArr = [];
  do {
    mass = calcModuleFuel(mass, 3, 2);
    if (mass > 0) {
      fuelArr.push(mass);
    }
  } while (mass > 0);

  return fuelArr.reduce((total, curr) => {
    return total + curr;
  }, 0);
});

//!Returns the total amount of fuel for all modules
const newTotalFuel = calcTotalFuel.reduce((total, current) => {
  return total + current;
}, 0);
console.log("total: ", newTotalFuel);
