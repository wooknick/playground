const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
data.shift();
const cost = data.map((i) => i.split(" ").map(Number));
cost.unshift([-1, -1, -1]);

const memo = [];
for (let i = 0; i < 1001; i++) {
  memo.push([-1, -1, -1]);
}

const paint = (n, color) => {
  if (n === 1) {
    memo[n][color] = cost[n][color];
    return memo[n][color];
  }
  if (memo[n - 1][0] < 0) {
    memo[n - 1][0] = paint(n - 1, 0);
  }
  if (memo[n - 1][1] < 0) {
    memo[n - 1][1] = paint(n - 1, 1);
  }
  if (memo[n - 1][2] < 0) {
    memo[n - 1][2] = paint(n - 1, 2);
  }

  memo[n][color] =
    Math.min(memo[n - 1][(color + 1) % 3], memo[n - 1][(color + 2) % 3]) +
    cost[n][color];

  return memo[n][color];
};

console.log(Math.min(paint(N, 0), paint(N, 1), paint(N, 2)));
