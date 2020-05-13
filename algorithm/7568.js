const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const person = [];
  const answer = [];

  for (let i = 1; i < N + 1; i++) {
    person.push(input[i].split(" ").map((i) => parseInt(i)));
  }

  for (let i = 0; i < N; i++) {
    let countBiggerThanMe = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) {
          countBiggerThanMe++;
        }
      }
    }
    answer.push(countBiggerThanMe + 1);
  }
  console.log(answer.toString().replace(/,/g, " "));
  process.exit();
});
