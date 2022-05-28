/* // Returns the absolute value of abs number
// Math method 1
const abs = -4;
const absolute = Math.abs(abs);
console.log(absolute);

// Math method 2
const ceil = 7.30002;
const sealing = Math.ceil(ceil);
console.log(sealing);

// Math method 3
const floor = 7.30002;
const flooring = Math.floor(floor);
console.log(flooring);

// Math method 4
const round = 5.4099;
const rounding = Math.round(round);
console.log(rounding);

// Math method 5 
const acos = -1; // arccosine method number within the range of 1 and -1. ১ থেকে -১ পর্যন্ত এটার রেঞ্জ।
const arccosine = Math.acos(acos);
console.log(arccosine);

 */
// Math method 6
function EulersNumbers(e) {
  return Math.E;
}
console.log(EulersNumbers());

// Description
// Because E is a static property of Math, you always use it as Math.E, rather than as a property of a Math object you created (Math is not a constructor).

function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);
  }
  
  console.log(Math.E);
  // expected output: 2.718281828459045
  
  console.log((1 + (1 / 1000000)) ** 1000000);
  // expected output: 2.718280469 (approximately)
  
  console.log(compoundOneYear(0.05, 100));
  // expected output: 105.12710963760242
  