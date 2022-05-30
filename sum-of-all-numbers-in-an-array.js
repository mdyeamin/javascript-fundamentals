const arr = [23, 44, 53, 21, 22, 87, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

function getAnArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
const funcArray = [234, 56, 7, 45, 56, 78];
const sumArray = getAnArraySum(funcArray);
console.log(sumArray);
