const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = [0n, 1n, 2n];

const solve = (n) => {
  if (n > 2) {
    for (let i = 2; i < n; i++) {
      memo.push((memo[i - 1] + memo[i]) % 15746n);
    }
  }
  return memo[n];
};

const n = Number(data[0]);
console.log((solve(n) % 15746n).toString());
