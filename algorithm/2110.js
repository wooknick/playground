const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, C] = data[0].split(" ").map(Number);
data.shift();
const house = data.map(Number);

house.sort((a, b) => a - b);
console.log(solve(C));

function solve(C) {
  let left = 1;
  let right = 1000000000;
  let mid = 0;
  let ret = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (install(house, mid) >= C) {
      ret = ret > mid ? ret : mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ret;
}

function install(house, distance) {
  let count = 1;
  let cur = house[0];
  for (let i = 1; i < house.length; i++) {
    if (house[i] - cur >= distance) {
      count++;
      cur = house[i];
    }
  }
  return count;
}
