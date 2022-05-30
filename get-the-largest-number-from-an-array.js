/*   get the largest element from an array

const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.max(a)); // output will be NaN */
//if you try this way, don't work the program
var num = [4, 5, 1, 3];
console.log(Math.max(num)); // logs NaN
console.log(Math.max(1, 3, 4, 2)); //work only on the console without null

// 1st method array bigest number
const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.max.apply(null, a)); // null must be used otherwise code doesn't work

// 2nd method
const arrNum = [4, 3, 1, 8, 55];
console.log(Math.max(...arrNum));

// 3rd yaw array largest number with a function
function largestElement(array) {
  let bigest = 0;
  for (let i = 0; i < array.length; i++) {
    if (bigest < array[i]) {
      let arrayIndex = array[i];
      bigest = arrayIndex;
    }
  }
  return bigest;
}

const biggestAge = [22, 34, 56, 78, 67];

const getLargest = largestElement(biggestAge);
console.log(getLargest);

// largest negative number an array
function largestNegativeElement(array) {
  let bigest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (bigest < array[i]) {
      let arrayIndex = array[i];
      bigest = arrayIndex;
    }
  }
  return bigest;
}

const biggestnegativeAge = [-22, -34, -56, -78, -67];

const getNegativeLargest = largestNegativeElement(biggestnegativeAge);
console.log(getNegativeLargest);
