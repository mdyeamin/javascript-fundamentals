let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
//  with a function
function fiboSeries(num) {
  let fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fiboSeries(20));

// with recursive funcrion

function recursiveFibo(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return recursiveFibo(num - 2) + recursiveFibo(num - 1);
}

console.log(recursiveFibo(10));
