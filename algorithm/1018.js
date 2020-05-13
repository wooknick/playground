// js 빠른 input

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input.pop();
const board = input.map((str) => str.split(""));
const boardWhite = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];
const boardBlack = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

const checkBnW = (idxR, idxC) => {
  let [countW, countB] = [0, 0];

  for (let i = idxR; i < idxR + 8; i++) {
    for (let j = idxC; j < idxC + 8; j++) {
      if (board[i][j] === boardWhite[i - idxR][j - idxC]) {
        countW++;
      } else if (board[i][j] === boardBlack[i - idxR][j - idxC]) {
        countB++;
      }
    }
  }

  return Math.min(countW, countB);
};

let min = 3000;
for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    let tmp = checkBnW(i, j);
    min = Math.min(min, tmp);
  }
}

console.log(min);
