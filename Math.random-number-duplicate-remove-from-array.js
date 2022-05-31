// const random = Math.random();
// const random10 = random * 100;
// // const intRandom = parseInt(random10);
// const intRandom = Math.round(random10);

let removeDuplicateRandom = [];
for (let i = 0; i < 5 * 2; i++) {
  const random = Math.random();
  const random10 = random * 100;
  // const intRandom = parseInt(random10);
  const round = Math.round(random10);

  if (removeDuplicateRandom.indexOf(round) == -1) {
    removeDuplicateRandom.push(round);
  } else {
    console.log("get duplicate num is ", round);
  }
}
console.log(removeDuplicateRandom);
