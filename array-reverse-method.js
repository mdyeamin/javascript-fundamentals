// array reverse method
// 1st way
const arr = [9, 8, 7, 6, 5, 4, 3, 3, 1, 0];
const arrReverse = arr.reverse();
console.log(arrReverse);

// array reverse with for loop
// 2nd way
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let reverseArr2 = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  if (reverseArr2.indexOf(arr[i] === -1)) {
    reverseArr2.push(arr2[i]);
  }
}
console.log("arr2 is", reverseArr2);

// 3rd way
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let reverseArr3 = [];
for (let i = arr3.length - 1; i >= 0; i--) {
  if (reverseArr3.indexOf(arr[i] === !true)) {
    reverseArr3.push(arr3[i]);
  }
}
console.log("arr3 is", reverseArr3);
