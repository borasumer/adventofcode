var fs = require("fs");
var path = require("path");
const indexPath = path.join(__dirname, "../data/day6.txt");
var text = fs.readFileSync(indexPath).toString();
var orbits = text.split("\n");

var arr = [];
orbits.map(x => {
  let ind = x.split(")");
  // console.log("ind", ind);
  if (ind[1] == ind[0]) {
    arr.push(ind);
  }
});
console.log(arr);
