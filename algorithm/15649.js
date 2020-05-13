const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = new Array(M);
  const visit = new Array(N + 1).fill(false);
  let answer = "";

  // N 후보 숫자 범위, M 목적 깊이, d는 방문 깊이
  const DFS = (s, N, M, d) => {
    if (M === d) {
      arr.forEach((item) => (answer = answer + item + " "));
      answer += "\n";
      return;
    }
    for (let i = s; i <= N; i++) {
      if (!visit[i]) {
        // visit[i] = true;
        arr[d] = i;
        DFS(i, N, M, d + 1);
        // visit[i] = false;
      }
    }
    return;
  };

  // 깊이 0부터 방문시작
  DFS(1, N, M, 0);

  console.log(answer);

  process.exit();
});
