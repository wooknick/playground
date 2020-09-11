const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = Number(data[0]);
const matrix = [[0, 0]];
for (let i = 1; i < n + 1; i++) {
  matrix.push(data[i].split(" ").map(Number));
}

const dp = [];
// dp는 개수보다 1 크게 2차원 배열로 선언
for (let j = 0; j < n + 1; j++) {
  dp.push(new Array(n + 1).fill(0));
}
// dp[i][j]는 i번째 파일 ~ j번재 파일을 합칠 때의 비용을 의미.
//
for (let d = 1; d < n; d++) {
  for (let x = 1; x + d <= n; x++) {
    let y = x + d;
    dp[x][y] = 987654321;
    for (let t = x; t < y; t++) {
      dp[x][y] = Math.min(
        dp[x][y],
        dp[x][t] + dp[t + 1][y] + matrix[x][0] * matrix[t][1] * matrix[y][1]
      );
    }
  }
}

console.log(dp[1][n]);
