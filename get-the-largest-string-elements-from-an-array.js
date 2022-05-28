// first of all, i write a forEach loop function

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

// es6 largest with forEach lopp arrow function

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
