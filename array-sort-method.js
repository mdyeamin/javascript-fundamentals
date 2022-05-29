const arraySort = [2, 4, 3, 20, 10, 60, 7];

arraySort.sort(arrayABSort);

function arrayABSort(a, b) {
  return a - b;
}

console.log(arraySort);

arraySort.sort(function (a, b) {
  return a - b;
});

console.log(arraySort);

arraySort.sort((a, b) => a - b);

console.log(arraySort);
