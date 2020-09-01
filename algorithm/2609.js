const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let input = data[0].split(" ").map(Number);

console.log(gcd(...input));
console.log((input[0] * input[1]) / gcd(...input));

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
