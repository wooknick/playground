const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const xy = [[], []];
  input[0].split(" ").map((item, idx) => {
    if (!xy[idx].includes(item)) {
      xy[idx].push(item);
    } else {
      xy[idx].splice(xy[idx].indexOf(item), 1);
    }
  });

  input[1].split(" ").map((item, idx) => {
    if (!xy[idx].includes(item)) {
      xy[idx].push(item);
    } else {
      xy[idx].splice(xy[idx].indexOf(item), 1);
    }
  });
  input[2].split(" ").map((item, idx) => {
    if (!xy[idx].includes(item)) {
      xy[idx].push(item);
    } else {
      xy[idx].splice(xy[idx].indexOf(item), 1);
    }
  });

  console.log(`${xy[0][0]} ${xy[1][0]}`);
  process.exit();
});
