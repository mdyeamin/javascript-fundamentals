// I did some shopping
const shoppingCard = [
  {name: "jubba", price: 2100, quantity: 4},
  {name: "watch", price: 3800, quantity: 1},
  {name: "phone", price: 4300, quantity: 2},
  {name: "laptop", price: 120000, quantity: 2},
  {name: "desktop", price: 92000, quantity: 2},
  {name: "desktop", price: 92000, quantity: 2},
];

let cardTotal = 0;

for (const product of shoppingCard) {
  cardTotal = cardTotal + product.price * product.quantity;
}
console.log(cardTotal);
