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
  for (let i = 0; i < input.length; i++) {
    let x = input[i].split(" ").map(Number);
    if (x[0] === 0 && x[1] === 0 && x[2] === 0) {
      break;
    }
    x.sort(compare);

    if (x[0] * x[0] + x[1] * x[1] === x[2] * x[2]) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }

  process.exit();
});
