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

// meter per secund to kilometer per hour

function meterPerSecundToKilometerPerHour(meterPerSecund) {
  const kilometerPerHour = meterPerSecund * 3.6;
  return kilometerPerHour;
}

console.log(meterPerSecundToKilometerPerHour(3));

// kilometer per hour to meter per secund

function kilometerPerHourToMeterPerSecund(kilometerPerHour) {
  const meterPerSecund = kilometerPerHour / 3.6;
  return meterPerSecund.toFixed(6);
}

console.log(kilometerPerHourToMeterPerSecund(2));

// bit per secund to kilobit per secund

function bitPerSecundToKilobitPerSecund(bitPerSecund) {
  const kilobitPerSecund = bitPerSecund / 1000;
  return kilobitPerSecund;
}
console.log(bitPerSecundToKilobitPerSecund(40000));

// kilobit per secund to bit per secund

function kilobitPerSecundToBitPerSecund(kilobitPerSecund) {
  const bitPerSecund = kilobitPerSecund * 1000;
  return bitPerSecund;
}

console.log(kilobitPerSecundToBitPerSecund(2));
