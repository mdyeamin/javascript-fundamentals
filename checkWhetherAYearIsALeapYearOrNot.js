function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return console.log(year, "this is leap year");
  } else {
    return console.log(year, "this is not leap year");
  }
}

isLeapYear(2012);
