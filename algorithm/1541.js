const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const inputs = data[0].split(new RegExp(/\b/g));
let sign = 1;
let answer = 0;

inputs.forEach((input) => {
  if (input === "+") {
    return;
  } else if (input === "-") {
    sign = -1;
  } else {
    answer += Number(input) * sign;
  }
});

console.log(answer);
