function factorialRecursiveNum(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorialRecursiveNum(n - 1);
}
console.log(factorialRecursiveNum(7));
