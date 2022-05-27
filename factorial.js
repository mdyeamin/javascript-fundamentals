/* // 1st method factorial with for loop
let factorial = 1;
for (let i = 1; i < 8; i++) {
  //   console.log(i);
  factorial = factorial * i;
}
console.log(factorial);

// 2nd method is a factorial function in the loop

function factNum(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}


console.log('fact number is', factNum(7));
// 3rd method factorial with a function
function factorialNum(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorialNum(n - 1);
}
console.log(factorialNum(7));
 */

// 4th method Factorial using a while loop or a decrementing loop
function decrementFactorialWithWhileLoop(num) {
  let fac = 1;
  let i = 7;
  while (i > 0) {
    fac = i * fac;
    i--;
  }

  return fac;
}
console.log(decrementFactorialWithWhileLoop(7));
