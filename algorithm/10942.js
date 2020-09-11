const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const arr = data[1].split(" ").map(Number);
arr.unshift(0);
const M = Number(data[2]);
const dp = [];
for (let i = 0; i < N + 1; i++) {
  dp.push(new Array(N + 1).fill(-1));
}

let answer = "";
for (let i = 0; i < M; i++) {
  const t = data[i + 3].split(" ").map(Number);
  answer += solve(...t) + "\n";
}
console.log(answer);

function solve(S, E) {
  if (dp[S][E] !== -1) {
    return dp[S][E];
  }
  if (E - S <= 2) {
    if (arr[E] === arr[S]) {
      dp[S][E] = 1;
    } else {
      dp[S][E] = 0;
    }
    return dp[S][E];
  }
  dp[S][E] = solve(S + 1, E - 1);
  if (arr[E] === arr[S] && dp[S][E] === 1) {
    dp[S][E] = 1;
  } else {
    dp[S][E] = 0;
  }
  return dp[S][E];
}
