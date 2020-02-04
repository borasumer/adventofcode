var pass = 359282;
var validArr = [];

do {
  pass++;
  const passArr = Array.from(pass.toString()).map(Number);
  var _1 = passArr[0];
  var _2 = passArr[1];
  var _3 = passArr[2];
  var _4 = passArr[3];
  var _5 = passArr[4];
  var _6 = passArr[5];

  const count = {};
  //  count = {
  //    '1': 1,
  //    '2':2,
  //    '3':1,
  //    '4':2
  // }

  378944;
  passArr.map(x => {
    count[x] = (count[x] || 0) + 1; //check if any digit repeasts itself
  });

  if (
    _1 <= _2 &&
    _2 <= _3 &&
    _3 <= _4 &&
    _4 <= _5 &&
    _5 <= _6 &&
    Object.entries(count).find(y => y[1] == 2) //check if any digit repeats 2 times
  ) {
    var number = passArr.join(""); //turn array of digits into a number
    if (number > 359282) {
      validArr.push(number);
    }
  }
} while (pass < 820401);

console.log("Count of valid passwords: ", validArr.length);
