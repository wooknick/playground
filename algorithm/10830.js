const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let [N, B] = data[0].split(" ").map(Number);
const A = [];
for (let i = 1; i < N + 1; i++) {
  A.push(data[i].split(" ").map((i) => Number(i) % 1000));
}
// console.log(A);

pow(A, B).map((line) => console.log(line.join(" ")));

// console.log(pow(A, B));

function pow(A, n) {
  if (n === 1) {
    return A;
  } else if (n % 2 === 0) {
    const t = pow(A, n / 2);
    return mult(t, t);
  } else {
    const t = pow(A, (n - 1) / 2);
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
      tArr.push(t % 1000);
    }
    arr.push(tArr);
  }
  return arr;
}
