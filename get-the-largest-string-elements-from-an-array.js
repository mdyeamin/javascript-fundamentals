// first of all, i write a forEach loop function
function getArrayLargestElement(array) {
  let largestElement = "";
  array.forEach(function (word) {
    if (word.length > largestElement.length) {
      largestElement = word;
    }
  });
  return largestElement;
}

const a = ["amader", "sonar", "bangladesh", "ami tomay", "onek ", "valo basi"];

console.log(getArrayLargestElement(a));
