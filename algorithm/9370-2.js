const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const INF = 987654321;
let idx = 0;
const T = Number(data[idx++]);
for (let i = 0; i < T; i++) {
  const [N, E, TT] = data[idx++].split(" ").map(Number);
  const [s, g, h] = data[idx++].split(" ").map(Number);
  const V = [];
  for (let j = 0; j < N; j++) {
    V.push([]);
  }
  for (let j = 0; j < E; j++) {
    const [a, b, c] = data[idx++].split(" ").map(Number);
    if ((a === g && b === h) || (a === h && b === g)) {
      V[a - 1].push([b - 1, c * 2 - 1]);
      V[b - 1].push([a - 1, c * 2 - 1]);
    } else {
      V[a - 1].push([b - 1, c * 2]);
      V[b - 1].push([a - 1, c * 2]);
    }
  }

  const SS = dijkstra(s - 1, N, V);
  console.log(SS);
  const candidate = [];
  for (let j = 0; j < TT; j++) {
    const tCandidate = Number(data[idx++]);
    if (SS[tCandidate - 1] !== INF && SS[tCandidate - 1] % 2 !== 0) {
      candidate.push(tCandidate);
    }
  }
  console.log(candidate.sort().join(" "));
}

function dijkstra(start, N, V) {
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
  return distance;
}
