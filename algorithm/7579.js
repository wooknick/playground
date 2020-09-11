const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = data[0].split(" ").map(Number);
const memory = data[1].split(" ").map(Number);
const dCost = data[2].split(" ").map(Number);
memory.unshift(0);
dCost.unshift(0);
const dp = [];
for (let i = 0; i < N + 1; i++) {
  dp.push(new Array(10001).fill(-1));
}

let lo = 0;
let hi = dCost.reduce((acc, cur) => acc + cur);
while (lo < hi) {
  let mid = Math.floor((lo + hi) / 2);
  if (solve(N, mid) >= M) {
    hi = mid;
  } else {
    lo = mid + 1;
  }
}

console.log(lo);

function solve(N, targetCost) {
  // N번째 앱까지, targetCost를 소모해서 확보할 수 있는 최대 메모리
  if (N < 1) {
    return 0;
  }
  if (dp[N][targetCost] !== -1) {
    return dp[N][targetCost];
  }
  dp[N][targetCost] = solve(N - 1, targetCost);
  if (targetCost - dCost[N] >= 0) {
    dp[N][targetCost] = Math.max(
      dp[N][targetCost],
      solve(N - 1, targetCost - dCost[N]) + memory[N]
    );
  }
  return dp[N][targetCost];
}
