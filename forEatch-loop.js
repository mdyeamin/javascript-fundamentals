/* 
The forEach loop receives a function.
use case-  array.forEach(function())
 */
// basic forEach structure
const num = [10, 22, 34, 20, 55, 76, 44, 24, 33, 87];

num.forEach(forEachFunction);
//method 1
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
num.forEach((num) => {
  // es6 function
  console.log(num);
});

