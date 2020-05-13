const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = data[0].split(" ").map(Number);
data.shift();
const stat = data.map((line) => line.split(" ").map(Number));
const player = [];
for (let i = 0; i < N; i++) {
  player.push(false);
}

let min = 987654321;

const cal = (picked) => {
  let ret = 0;
  for (let i = 0; i < picked.length; i++) {
    for (let j = 0; j < picked.length; j++) {
      ret += stat[picked[i]][picked[j]];
    }
  }
  return ret;
};

const pick = (picked, n, k) => {
  if (n === N / 2) {
    let unPicked = player
      .map((i, idx) => idx)
      .filter((i) => !picked.includes(i));
    let tmp = Math.abs(cal(picked) - cal(unPicked));

    min = min > tmp ? tmp : min;
    return;
  }
  for (let i = k; i < N; i++) {
    if (!player[i]) {
      player[i] = true;
      pick([...picked, i], n + 1, i + 1);
      player[i] = false;
    }
  }
};

pick([], 0, 0);

console.log(min);
