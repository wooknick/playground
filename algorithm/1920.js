const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const A = data[1].split(" ").map(Number);
A.sort((a, b) => a - b);
const M = Number(data[2]);

data[3]
  .split(" ")
  .map((i) => console.log(search(A, 0, A.length - 1, Number(i)) > -1 ? 1 : 0));

function search(arr, left, right, target) {
  let mid = Math.floor((left + right) / 2);
  if (left > right) {
    return -1;
  }
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return search(arr, left, mid - 1, target);
  } else if (arr[mid] < target) {
    return search(arr, mid + 1, right, target);
  }
}
