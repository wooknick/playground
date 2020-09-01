const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

data.pop();
data.forEach((x) => console.log(solve(x)));

function solve(x) {
  const stack = [];
  let ret = "yes";
  x.split("").forEach((i) => {
    if (i === "(" || i === "[") {
      stack.push(i);
    } else if (i === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        ret = "no";
        return;
      }
    } else if (i === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        ret = "no";
        return;
      }
    }
  });
  if (stack.length !== 0) {
    ret = "no";
  }
  return ret;
}
