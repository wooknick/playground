const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = data[0].split(" ").map(Number);

console.log(
  Math.min(
    cal(n, 2) - cal(m, 2) - cal(n - m, 2),
    cal(n, 5) - cal(m, 5) - cal(n - m, 5)
  )
);

function cal(x, p) {
  let t = x;
  let ret = 0;
  while (t >= p) {
    ret += Math.floor(t / p);
    t /= p;
  }
  return ret;
}
