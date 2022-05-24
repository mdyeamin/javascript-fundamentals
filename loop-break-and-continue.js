// while loop break and continue

let i = 0;
while (i < 10) {
  if (i == 3) {
    break; // this is break method
  }
  console.log(i);
  i++;
} 

let loopContinue = 0;
while (loopContinue < 10) {
    loopContinue++;
  if (loopContinue % 2 == 0) {
    continue; // this is continue method
  }
  console.log(loopContinue);
}
 
// continue advance method
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
let skipArrayItems = 0;
while (skipArrayItems < items.length) {
  const skipArrayItem = items[skipArrayItems];
  skipArrayItems++;
  if (skipArrayItem.includes("l")) {
    continue;
  }
  console.log(skipArrayItem);
}