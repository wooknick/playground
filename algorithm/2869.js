const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const goUp = (A, B, V) => {
  if (A > V) {
    return 1;
  } else {
    return Math.floor((V - B - 1) / (A - B) + 1);
  }
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [A, B, V] = input[0].split(" ").map(Number);

  console.log(goUp(A, B, V));
  process.exit();
});
