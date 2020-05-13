const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = new Array(91).fill(-1);
memo[0] = 0n;
memo[1] = 1n;

const fibo = (n) => {
  if (n === 0 || n === 1) {
    return memo[n];
  } else {
    if (memo[n - 2] < 0) {
      memo[n - 2] = fibo(n - 2);
    }
    if (memo[n - 1] < 0) {
      memo[n - 1] = fibo(n - 1);
    }
    return memo[n - 1] + memo[n - 2];
  }
};

const n = Number(data[0]);
console.log(fibo(n).toString());
