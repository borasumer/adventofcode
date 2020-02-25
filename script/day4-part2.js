var pass = 359282;
var validArr = [];

//check each potential password if they meet the conditions while the password is < 820401
do {
  pass++;
  const passArr = Array.from(pass.toString()).map(Number); //turn each potential password into a string of digits
  var _1 = passArr[0];
  var _2 = passArr[1];
  var _3 = passArr[2];
  var _4 = passArr[3];
  var _5 = passArr[4];
  var _6 = passArr[5];

  //  count = {
  //    '1': 1,
  //    '2':2,
  //    '3':1,
  //    '4':2
  // }
  const count = {};
  passArr.map(x => {
    count[x] = count[x] + 1; //check if any digit repeasts itself
  });

  if (
    _1 <= _2 &&
    _2 <= _3 &&
    _3 <= _4 &&
    _4 <= _5 &&
    _5 <= _6 &&
    Object.entries(count).find(y => y[1] == 2) //turns the object into a nested array and check if any digit repeats 2 times
  ) {
    var number = passArr.join(""); //turn array of digits into a single number
    if (number > 359282) {
      //push the eial password into the array if it is > 359282
      validArr.push(number);
    }
  }
} while (pass < 820401);

console.log("Count of valid passwords: ", validArr.length);
