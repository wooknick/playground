const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let N, M, K;
[N, M] = data[0].split(" ").map(Number);
[M, K] = data[N + 1].split(" ").map(Number);
const A = data.slice(1, N + 1).map((i) => i.split(" ").map(Number));
const B = data.slice(N + 2, data.length).map((i) => i.split(" ").map(Number));

let answer = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    let t = 0;
    for (let k = 0; k < M; k++) {
      t += A[i][k] * B[k][j];
    }
    answer += t;
    answer += " ";
  }
  answer += "\n";
}

console.log(answer);
