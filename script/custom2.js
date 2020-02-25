/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 0) {
    let newArr = Array.from(x.toString()).map(Number);
    if (isNaN(newArr[0])) {
      newArr.shift();
    }
    newArr.reverse();

    if (newArr[0] === 0) {
      newArr.shift();
    }
    if (newArr.join("") > 0x7fffffff) {
      return 0;
    } else {
      return -Math.abs(newArr.join(""));
    }
  } else {
    let newArr = Array.from(x.toString())
      .map(Number)
      .reverse();
    if (newArr[0] === 0) {
      newArr.shift();
    }
    if (newArr.join("") > 0x7fffffff) {
      return 0;
    } else {
      return newArr.join("");
    }
  }
};

console.log(reverse(-32253523));
