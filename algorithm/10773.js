const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

data.shift();
const stack = [];

data.forEach((x) => {
  if (x === 0) {
    stack.pop();
  } else {
    stack.push(x);
  }
});

let sum = 0;

stack.forEach((x) => {
  sum += x;
});

console.log(sum);
