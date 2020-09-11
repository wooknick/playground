const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
const input = data[1].split(" ").map(Number);
const answer = [0];

for (let i = 0; i < N; i++) {
  if (answer[answer.length - 1] < input[i]) {
    answer.push(input[i]);
  } else {
    answer[lowerBound(input[i], answer)] = input[i];
  }
}

console.log(answer.length - 1);

function lowerBound(target, array) {
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
}
