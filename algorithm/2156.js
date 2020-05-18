const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = new Array(101).fill(0);

const n = data[0];
dp[1] = data[1];
dp[2] = data[1] + data[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + data[i],
    dp[i - 3] + data[i - 1] + data[i],
    dp[i - 1]
  );
}

console.log(dp[n]);
