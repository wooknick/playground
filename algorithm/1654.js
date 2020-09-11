const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [K, N] = data[0].split(" ").map(Number);
data.shift();
const line = data.map(Number);

line.sort((a, b) => a - b);

console.log(solve(line, N));

function solve(arr, target) {
  let left = 1;
  let right = arr[arr.length - 1];
  let mid = 0;
  let count = 0;
  let answer = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    count = cut(arr, mid);
    if (target <= count) {
      answer = mid > answer ? mid : answer;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

function cut(arr, l) {
  let ret = 0;
  arr.forEach((i) => (ret += Math.floor(i / l)));
  return ret;
}
