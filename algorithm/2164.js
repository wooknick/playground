const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const queue = [];
let head = 0;
let tail = 0;

for (let i = 0; i < N; i++) {
  queue[tail++] = i + 1;
}

while (tail - head > 1) {
  head++;
  queue[tail++] = queue[head];
  head++;
}
console.log(queue[head]);
