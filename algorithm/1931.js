const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
data.shift();

let meetings = data.map((item) => item.split(" ").map(Number));
meetings.sort(sortFnA);

let answer = 0;
let endTime = 0;
for (meeting of meetings) {
  if (meeting[0] >= endTime) {
    answer++;
    endTime = meeting[1];
  }
}

console.log(answer);

function sortFnA(a, b) {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else return sortFnB(a, b);
}

function sortFnB(a, b) {
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else return 0;
}
