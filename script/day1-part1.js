var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day1-part1.txt");
var text = fs.readFileSync(indexPath).toString();
var modulesMassValues = text.split("\n");

var fuelArr = [];

const calcModuleFuel = (massOfModule, divider, substractionValue) => {
  let divisionResult = Math.floor(massOfModule / divider);
  let fuelForModule = divisionResult - substractionValue;
  return fuelForModule;
};

const createModulesFuelArr = moduleMass => {
  moduleMass.map(mass => {
    let moduleFuelNeed = calcModuleFuel(mass, 3, 2);
    fuelArr.push(moduleFuelNeed);
  });
};
createModulesFuelArr(modulesMassValues);

console.log("Fuel amount for each modules list: " + fuelArr);

//Calculate total amount of the fuel needed for all modules/inputs
//0 is the starting value of the total since we are starting with an empty array
totalFuelNeed = fuelArr => {
  return fuelArr.reduce((total, current) => {
    return total + current;
  }, 0);
};

console.log(`Total sum of the fuel requirement is: ${totalFuelNeed(fuelArr)}`);
