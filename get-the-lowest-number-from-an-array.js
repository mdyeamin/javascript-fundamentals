/*   get the largest element from an array

const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.min(a)); // output will be NaN */
//if you try this way, don't work the program
var num = [4, 5, 1, 3];
console.log(Math.min(num)); // logs NaN
console.log(Math.min(1, 3, 4, 2)); //work only on the console without null


// 1st method array lowest number
const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.min.apply(null, a)); // null must be used otherwise code doesn't work

// 2nd method
const arrNum = [4, 3, 1, 8, 55];
console.log(Math.min(...arrNum));



function lowestElement(array) {
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
      if (lowest > array[i]) {
        let arrayIndex = array[i];
        lowest = arrayIndex;
      }
    }
    return lowest;
  }
  
  const lowestAge = [22, 34, 56, 78, 67];
  
  const getLowest = lowestElement(lowestAge);
  console.log(getLowest);