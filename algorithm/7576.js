const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [M, N] = data[0].split(" ").map(Number);

const map = [];
const visited = [];
for (let i = 1; i < N + 1; i++) {
  map.push(data[i].split(" ").map(Number));
  visited.push(new Array(M).fill(0));
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const q = [];
let frontIdx = 0;
let endIdx = 0;
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (map[x][y] === 1) {
      visited[x][y] = 1;
      // q.push([x, y]);
      q[endIdx++] = [x, y];
    }
  }
}
console.log(bfs() - 1);

function bfs() {
  let ret = 0;
  let length = q.length;
  while (length > 0) {
    ret = ret + 1;
    for (let i = 0; i < length; i++) {
      // const [x, y] = q.shift();
      const [x, y] = q[frontIdx++];
      for (let j = 0; j < 4; j++) {
        const tx = x + dx[j];
        const ty = y + dy[j];
        // 인덱스 넘치지 않고, 방문 가능한 길인데, 아직 방문하지 않았다면
        if (
          0 <= tx &&
          tx < N &&
          0 <= ty &&
          ty < M &&
          map[tx][ty] === 0 &&
          visited[tx][ty] === 0
        ) {
          visited[tx][ty] = 1;
          map[tx][ty] = 1;
          // q.push([tx, ty]);
          q[endIdx++] = [tx, ty];
        }
      }
    }
    // length = q.length;
    length = endIdx - frontIdx;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) {
        ret = 0;
        break;
      }
    }
    if (ret === 0) {
      break;
    }
  }
  return ret;
}
