function lowestElement(array) {
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
      if (lowest > array[i]) {
        let arrayIndex = array[i];
        lowest = arrayIndex;
      }
    }
    return lowest;
  }
  
  const lowestAge = [22, 34, 56, 78, 67];
  
  const getLowest = lowestElement(lowestAge);
  console.log(getLowest);