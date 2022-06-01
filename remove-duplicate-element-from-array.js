 // remove duplicate element from array
const numbers = [20, 22, 10, 20, 39, 10, 30];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

const birds = [
  "Pigeon",
  "Peacock",
  "Parrot",
  "Sparrow",
  "dove",
  "Peacock",
  "robin",
  "duck",
  "robin",
];

function removeDups(birds) {
  let unique = {};
  birds.forEach(function (i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}
console.log(removeDups(birds));


const arr = [33, 44, 645, 33, 77, 86, 77, 10, 19, 10];
let removeDup = [];
const dup = [];
for (let i = 0; i < arr.length; i++) {
  if (removeDup.indexOf(arr[i]) == -1) {
    removeDup.push(arr[i]);
  } else {
    console.log("dup", dup.push(arr[i]));
  }
}
console.log(removeDup);
console.log("this is duplicate number", dup);
