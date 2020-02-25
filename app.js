// require("./script/day1-part1");
// require("./script/day1-part2");
// require("./script/day2-part1");
// require("./script/day2-part2");
// require("./script/day4-part1");
// require("./script/day4-part2");
// require("./script/day8-part1");
// require("./script/day8-part2");
// require("./script/custom");
require("./script/custom3");

const express = require("express");

const app = express();

const port = 12000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
