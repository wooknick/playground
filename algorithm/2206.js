const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = data[0].split(" ").map(Number);

const map = [];
const visited = [];
for (let i = 1; i < N + 1; i++) {
  map.push(data[i].split("").map(Number));
}
for (let i = 0; i < N; i++) {
  const vv = [];
  for (let j = 0; j < M; j++) {
    vv.push(new Array(2).fill(0));
  }
  visited.push(vv);
}
// visited.push(new Array(M).fill(0));
visited[0][0][0] = 1;
visited[0][0][1] = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let q = [];
let frontIdx = 0;
let endIdx = 0;
q[endIdx++] = [0, 0, 0];

// 목표 : [N-1, M-1]
let finished = false;
let ret = 0;
if (N === 1 && M === 1) {
  console.log(1);
} else {
  bfs();
  console.log(finished ? ret + 1 : -1);
}

function bfs() {
  let length = endIdx - frontIdx;
  while (length > 0) {
    ret = ret + 1;
    for (let i = 0; i < length; i++) {
      const [x, y, b] = q[frontIdx++];
      for (let j = 0; j < 4; j++) {
        const tx = x + dx[j];
        const ty = y + dy[j];
        if (tx === N - 1 && ty === M - 1) {
          finished = true;
          return;
        }
        if (
          0 <= tx &&
          tx <= N - 1 &&
          0 <= ty &&
          ty <= M - 1 &&
          visited[tx][ty][b] === 0
        ) {
          if (map[tx][ty] === 0) {
            q[endIdx++] = [tx, ty, b];
            visited[tx][ty][b] = 1;
          } else if (b === 0) {
            q[endIdx++] = [tx, ty, 1];
            visited[tx][ty][1] = 1;
          }
        }
      }
    }
    length = endIdx - frontIdx;
    if (frontIdx > 10) {
      q = q.slice(frontIdx, endIdx);
      endIdx = length;
      frontIdx = 0;
    }
  }
}
