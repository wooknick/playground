const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const dp = new Array(1001).fill(-1);

const n = Number(data[0]);
const A = data[1].split(" ").map(Number);

const solve = (start) => {
  if (dp[start] >= 0) {
    return dp[start];
  }
  let ret = 1;
  for (let i = start + 1; i < n; i++) {
    if (start === -1 || A[start] < A[i]) {
      ret = Math.max(ret, solve(i) + 1);
    }
  }
  dp[start] = ret;
  return ret;
};

console.log(solve(-1) - 1);
