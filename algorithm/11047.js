const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, K] = data[0].split(" ").map(Number);
let V = K;
let count = 0;
for (let i = N; i > 0; i--) {
  if (V === 0) {
    break;
  }
  if (Number(data[i]) <= V) {
    while (Number(data[i]) <= V) {
      V = V - Number(data[i]);
      count++;
    }
  }
}

console.log(count);
