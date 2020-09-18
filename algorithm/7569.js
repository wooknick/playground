const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = data[0].split(" ").map(Number);

let idx = 1;
const map = [];
const visited = [];
for (let i = 0; i < H; i++) {
  const hh = [];
  const vv = [];
  for (let j = 0; j < N; j++) {
    hh.push(data[idx++].split(" ").map(Number));
    vv.push(new Array(M).fill(0));
  }
  map.push(hh);
  visited.push(vv);
}

const dx = [0, 0, 1, -1, 0, 0];
const dy = [1, -1, 0, 0, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const q = [];
let frontIdx = 0;
let endIdx = 0;
for (let z = 0; z < H; z++) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (map[z][x][y] === 1) {
        visited[z][x][y] = 1;
        // q.push([x, y]);
        q[endIdx++] = [z, x, y];
      }
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
      const [z, x, y] = q[frontIdx++];
      for (let j = 0; j < 6; j++) {
        const tx = x + dx[j];
        const ty = y + dy[j];
        const tz = z + dz[j];
        // 인덱스 넘치지 않고, 방문 가능한 길인데, 아직 방문하지 않았다면
        if (
          0 <= tz &&
          tz < H &&
          0 <= tx &&
          tx < N &&
          0 <= ty &&
          ty < M &&
          map[tz][tx][ty] === 0 &&
          visited[tz][tx][ty] === 0
        ) {
          visited[tz][tx][ty] = 1;
          map[tz][tx][ty] = 1;
          // q.push([tx, ty]);
          q[endIdx++] = [tz, tx, ty];
        }
      }
    }
    // length = q.length;
    length = endIdx - frontIdx;
  }
  for (let k = 0; k < H; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[k][i][j] === 0) {
          ret = 0;
          break;
        }
      }
      if (ret === 0) {
        break;
      }
    }
    if (ret === 0) {
      break;
    }
  }
  return ret;
}
