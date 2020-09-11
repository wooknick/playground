const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, k] = data.map(Number);

console.log(solve(1, k, k));

function solve(left, right, target) {
  let ret = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 1; i < N + 1; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }
    if (count < target) {
      left = mid + 1;
    } else {
      ret = mid;
      right = mid - 1;
    }
  }
  return ret;
}
