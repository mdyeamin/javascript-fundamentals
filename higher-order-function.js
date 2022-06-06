const arr = [3, 4.09, 5.01, 7, 10, 13.21, 6];

function squerList(arr) {
  const squerInt = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((squ) => squ * squ);
  return squerInt;
}
console.log(squerList(arr));
