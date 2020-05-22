const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const LCS = [];
for (let ii = 0; ii < 1002; ii++) {
  let tmp = new Array(1001).fill(0);
  LCS.push(tmp);
}

const x = data[0];
const y = data[1];

for (let i = 1; i < x.length + 1; i++) {
  for (let j = 1; j < y.length + 1; j++) {
    if (x.charAt(i - 1) === y.charAt(j - 1)) {
      LCS[i][j] = LCS[i][j] + LCS[i - 1][j - 1] + 1;
    } else {
      LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    }
  }
}
console.log(LCS[x.length][y.length]);
