var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day1-part1.txt");
var text = fs.readFileSync(indexPath).toString();
var modulesMassValues = text.split("\n");

var fuelArr = [];

//calculate the fuel amount
const calcModuleFuel = (massOfModule, divider, substractionValue) => {
  let result = Math.floor(massOfModule / divider);
  let fuelForModule = result - substractionValue;
  return fuelForModule;
};

//iterate through the all modules and calculate the fuel for each module
const createModulesFuelArr = _moduleMassValues => {
  _moduleMassValues.map(mass => {
    let moduleFuelNeed = calcModuleFuel(mass, 3, 2);
    fuelArr.push(moduleFuelNeed);
  });
};
createModulesFuelArr(modulesMassValues);

//Calculate total amount of the fuel needed for all modules
//0 is the starting value of the total since we are starting with an empty array
totalFuel = fuelArr => {
  return fuelArr.reduce((total, current) => {
    return total + current;
  });
};

console.log(`Total sum of the fuel requirement is: ${totalFuel(fuelArr)}`);
