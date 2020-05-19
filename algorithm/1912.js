const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = Number(data[0]);
const arr = data[1].split(" ").map(Number);
const dp = new Array(100001).fill(0);
const sum = new Array(100001).fill(0);

// n번째 수를 포함하는 최대 연속합

for (let i = 0; i < n; i++) {
  if (i === 0) {
    dp[i] = arr[i];
    sum[i] = arr[i];
  } else {
    if (sum[i - 1] < 0) {
      sum[i] = arr[i];
    } else {
      sum[i] = sum[i - 1] + arr[i];
    }
    dp[i] = Math.max(sum[i - 1] + arr[i], arr[i], dp[i - 1]);
  }
}

console.log(dp[n - 1]);
