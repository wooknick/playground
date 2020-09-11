const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const input = [];

for (let i = 1; i < N + 1; i++) {
  input.push(data[i].split("").map(Number));
}

const answer = [];
quad(0, 0, N);

function quad(x, y, N) {
  const color = input[x][y];
  let shouldStop = false;
  if (N === 1) {
    answer.push(input[x][y]);
  } else {
    for (let i = x; i < x + N; i++) {
      for (let j = y; j < y + N; j++) {
        if (input[i][j] !== color) {
          shouldStop = true;
          break;
        }
      }
      if (shouldStop) {
        break;
      }
    }
    if (shouldStop) {
      answer.push("(");
      quad(x, y, N / 2);
      quad(x, y + N / 2, N / 2);
      quad(x + N / 2, y, N / 2);
      quad(x + N / 2, y + N / 2, N / 2);
      answer.push(")");
    } else {
      answer.push(color);
    }
  }
}

console.log(answer.join(""));
