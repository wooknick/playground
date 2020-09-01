const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);

const queue = [];
let frontIdx = 0;
let endIdx = 0;
let answer = "";

for (let i = 1; i < N + 1; i++) {
  const line = data[i].split(" ");
  const order = line[0];
  const value = Number(line[1]);
  if (order === "push") {
    queue[endIdx++] = value;
  } else if (order === "pop") {
    answer += (endIdx === frontIdx ? -1 : queue[frontIdx++]) + "\n";
  } else if (order === "size") {
    answer += endIdx - frontIdx + "\n";
  } else if (order === "empty") {
    answer += (endIdx === frontIdx ? 1 : 0) + "\n";
  } else if (order === "front") {
    answer += (endIdx === frontIdx ? -1 : queue[frontIdx]) + "\n";
  } else if (order === "back") {
    answer += (endIdx === frontIdx ? -1 : queue[endIdx - 1]) + "\n";
  }
}

console.log(answer);
