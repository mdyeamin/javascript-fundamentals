// 1st way
let x = 2;
let y = 3;

let z = x;
x = y;
y = z;
console.log(y);

// 2nd way
let f = 4;
let s = 6;

[f, s] = [s, f];

console.log(f, s);
