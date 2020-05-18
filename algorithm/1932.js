const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const memo = [new Array(501).fill(0), new Array(501).fill(0)];

const cal = (arr, next) => {
  let pre = (next + 1) % 2;
  arr.forEach((item, idx) => {
    if (idx === 0) {
      memo[next][idx] = memo[pre][idx] + item;
    } else if (idx === arr.length - 1) {
      memo[next][idx] = memo[pre][idx - 1] + item;
    } else {
      memo[next][idx] = Math.max(memo[pre][idx - 1], memo[pre][idx]) + item;
    }
  });
};

const n = Number(data[0]);
data.shift();

data.forEach((item, idx) => cal(item.split(" ").map(Number), idx % 2));

console.log(Math.max(...memo[(n + 1) % 2]));
