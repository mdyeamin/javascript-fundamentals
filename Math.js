// Returns the absolute value of abs number
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

// Math method 6
function EulersNumbers(e) {
  return Math.E;
}
console.log(EulersNumbers());

// Description
// Because E is a static property of Math, you always use it as Math.E, rather than as a property of a Math object you created (Math is not a constructor).

function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// expected output: 105.12710963760242

console.log(parseInt(Math.random() * 6));

/* abs(x)	Returns the absolute value of x
  acos(x)	Returns the arccosine of x, in radians
  acosh(x)	Returns the hyperbolic arccosine of x
  asin(x)	Returns the arcsine of x, in radians
  asinh(x)	Returns the hyperbolic arcsine of x
  atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
  atan2(y, x)	Returns the arctangent of the quotient of its arguments
  atanh(x)	Returns the hyperbolic arctangent of x
  cbrt(x)	Returns the cubic root of x
  ceil(x)	Returns x, rounded upwards to the nearest integer
  cos(x)	Returns the cosine of x (x is in radians)
  cosh(x)	Returns the hyperbolic cosine of x
  exp(x)	Returns the value of Ex
  floor(x)	Returns x, rounded downwards to the nearest integer
  log(x)	Returns the natural logarithm (base E) of x
  max(x, y, z, ..., n)	Returns the number with the highest value
  min(x, y, z, ..., n)	Returns the number with the lowest value
  pow(x, y)	Returns the value of x to the power of y
  random()	Returns a random number between 0 and 1
  round(x)	Rounds x to the nearest integer
  sin(x)	Returns the sine of x (x is in radians)
  sinh(x)	Returns the hyperbolic sine of x
  sqrt(x)	Returns the square root of x
  tan(x)	Returns the tangent of an angle
  tanh(x)	Returns the hyperbolic tangent of a number
  trunc(x)	Returns the integer part of a number (x) */
