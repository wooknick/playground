const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [x, y, w, h] = input[0].split(" ").map(Number);

  let min = x > y ? y : x;
  let min2 = w - x > h - y ? h - y : w - x;

  const answer = min > min2 ? min2 : min;
  console.log(answer);
  process.exit();
});
