// basic object declare
const computer = {
  name: "hp",
  cpu: "i7 11 gen",
  condition: "new",
  price: 58000,
  color: "gray yellow",
};
// Object value get and change method:
computer.price = 60000;
computer["name"] = "dell"; // 1st method is an object value get and change
const computercolor = "color"; // 2nd method
computer[computercolor] = "gray black"; // 3rd method

computer.isPowerFull = true; //1st way : add new properties to object
computer["isHot"] = false; // 2nd way : add new properties to object
computer["RAM"] = "64 GB";
computer["SSD"] = "1 TB";

computer["substance"] = "iron"; //this property added to for delete
computer["location"] = "USA";

// delete properties form object

delete computer.substance;
console.log(computer);

delete computer["location"];
console.log(computer);
// testing objects for properties
// hasOwnProperty

 const myObj = {
  gift: "books",
  classTime: "10AM",
  classRoom: "2nd floor",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
}

console.log(checkObj("robots"));

