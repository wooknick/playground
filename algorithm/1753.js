const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const INF = 987654321;
const [V, E] = data[0].split(" ").map(Number);
const K = Number(data[1]);
const VV = [];
for (let i = 0; i < V; i++) {
  VV.push([]);
}
for (let i = 2; i < 2 + E; i++) {
  const [u, v, w] = data[i].split(" ").map(Number);
  VV[u - 1].push([v - 1, w]);
}

const d = dijkstra(K - 1);
let answer = "";
for (let i = 0; i < d.length; i++) {
  if (d[i] === INF) {
    answer += "INF\n";
  } else {
    answer += d[i] + "\n";
  }
}
console.log(answer);

function dijkstra(start) {
  const distance = new Array(V).fill(INF);
  const visited = new Array(V).fill(false);
  distance[start] = 0;
  while (true) {
    let closest = INF;
    let here;
    for (let i = 0; i < V; i++) {
      if (distance[i] < closest && !visited[i]) {
        here = i;
        closest = distance[i];
      }
    }
    if (closest === INF) {
      break;
    }
    visited[here] = true;
    for (let i = 0; i < VV[here].length; i++) {
      let there = VV[here][i][0];
      if (visited[there]) {
        continue;
      }
      let nextDist = distance[here] + VV[here][i][1];
      distance[there] = Math.min(distance[there], nextDist);
    }
  }
  return distance;
}
