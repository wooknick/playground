const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const x = Number(input[0]);
  const y = Number(input[1]);

  let answer = 0;
  if (x * y > 0) {
    if (x > 0) {
      answer = 1;
    } else {
      answer = 3;
    }
  } else {
    if (x > 0) {
      answer = 4;
    } else {
      answer = 2;
    }
  }
  console.log(answer);
  process.exit();
});
