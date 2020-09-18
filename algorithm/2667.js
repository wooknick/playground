const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);

const map = [];
for (let i = 1; i < N + 1; i++) {
  map.push(data[i].split("").map(Number));
}
const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      answer.push(bfs(i, j));
    }
  }
}
console.log(answer.length);
answer.sort((x, y) => x - y);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

function bfs(x, y) {
  let ret = 0;
  if (x === -1 || x === N || y === -1 || y === N) {
    return 0;
  } else if (map[x][y] === 0) {
    return 0;
  } else {
    map[x][y] = 0;
    ret += 1;
    ret += bfs(x + 1, y);
    ret += bfs(x - 1, y);
    ret += bfs(x, y + 1);
    ret += bfs(x, y - 1);
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
