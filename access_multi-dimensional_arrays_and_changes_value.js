const multiDimensionalArray = [
  [11, 10, 9],
  [21, 20, 19],
  [31, 60, 29],
  [41, 40.39],
];

const myData = multiDimensionalArray[1][2];
console.log(myData);

const changeMyData = multiDimensionalArray[2][1] = 30;

const seeChangeData = multiDimensionalArray[2][1]

console.log(seeChangeData);
