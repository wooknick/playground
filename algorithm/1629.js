const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = data[0].split(" ").map(BigInt);

console.log(pow(A % C, B) % C);

function pow(a, b) {
  if (b === BigInt(0)) {
    return BigInt(1);
  } else if (b % BigInt(2) === BigInt(0)) {
    const t = BigInt(pow(a, b / BigInt(2))) % C;
    return (t * t) % C;
  } else {
    return (BigInt(a % C) * BigInt(pow(a, b - BigInt(1)) % C)) % C;
  }
}
