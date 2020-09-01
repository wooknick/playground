const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
let memo2 = 0;
let memo5 = 0;

for (let i = 1; i < N + 1; i++) {
  let t = i;
  while (t % 2 === 0) {
    memo2++;
    t = t / 2;
  }
  t = i;
  while (t % 5 === 0) {
    memo5++;
    t = t / 5;
  }
}

console.log(Math.min(memo2, memo5));
