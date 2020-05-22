const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

// target보다 크거나 같은 숫자가 나오는 위치(index)
const lowerBound = (target, array) => {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (target <= array[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
};

const compare = (a, b) => {
  if (a[0] > b[0]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  } else {
    return 0;
  }
};

const n = Number(data[0]);
data.shift();
const A = data.map((item) => item.split(" ").map(Number));
A.sort(compare);
const LIS = [];

for (let i = 0; i < n; i++) {
  if (LIS.length === 0 || LIS[LIS.length - 1] < A[i][1]) {
    LIS.push(A[i][1]);
  } else {
    LIS[lowerBound(A[i][1], LIS)] = A[i][1];
  }
}

console.log(n - LIS.length);
