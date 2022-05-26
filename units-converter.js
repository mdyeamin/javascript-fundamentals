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

// secund to minute
function secundToMinute(secund) {
  const minute = secund / 60;

  return minute.toFixed(7);
}
console.log(secundToMinute(300));

// minute to secund

function minuteToSecund(minute) {
  const secund = minute * 60;
  return secund;
}
console.log(minuteToSecund(5));
 
// celcius to fahrenheit
function celciusToFahrenheit(celcius) {
  const fahrenheit = (celcius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celciusToFahrenheit(44));

// fahrenheit to celcius
function fahrenheitToCelcius(fahrenheit) {
  const celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
}
console.log(fahrenheitToCelcius(55));

// kelvin to celcius
function kelvinToCelcius(kelvin) {
  const celcius = kelvin - 273.15;
  return celcius;
}
console.log(kelvinToCelcius(33));

// celcius to kelvin
function celciusToKelvin(celcius) {
  const kelvin = celcius + 273.15;
  return kelvin;
}
console.log(celciusToKelvin(22));

// fahrenheit to kelvin
function fahrenheitToKelvin(fahrenheit) {
  const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
  return kelvin;
}

console.log(fahrenheitToKelvin(2));

// kelvin to fahrenheit
function kelvinToFahrenheit(kelvin) {
  const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  return fahrenheit;
}
console.log(kelvinToFahrenheit(20));
