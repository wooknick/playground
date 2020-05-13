const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);

  const A = [];
  let count = 0;
  for (let i = 1; i < 123456789; i++) {
    if (count > 10000) {
      break;
    }
    if (i.toString().search("666") > -1) {
      A.push(i);
      count = count + 1;
    }
  }

  console.log(A[N - 1]);
  process.exit();
});
