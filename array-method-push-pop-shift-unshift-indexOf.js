// basic array declare

const phones = ["xiaomi", "vivo", "lava", "oppo", "realme", "asus", "huewei"];

// you can push() and pop() in an array
phones.push("lg"); //this keyword increases an element in an array of last items
phones.push("Iphone");

phones.pop(); //this keyword decreases an element in an array of last items

console.log(phones);
/* 
shift() and unshift() method will be increases and decreases the first items

you can use push and pop like and see output
*/

// find a element in an array with "indexOf" keyword
const phoneName = "iphone";
if (phones.indexOf(phoneName) != -1) {
  console.log("xiaomi phones");
} else {
  console.log(`sorry ${phoneName} didn't match`); //es6 method
}

//array value get and change method:

const animals = ["cat", "elephant", "cow", "dog", "tiger", "lion"];

animals[1] = "goat";
console.log(animals);

const arrayPositionSee = animals.indexOf("tiger");
console.log(arrayPositionSee); // output will be 4
