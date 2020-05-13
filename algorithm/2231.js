const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input[0];

  let start = parseInt(N) - N.split("").length * 9;
  let answer = [];

  for (let i = start; i < parseInt(N); i++) {
    let sum = i;
    i.toString()
      .split("")
      .forEach((item) => {
        sum += parseInt(item);
      });
    if (sum == N) {
      answer.push(i);
    }
  }
  console.log(answer.length > 0 ? answer[0] : 0);
  process.exit();
});
