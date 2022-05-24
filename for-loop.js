// basic for loop structure
for (let i = 0; i < 20; i++) {
  console.log(i);
}
// basic for loop odd numbers
for (let oddNum = 1; oddNum < 20; oddNum += 2) {
  // you can use "oddNum = oddNum + 2"
  console.log(oddNum);
}

// basic for loop even numbers
for (let evenNum = 0; evenNum < 20; evenNum += 2) {
  // you can use " evenNum = evenNum + 2"
  console.log(evenNum);
}

// get array elements in for loop
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

for (getArrayItems = 0; getArrayItems < items.length; getArrayItems++) {
  const arrayItem = items[getArrayItems];
  console.log(arrayItem);
}

// basic for loop odd numbers a different way

for (differentOddNum = 0; differentOddNum < 20; differentOddNum++) {
  if (differentOddNum % 2 == 1) {
    console.log(differentOddNum); //output will be 1-3-5-7...19
  }
}

// basic for loop even numbers a different way

for (differentevenNum = 0; differentevenNum < 20; differentevenNum++) {
  if (differentevenNum % 2 == 0) {
    console.log(differentevenNum); //output will be 0-2-4-6...18
  }
}