const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const PI = 3.141592;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const R = Number(input[0]);

  console.log(PI * R * R);
  console.log(2 * R * R);

  process.exit();
});
