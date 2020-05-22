const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, k] = data[0].split(" ").map(Number);
data.shift();
const items = data.map((item) => item.split(" ").map(Number));

const dp = [];

for (let i = 0; i < 101; i++) {
  dp.push(new Array(k + 1).fill(-1));
}

const pack = (n, k) => {
  if (n === 1) {
    if (items[n - 1][0] <= k) {
      dp[n][k] = items[n - 1][1];
      return items[n - 1][1];
    } else {
      dp[n][k] = 0;
      return 0;
    }
  }
  let ret = 0;
  if (k < items[n - 1][0]) {
    if (dp[n][k] > -1) {
      ret = dp[n][k];
    } else {
      ret = pack(n - 1, k);
      dp[n][k] = ret;
    }
  } else {
    if (dp[n][k] > -1) {
      ret = dp[n][k];
    } else {
      ret = Math.max(
        pack(n - 1, k),
        pack(n - 1, k - items[n - 1][0]) + items[n - 1][1]
      );
      dp[n][k] = ret;
    }
  }
  return ret;
};

console.log(pack(n, k));
