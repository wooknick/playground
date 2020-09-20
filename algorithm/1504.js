const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const INF = 987654321;
const [N, E] = data[0].split(" ").map(Number);
const V = [];
for (let i = 0; i < N; i++) {
  V.push([]);
}
for (let i = 1; i < 1 + E; i++) {
  const [a, b, c] = data[i].split(" ").map(Number);
  V[a - 1].push([b - 1, c]);
  V[b - 1].push([a - 1, c]);
}
const [v1, v2] = data[E + 1].split(" ").map(Number);

// case 1
let d1 = dijkstra(0, v1 - 1);
let d2 = dijkstra(v1 - 1, v2 - 1);
let d3 = dijkstra(v2 - 1, N - 1);
let answer1;
if (d2 === INF) {
  answer1 = INF;
} else {
  answer1 = d1 + d2 + d3;
}
// console.log(d1, d2, d3);
// case 2
d1 = dijkstra(0, v2 - 1);
d2 = dijkstra(v2 - 1, v1 - 1);
d3 = dijkstra(v1 - 1, N - 1);
let answer2;
if (d2 === INF) {
  answer2 = INF;
} else {
  answer2 = d1 + d2 + d3;
}
// console.log(d1, d2, d3);
const answer = Math.min(answer1, answer2);
if (answer === INF) {
  console.log(-1);
} else {
  console.log(answer);
}

function dijkstra(start, end) {
  const distance = new Array(N).fill(INF);
  const visited = new Array(N).fill(false);
  distance[start] = 0;
  while (true) {
    let closest = INF;
    let here;
    for (let i = 0; i < N; i++) {
      if (distance[i] < closest && !visited[i]) {
        here = i;
        closest = distance[i];
      }
    }
    if (closest === INF) {
      break;
    }
    visited[here] = true;
    for (let i = 0; i < V[here].length; i++) {
      let there = V[here][i][0];
      if (visited[there]) {
        continue;
      }
      let nextDist = distance[here] + V[here][i][1];
      distance[there] = Math.min(distance[there], nextDist);
    }
  }
  return distance[end];
}
