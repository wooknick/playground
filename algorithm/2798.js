const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const a = input[0].split(" ");

  const N = parseInt(a[0]);
  const M = parseInt(a[1]);
  const cards = input[1].split(" ").map((i) => parseInt(i));

  const answer = [];

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let t = cards[i] + cards[j] + cards[k];
        if (t <= M) {
          answer.push(t);
        }
      }
    }
  }

  answer.sort(compare);
  console.log(answer[0]);

  process.exit();
});
