const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = BigInt(data[0]);
const A = [
  [1, 1],
  [1, 0],
];

console.log(solve(N));

function solve(n) {
  if (n === 1n) {
    return 1;
  } else {
    return mult(pow(A, n - 1n), [[1], [0]])[0][0];
  }
}

function pow(A, n) {
  if (n === 1n) {
    return A;
  } else if (n % 2n === 0n) {
    const t = pow(A, n / 2n);
    return mult(t, t);
  } else {
    const t = pow(A, (n - 1n) / 2n);
    return mult(mult(t, t), A);
  }
}

function mult(A, B) {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    const tArr = [];
    for (let j = 0; j < B[0].length; j++) {
      let t = 0;
      for (let x = 0; x < B.length; x++) {
        t += A[i][x] * B[x][j];
      }
      tArr.push(t % 1000000);
    }
    arr.push(tArr);
  }
  return arr;
}
