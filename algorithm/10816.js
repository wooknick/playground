const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const arr = {};
const A = data[1].split(" ").map((i) => {
  arr[Number(i)] = (arr[Number(i)] | 0) + 1;
});
A.sort((a, b) => a - b);
const M = Number(data[2]);

const answer = [];
data[3].split(" ").map((i) => answer.push(arr[Number(i)] | 0));

console.log(answer.join(" "));
