const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < data.length - 1; i++) {
  const arr = data[i].split(" ").map(BigInt);
  arr.shift();
  console.log(solve(arr, 0, arr.length - 1).toString());
}

function solve(arr, left, right) {
  if (left === right) {
    return arr[left];
  }
  let mid = Math.floor((left + right) / 2);
  const area1 = solve(arr, left, mid);
  const area2 = solve(arr, mid + 1, right);
  let maxArea = BigIntMax(area1, area2);
  let low = mid;
  let high = mid + 1;
  let height = BigIntMin(arr[low], arr[high]);
  maxArea = BigIntMax(maxArea, height * 2n);
  while (left < low || high < right) {
    if (high < right && (low === left || arr[low - 1] < arr[high + 1])) {
      high++;
      height = BigIntMin(height, arr[high]);
    } else {
      low--;
      height = BigIntMin(height, arr[low]);
    }
    maxArea = BigIntMax(maxArea, height * BigInt(high - low + 1));
  }
  return maxArea;
}

function BigIntMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function BigIntMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
