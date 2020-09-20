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
    V[a - 1].push([b - 1, c]);
    V[b - 1].push([a - 1, c]);
  }

  const Sto = dijkstra(s - 1, N, V);
  const Gto = dijkstra(g - 1, N, V);
  const Hto = dijkstra(h - 1, N, V);

  // console.log(Sto);
  // console.log(Gto);
  // console.log(Hto);
  const candidate = [];
  for (let j = 0; j < TT; j++) {
    const tCandidate = Number(data[idx++]);
    if (
      Sto[tCandidate - 1] ===
      Math.min(
        Sto[g - 1] + Gto[h - 1] + Hto[tCandidate - 1],
        Sto[h - 1] + Hto[g - 1] + Gto[tCandidate - 1]
      )
    ) {
      candidate.push(tCandidate);
    }
  }
  candidate.sort();
  let answer = "" + candidate[0];
  for (let j = 1; j < candidate.length; j++) {
    answer += " " + candidate[j];
  }
  console.log(answer);
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
