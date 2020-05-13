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
  col = new Array(N).fill(false);
  diagonal1 = new Array(N * 2).fill(false);
  diagonal2 = new Array(N * 2).fill(false);

  let answer = 0;

  const DFS = (x) => {
    if (x === N) {
      answer += 1;
      return;
    }
    for (let y = 0; y < N; y++) {
      if (!col[y] && !diagonal1[x + y] && !diagonal2[x - y + (N - 1)]) {
        col[y] = true;
        diagonal1[x + y] = true;
        diagonal2[x - y + (N - 1)] = true;
        DFS(x + 1);
        col[y] = false;
        diagonal1[x + y] = false;
        diagonal2[x - y + (N - 1)] = false;
      }
    }
  };

  // 깊이 0부터 방문시작
  DFS(0);

  console.log(answer);

  process.exit();
});
