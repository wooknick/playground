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
  visited.push(new Array(M).fill(0));
}
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let answer = 0;
bfs();
console.log(answer + 1);

function bfs() {
  const q = [];
  q.push([0, 0]);
  while (q.length > 0) {
    const length = q.length;
    answer++;
    for (let i = 0; i < length; i++) {
      const [x, y] = q.shift();
      for (let j = 0; j < 4; j++) {
        const tx = x + dx[j];
        const ty = y + dy[j];
        // 인덱스 넘치지 않고, 방문 가능한 길인데, 아직 방문하지 않았다면
        if (
          0 <= tx &&
          tx < N &&
          0 <= ty &&
          ty < M &&
          map[tx][ty] === 1 &&
          visited[tx][ty] === 0
        ) {
          if (tx === N - 1 && ty === M - 1) {
            return;
          }
          visited[tx][ty] = 1;
          q.push([tx, ty]);
        }
      }
    }
  }
}
