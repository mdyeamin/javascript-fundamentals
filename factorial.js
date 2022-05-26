// 1st method factorial with for loop
let factorial = 1;
for (let i = 1; i < 8; i++) {
  //   console.log(i);
  factorial *= i;
}
console.log(factorial);

// 2nd method factorial with a function
function factorialNum(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorialNum(n - 1);
}
console.log(factorialNum(7));
