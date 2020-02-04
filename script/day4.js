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
  if (_1 <= _2 && _2 <= _3 && _3 <= _4 && _4 <= _5 && _5 <= _6) {
    var num =
      passArr[0].toString() +
      passArr[1].toString() +
      passArr[2].toString() +
      passArr[3].toString() +
      passArr[4].toString() +
      passArr[5].toString();
    var number = Number(num);
    if (number > 359282) {
      validArr.push(number);
    }
  }
} while (pass < 820401);
console.log("Count of valid passwords: ", validArr.length - 1); //minus 1 for 456789
