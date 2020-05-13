const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = new Array(101).fill(-1);
memo[1] = 1;
memo[2] = 1;
memo[3] = 1;
memo[4] = 2;
memo[5] = 2;
memo[6] = 3;
memo[7] = 4;
memo[8] = 5;

const solve = (n) => {
  if (n < 6) {
    return memo[n];
  } else {
    if (memo[n] < 0) {
      memo[n] = solve(n - 1) + solve(n - 5);
    }
  }
  return memo[n];
};

const n = Number(data[0]);
data.shift();
data.map((i) => console.log(solve(i)));
