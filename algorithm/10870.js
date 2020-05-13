const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const fibo = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  //   console.log(n);
  console.log(fibo(n));
  process.exit();
});
