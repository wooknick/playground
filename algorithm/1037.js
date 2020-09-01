const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const d = data[1].split(" ").map(Number);

if (N === 1) {
  console.log(d * d);
} else {
  d.sort((a, b) => a - b);
  console.log(d[0] * d[d.length - 1]);
}
