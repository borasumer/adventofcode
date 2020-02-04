const express = require("express");
const app = express();
require("./Script/day1-part1");
// require("./Script/day1-part2");
// require("./Script/day2");
// require("./Script/day4");
// require("./Script/day2-part2");
// require("./Script/day6-part1");
// require("./script/day2-part2");

app.listen(process.env.port || 8000);

console.log("Running at Port 8000");
