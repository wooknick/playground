const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let N = Number(data[0]);
while (N !== 1) {
  for (let i = 2; i <= N; i++) {
    if (N % i === 0) {
      console.log(i);
      N = N / i;
      break;
    }
  }
}
