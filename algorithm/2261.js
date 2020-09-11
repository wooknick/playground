const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = Number(data[0]);
const dots = [];
for (let i = 1; i <= n; i++) {
  dots.push(data[i].split(" ").map(Number));
}

dots.sort(sortByX);

const answer = solve(dots, 0, dots.length - 1);

console.log(answer);

function solve(dots, left, right) {
  if (right - left <= 2) {
    return bruteForce(dots, left, right);
  }
  const mid = Math.floor((left + right) / 2);
  const d1 = solve(dots, left, mid - 1);
  const d2 = solve(dots, mid + 1, right);
  let minD = Math.min(d1, d2);
  let candidate = [];

  for (let i = left; i <= right; i++) {
    let xDist = dots[i][0] - dots[mid][0];
    if (xDist * xDist < minD) {
      candidate.push(dots[i]);
    }
  }
  candidate.sort(sortByY);
  for (let i = 0; i < candidate.length - 1; i++) {
    for (let j = i + 1; j < candidate.length; j++) {
      let yDist = candidate[j][1] - candidate[i][1];
      if (yDist * yDist < minD) {
        let d3 = dist(candidate[i], candidate[j]);
        if (d3 < minD) {
          minD = d3;
        }
      } else {
        break;
      }
    }
  }
  return minD;
}

function bruteForce(arr, left, right) {
  let ret = 987654321;
  for (let i = left; i < right; i++) {
    for (let j = i + 1; j <= right; j++) {
      let t = dist(arr[i], arr[j]);
      if (ret > t) {
        ret = t;
      }
    }
  }
  return ret;
}

function dist(x, y) {
  return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2);
}

function sortByX(a, b) {
  return a[0] - b[0];
}

function sortByY(a, b) {
  return a[1] - b[1];
}
