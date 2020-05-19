const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const dp = new Array(1001).fill(-1);
const dpR = new Array(1001).fill(-1);

const n = Number(data[0]);
const A = data[1].split(" ").map(Number);

// const solve = (start) => {
//   if (dp[start] >= 0) {
//     return dp[start];
//   }
//   let ret = 1;
//   for (let i = start + 1; i < n; i++) {
//     if (start === -1 || A[start] < A[i]) {
//       ret = Math.max(ret, solve(i) + 1);
//     }
//   }
//   dp[start] = ret;
//   return ret;
// };

const LIS = (last) => {
  if (dp[last] >= 0) {
    return dp[last];
  }
  let ret = 1;
  for (let i = 0; i < last; i++) {
    if (A[i] < A[last]) {
      ret = Math.max(ret, LIS(i) + 1);
    }
  }
  dp[last] = ret;
  return ret;
};

const LISR = (start) => {
  if (dpR[start] >= 0) {
    return dpR[start];
  }
  let ret = 1;
  for (let i = start + 1; i < n; i++) {
    if (A[start] > A[i]) {
      ret = Math.max(ret, LISR(i) + 1);
    }
  }
  dpR[start] = ret;
  return ret;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  LIS(i);
  LISR(i);
}

for (let i = 0; i < n; i++) {
  answer = Math.max(answer, dp[i] + dpR[i] - 1);
}

// console.log(dp[n - 1]);
console.log(answer);
