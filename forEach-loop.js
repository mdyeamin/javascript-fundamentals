/* 
The forEach loop receives a function.
use case-  array.forEach(function())
 */
// basic forEach structure
const num = [10, 22, 34, 20, 55, 76, 44, 24, 33, 87];

//method 1
num.forEach(forEachFunction);
function forEachFunction(num) {
  // here I declare the below function and call of a forEach loop
  console.log(num);
}
//method 2
num.forEach(function (num) {
  // The rules for writing functions within forEach
  console.log(num);
});
//method 3
const forEach = (num) => {
  console.log(num);
};
num.forEach(forEach);

//method 4
num.forEach((num) =>
  
  console.log(num)
);


