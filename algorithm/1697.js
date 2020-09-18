const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, K] = data[0].split(" ").map(Number);

const visited = new Array(100001).fill(0);

const dx = [-1, 0, 1];
const mx = [1, 2, 1];

const q = [];
let frontIdx = 0;
let endIdx = 0;
q[endIdx++] = N;

let ret = 0;
if (N === K) {
  console.log(0);
} else {
  bfs();
  console.log(ret);
}

function bfs() {
  let length = endIdx - frontIdx;
  while (length > 0) {
    ret = ret + 1;
    for (let i = 0; i < length; i++) {
      const x = q[frontIdx++];
      visited[x] = 1;
      for (let j = 0; j < 3; j++) {
        const tx = (x + dx[j]) * mx[j];
        if (tx === K) {
          return;
        }
        if (0 <= tx && tx <= 100000 && visited[tx] === 0) {
          q[endIdx++] = tx;
        }
      }
    }
    length = endIdx - frontIdx;
  }
}
