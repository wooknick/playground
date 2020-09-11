const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = data[0].split(" ").map(Number);
const trees = data[1].split(" ").map(Number);

trees.sort((a, b) => a - b);
console.log(solve(trees, M));

function solve(arr, target) {
  let left = 1;
  let right = arr[arr.length - 1];
  let mid = 0;
  let amount = 0;
  let answer = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    amount = cut(arr, mid);
    if (target <= amount) {
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
  arr.forEach((i) => (ret += i - l > 0 ? i - l : 0));
  return ret;
}
