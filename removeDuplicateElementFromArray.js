// remove duplicate element prom array
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
