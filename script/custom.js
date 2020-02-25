const myArr = [0, 1, 1, 3];

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

const arrMove = arr => {
  arr.map(el => {
    if (el == 0) {
      return arr.move(arr.indexOf(el), 2);
    }
  });
  return arr;
};

console.log(arrMove(myArr));
