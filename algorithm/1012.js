const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const T = Number(data[idx++]);
let map = [];
for (let i = 0; i < T; i++) {
  map = [];
  const [M, N, K] = data[idx++].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    map.push(new Array(N).fill(0));
  }
  for (let j = 0; j < K; j++) {
    const [x, y] = data[idx++].split(" ").map(Number);
    map[x][y] = 1;
  }
  const answer = [];
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (map[x][y] === 1) {
        answer.push(dfs(x, y, M, N));
      }
    }
  }
  console.log(answer.length);
}

function dfs(x, y, M, N) {
  let ret = 0;
  if (x === -1 || x === M || y === -1 || y === N) {
    return 0;
  } else if (map[x][y] === 0) {
    return 0;
  } else {
    map[x][y] = 0;
    ret += 1;
    ret += dfs(x + 1, y, M, N);
    ret += dfs(x - 1, y, M, N);
    ret += dfs(x, y + 1, M, N);
    ret += dfs(x, y - 1, M, N);
  }
  return ret;
}

// 7
// 0110100
// 0110101
// 1110101
// 0000111
// 0100000
// 0111110
// 0111001
