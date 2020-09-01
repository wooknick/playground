const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let N = Number(data[0]);
const inputs = data[1].split(" ").map(Number);

inputs.reduce(reducer, [1, 1]);

function reducer(acc, cur, idx, arr) {
  if (idx === arr.length - 1) {
    return;
  }
  const a = cur * acc[0];
  const b = arr[idx + 1] * acc[1];
  const ret = [a / gcd(a, b), b / gcd(a, b)];
  console.log(`${ret[0]}/${ret[1]}`);

  return ret;
}

function gcd(x, y) {
  let a = x,
    b = y,
    t = 0;
  while (a % b !== 0) {
    t = a % b;
    a = b;
    b = t;
  }
  return b;
}
