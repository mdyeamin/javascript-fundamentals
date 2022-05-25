 // feet to inc
function feetToInch(feet) {
  const feetToInch = feet * 12;
  return feetToInch;
}
console.log(feetToInch(3));

// inc to feet
function inchToFeet(inch) {
  const inchToFeet = inch / 12;
  return inchToFeet;
}
console.log(inchToFeet(36));

// mile to km
function mileToKilometer(miles) {
  const km = miles * 1.60934;
  return km.toPrecision(6);
}

console.log(mileToKilometer(44));

// km to mile

function kilometerToMile(kilometer) {
  const mile = kilometer / 1.609;
  return mile.toPrecision(6);
}

console.log(kilometerToMile(42));

// square meter to square kilometer

function squareMeterToSquareKilometer(squareMeter) {
  const SquareKilometer = squareMeter / 1e6;
  return SquareKilometer;
}

console.log(squareMeterToSquareKilometer(33));

// square Kilometer To Square Meter

function squareKilometerToSquareMeter(squareKilometer) {
  const squareMeter = squareKilometer * 1e6;
  return squareMeter;
}
console.log(squareKilometerToSquareMeter(2));
