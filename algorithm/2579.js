const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = [];
for (let i = 0; i < 301; i++) {
  memo.push([0, 0]);
}

const score = (n, stride) => {
  if (n <= 2) {
    return memo[n][stride];
  } else {
    if (memo[n][stride] === 0) {
      if (stride === 0) {
        memo[n][stride] = score(n - 1, 1) + Number(data[n]);
      } else if (stride === 1) {
        memo[n][stride] =
          Math.max(score(n - 2, 0), score(n - 2, 1)) + Number(data[n]);
      }
    }
    return memo[n][stride];
  }
};

const n = Number(data[0]);
memo[1][0] = Number(data[1]);
memo[1][1] = 0;
memo[2][0] = Math.max(memo[1][0], memo[1][1]) + Number(data[2]);
memo[2][1] = Number(data[2]);

console.log(Math.max(score(n, 0), score(n, 1)));
