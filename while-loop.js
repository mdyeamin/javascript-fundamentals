/* // basic while loop structure
let i = 0;
while (i < 20) {
  i++;
  console.log(i); // output will be 1-20
}

// basic while loop odd numbers

let oddNum = 1;
while (oddNum < 20) {
  console.log(oddNum); // output will be 1-3-5-7...19
  oddNum += 2;
}

// basic while loop even numbers
let evenNum = 0;
while (evenNum <= 20) {
  console.log(evenNum); // output will be 0-2-4-6...20
  evenNum += 2;
}

// get array elements in while loop
const items = [
  "laptop",
  "mobail",
  "phone",
  "charger",
  "headphone",
  "keyboard",
  "table",
  "router machine",
];

let getArrayItems = 0;
while (getArrayItems < items.length) {
  const arrayItem = items[getArrayItems];
  console.log(arrayItem);
  getArrayItems++;
}

// basic while loop odd numbers a different way
let differentOddNum = 0;
while (differentOddNum < 20) {
  if (differentOddNum % 2 == 1) {
    console.log(differentOddNum); //output will be 1-3-5-7...19
  }
  differentOddNum++;
}

// basic while loop even numbers a different way

let differentEvenNum = 0;

while (differentEvenNum < 20) {
  if (differentEvenNum % 2 == 0) {
    console.log(differentEvenNum); //output will be 0-2-4-6...18
  }
  differentEvenNum++;
}
 */

/* hey there! now I'm sharing another method to get
 even and odd numbers through while loop */

// even numbers

let anotherOddNum = 0;
while (anotherOddNum < 20) {
  if (anotherOddNum % 2 == !-1) {
    console.log(anotherOddNum); // output will be 0-2-4-6...18
  }
  anotherOddNum++;
}

// odd numbers

let anotherEvenNum = 0;
while (anotherEvenNum < 20) {
  if (anotherEvenNum % 2 == !!-1) {
    console.log(anotherEvenNum); //output will be 1-3-5-7...19
  }
  anotherEvenNum++;
}
