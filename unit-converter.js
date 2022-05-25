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

console.log(mileToKilometer(1));

// km to mile

function kilometerToMile(kilometer) {
  const mile = kilometer / 1.609;
  return mile.toPrecision(6);
}

console.log(kilometerToMile(42));
