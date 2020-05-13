const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function compare(a, b) {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else if (a[1] === b[1]) {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else if (a[0] === b[0]) return 0;
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  input.shift();

  const arr = input.map((item, idx) => [
    idx + 1,
    ...item.split(" ").map((i, idx) => {
      if (idx === 0) {
        return Number(i);
      } else {
        return i;
      }
    }),
  ]);

  arr.sort(compare);

  console.log(arr.flatMap((i) => i.slice(1, i.length).join(" ")).join("\n"));

  process.exit();
});
