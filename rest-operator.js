// without rest operator
const sum = (function () {
  return function sum(x, y, z) {
    const arg = [x, y, z];
    return arg.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(2, 3, 4));

// rest operator
const restSum = (function () {
  return function restSum(...arg) { //...
    // const arg = [x, y, z];
    return arg.reduce((a, b) => a + b, 0);
  };
})();

console.log(restSum(2, 3, 4));
