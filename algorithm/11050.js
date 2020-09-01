const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = [];
for (let i = 0; i < 1001; i++) {
  memo.push([...new Array(1001).fill(1)]);
}

const mod = 10007;

const inputs = data[0].split(" ").map(Number);

for (let i = 2; i < 1001; i++) {
  for (let j = 1; j < i; j++) {
    memo[i][j] = ((memo[i - 1][j - 1] % mod) + (memo[i - 1][j] % mod)) % mod;
  }
}

console.log(memo[inputs[0]][inputs[1]]);
