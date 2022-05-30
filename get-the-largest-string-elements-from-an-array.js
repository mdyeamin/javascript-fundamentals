/* // first of all, i write a forEach loop function

// raw fanction
function getArrayLargestElement(array) {
  let largestElement = "";
  array.forEach(largest);
  function largest(word) {
    if (word.length > largestElement.length) {
      largestElement = word;
    }
  }
  return largestElement;
}

const banglaGit = [
  "amader",
  "sonar",
  "bangladesh",
  "ami tomay",
  "onek ",
  "valo basi",
];

console.log(getArrayLargestElement(banglaGit));

// es6 arrow function

const getLargestArrowFunc = (array) => {
  let largest = "";
  array.forEach((word) => {
    if (word.length > largest.length) {
      largest = word;
    }
  });
  return largest;
};

console.log(
  getLargestArrowFunc(["hello", "world", "md yeamin", "i'm", "here"])
);
 */

const getLargestArrowFunc = (array) => {
  let largest = "";
  for (let i = 0; i < array.length; i++) {
    if (largest.length < array[i].length) {
      largest = array[i];
    }
  }
  return largest;
};

console.log(
  getLargestArrowFunc(["hello", "world", "md yeamin", "i'm", "here"])
);
