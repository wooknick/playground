const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);

let times = data[1].split(" ").map(Number);
times.sort(sortFn);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += times[i] * (N - i);
}

console.log(answer);

function sortFn(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}
