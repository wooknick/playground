const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [M, N] = data[0].split(" ").map(Number);

const map = [];
for (let i = 1; i < M + 1; i++) {
  const t = data[i].split(" ").map(Number);
  map.push(t);
}

const dp = [];
for (let i = 0; i < M; i++) {
  dp.push(new Array(N).fill(-1));
}

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function solve(x, y) {
  if (x === M - 1 && y === N - 1) {
    return 1;
  }
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }
  dp[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    let tx = x + dx[i];
    let ty = y + dy[i];
    if (0 <= tx && tx < M && 0 <= ty && ty < N) {
      if (map[tx][ty] < map[x][y]) {
        dp[x][y] += solve(tx, ty);
      }
    }
  }
  return dp[x][y];
}

console.log(solve(0, 0));
// map.forEach((i) => console.log(JSON.stringify(i)));
// dp.forEach((i) => console.log(JSON.stringify(i)));
