// par tool wood 3qbf
//  par chair wood 4qbf
// par table wood 12qbf
// par bed wood 75qbf
function woodCalculate(
  toolWood = 0,
  chairWood = 0,
  tableWood = 0,
  bedWood = 0
) {
  const parToolWood = 3;
  const parChairWood = 4;
  const parTableWood = 12;
  const parBadWood = 75;

  const toolWoodQuantity = parToolWood * toolWood;
  const chairWoodQuantity = parChairWood * chairWood;
  const tableWoodQuantity = parTableWood * tableWood;
  const badWoodQuantity = parBadWood * bedWood;

  const totalWood =
    toolWoodQuantity + chairWoodQuantity + tableWoodQuantity + badWoodQuantity;
  return totalWood;
}

console.log(woodCalculate(2, 2, 6, 2));
