const phones = [
  {name: "huawei", model: "p20 pro", price: 89000, RAM: "8GB", SSD: "128GB"},
  {name: "lava", model: "lo12", price: 12000, RAM: "2GB", SSD: "16GB"},
  {name: "iPhone", model: "8 plus", price: 49000, RAM: "8GB", SSD: "256GB"},
  {
    name: "samsung",
    model: "s 22 ultra",
    price: 149000,
    RAM: "12GB",
    SSD: "256GB",
  },
  {name: "nokia", model: "1200", price: 1200, RAM: "512MB", SSD: "120MB"},
  {name: "nokia", model: "n50", price: 18900, RAM: "6GB", SSD: "128GB"},
  {name: "xiaomi", model: "note 10", price: 22000, RAM: "8GB", SSD: "128GB"},
];

// find cheapest phone

let cheapest = phones[0];
for (const phone of phones) {
  if (cheapest.price > phone.price) {
    cheapest = phone;
  }
}
console.log(cheapest);

// find expensive phone

let expensive = phones[0];
for (const phone of phones) {
  if (expensive.price < phone.price) {
    expensive = phone;
  }
}
console.log(expensive);

// last three expensive mobail
const phoneSort = phones.sort((a, b) =>
  a.price > b.price ? 1 : b.price > a.price ? -1 : 0
);

const phoneRevarse = phoneSort.reverse();
console.log(
  "last three expensive mobail",
  phoneRevarse[0],
  phoneRevarse[1],
  phoneRevarse[2]
);
// if (phoneRevarse.length === 3) {

// }
