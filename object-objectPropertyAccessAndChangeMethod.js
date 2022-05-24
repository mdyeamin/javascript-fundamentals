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

console.log(computer);
