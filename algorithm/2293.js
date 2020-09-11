const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, k] = data[0].split(" ").map(Number);
const coins = [];
for (let i = 1; i < n + 1; i++) {
  coins.push(Number(data[i]));
}

const memo = new Array(10001).fill(0);
memo[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j >= coins[i]) {
      memo[j] += memo[j - coins[i]];
    }
  }
}

console.log(memo[k]);
