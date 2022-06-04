// basic function declare
function myFunc() {
  // 👉() this is parentheses
  // write the "function" keyword and defined a function name "i use "myFunc"
  console.log("this is a simple function");
}

myFunc();
// add tow munbers
function addNum(n1, n2) {
  // you can pass one or multiple parameters, i use n1, n2
  const addN = n1 + n2;
  return addN;
}
console.log(addNum(2, 3));

// add tow munbers
function multNum(n1, n2) {
  // you can pass one or multiple parameters, i use n1, n2
  const multNum = n1 * n2;
  return multNum;
}
console.log(multNum(2, 3));

// returning boolean values from function

function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLess(30, 25));

// same function you can use sortcut

function isLess(a, b) {
  return a < b;
}
console.log(isLess(20, 25));
