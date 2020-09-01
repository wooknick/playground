const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const C = data.shift();

for (let i = 0; i < C; i++) {
  const order = data.shift().split("");
  data.shift();
  const arr =
    data[0] === "[]" ? [] : data[0].slice(1, data[0].length - 1).split(",");
  let answer = "";
  data.shift();

  let reverse = false;
  for (let j = 0; j < order.length; j++) {
    if (order[j] === "D") {
      if (arr.length === 0) {
        answer = "error";
        break;
      } else {
        if (reverse) {
          arr.pop();
        } else {
          arr.shift();
        }
      }
    } else if (order[j] === "R") {
      reverse = !reverse;
    }
  }
  console.log(
    !!answer ? answer : `[${reverse ? arr.reverse().join(",") : arr.join(",")}]`
  );
}
