// func parameter push another parameret
function nextInLine(arr, item) {
  arr.push(item);
  return arr;
}

const testArr = [1, 2, 3, 4, 5];

// const testArrString = JSON.stringify(testArr);
console.log(nextInLine(testArr, 6));
console.log(testArr);
