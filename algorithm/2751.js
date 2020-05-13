const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function compare(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else if (a === b) return 0;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  input.shift();

  const arr = input.map(Number);
  arr.sort(compare);

  console.log(arr.join("\n"));

  process.exit();
});
