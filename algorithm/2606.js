const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const C = Number(data[1]);
const graph = [];
let answer = 0;
for (let i = 0; i < N + 1; i++) {
  graph.push([0]);
}
const visited = new Array(N + 1).fill(0);
for (let i = 2; i < 2 + C; i++) {
  let [x, y] = data[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

dfs(1);
console.log(visited.filter((i) => i === 1).length - 1);

function dfs(start) {
  if (visited[start] === 1) {
    return;
  }
  answer += 1;
  visited[start] = 1;
  for (let i = 1; i < graph[start].length; i++) {
    dfs(graph[start][i]);
  }
  console.log(visited);
}
