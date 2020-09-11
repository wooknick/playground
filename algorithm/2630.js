const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const paper = [];
const count = [0, 0];

for (let i = 1; i < N + 1; i++) {
  paper.push(data[i].split(" ").map(Number));
}

check(0, 0, N);
console.log(count[0]);
console.log(count[1]);

function check(x, y, N) {
  const color = paper[x][y];
  let shouldStop = false;
  if (N === 1) {
    count[color]++;
  } else {
    for (let i = x; i < x + N; i++) {
      for (let j = y; j < y + N; j++) {
        if (paper[i][j] !== color) {
          shouldStop = true;
          break;
        }
      }
      if (shouldStop) {
        break;
      }
    }
    if (shouldStop) {
      check(x, y, N / 2);
      check(x, y + N / 2, N / 2);
      check(x + N / 2, y, N / 2);
      check(x + N / 2, y + N / 2, N / 2);
    } else {
      count[color]++;
    }
  }
}
