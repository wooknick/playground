const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const C = Number(data[0]);
data.shift();
for (let i = 0; i < C; i++) {
  const N = data.shift();
  const clothes = {};
  for (let j = 0; j < N; j++) {
    cloth = data.shift().split(" ");
    if (!clothes[cloth[1]]) {
      clothes[cloth[1]] = 1;
    } else {
      clothes[cloth[1]] += 1;
    }
  }
  console.log(
    Object.values(clothes).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
}
