// problem task requirement bellow

/* 
write a function -
1 I need a function where traveling will have a calculation
2 This calculation will depend on the distance
3 15 rupees per kilometer for the first 90 kilometers
4 and 12 rupees per kilometer for the next 120 kilometers
5 and 8 rupees per kilometer for the next kilometers
6 (optional) if traveling more than 500 kilometers you give a discount of 3% 
*/

function travelingDistanceCostCalculate(kilometer) {
  let totalCost = 0;

  const first90Kilo = 15;
  const next120Kilo = 12;
  const afterKilo = 8;

  const costingForFirst90Kilos = 90 * first90Kilo;
  const costingForNext120Kilos = 120 * next120Kilo;
  const costingFor210Kilo = costingForFirst90Kilos + costingForNext120Kilos;


  if (kilometer <= 90 && kilometer > 0) {
    totalCost =  costingForFirst90Kilos ;
  }

   else if (kilometer <= 120 && kilometer > 0) {
    totalCost = (kilometer - 90) * next120Kilo + costingForFirst90Kilos;
    
  }
  
  else {
    totalCost =  (kilometer -210 ) * afterKilo + costingFor210Kilo;
  }
  return totalCost;
}

console.log(travelingDistanceCostCalculate(390));

