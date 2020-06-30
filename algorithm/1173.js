const data = require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();

const [N, m, M, T, R] = data.split(" ").map(Number);

let count = N;
let ret = 0;
let b = m;
if (m + T > M) {
  console.log(-1);
} else {
  while (count > 0) {
    if (b + T <= M) {
      count--;
      b += T;
    } else {
      if (b - R >= m) {
        b = b - R;
      } else {
        b = m;
      }
    }
    ret++;
  }
  console.log(ret);
}
