/*   get the largest element from an array

const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.max(a)); // output will be NaN */
//if you try this way, don't work the program
var num = [4, 5, 1, 3];
console.log(Math.max(num)); // logs NaN
console.log(Math.max(1, 3, 4, 2)); //work only on the console without null

// 1st method array bigest number
const a = [3, 55, 6, 9, 11, 65, 97, 4];
console.log(Math.max.apply(null, a)); // null must be used otherwise code doesn't work

// 2nd method 
const arrNum = [4,3,1,8];
console.log(Math.max(...arrNum)); 

