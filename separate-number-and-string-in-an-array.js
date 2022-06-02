const arr = [103,"this",49,"is",33,"a",19,"javascript",54,87,"programs"];
let str = [""];
let num = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    num.push(arr[i]);
} else {
    str = str + arr[i] + " ";
}
}
console.log(num);
console.log(str);
