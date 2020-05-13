const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const numbers = data[1].split(" ").map(Number);
const operator = data[2].split(" ").flatMap((i, idx) => {
  if (idx === 0) {
    return "+".repeat(i).split("");
  } else if (idx === 1) {
    return "-".repeat(i).split("");
  } else if (idx === 2) {
    return "*".repeat(i).split("");
  } else if (idx === 3) {
    return "/".repeat(i).split("");
  }
});
const used = operator.map(() => false);

let min = 9876543210;
let max = -9876543210;

const exec = (opr1, opr2, opt) => {
  let ret = 0;
  if (opt === "+") {
    ret = opr1 + opr2;
  } else if (opt === "-") {
    ret = opr1 - opr2;
  } else if (opt === "*") {
    ret = opr1 * opr2;
  } else if (opt === "/") {
    if (opr1 < 0) {
      ret = Math.ceil(opr1 / opr2);
    } else {
      ret = Math.floor(opr1 / opr2);
    }
  }
  // console.log(`${opr1} ${opt} ${opr2} = ${ret}`);
  return ret;
};

const cal = (opr1, n) => {
  if (n === operator.length) {
    min = min > opr1 ? opr1 : min;
    max = max > opr1 ? max : opr1;
    return true;
  }
  for (let i = 0; i < operator.length; i++) {
    if (!used[i]) {
      used[i] = true;
      cal(exec(opr1, numbers[n + 1], operator[i]), n + 1);
      used[i] = false;
    }
  }
};

cal(numbers[0], 0);

console.log(max + "\n" + min);
