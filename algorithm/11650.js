const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function compare(a, b) {
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else if (a[0] === b[0]) {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else if (a[1] === b[1]) return 0;
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  input.shift();

  const arr = input.map((item) => item.split(" ").map(Number));

  arr.sort(compare);

  console.log(arr.flatMap((i) => i.join(" ")).join("\n"));

  process.exit();
});
