const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const moveCount = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return moveCount(n - 1) * 2 + 1;
  }
};

const move = (n, from, to) => {
  if (n === 1) {
    console.log(`${from} ${to}`);
  } else {
    move(n - 1, from, 6 - from - to);
    console.log(`${from} ${to}`);
    move(n - 1, 6 - from - to, to);
  }
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  console.log(Math.pow(2, n) - 1);
  move(n, 1, 3);
  process.exit();
});
