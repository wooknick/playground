const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let N = Number(data[0]);
data.shift();
let input = data.map(Number);
let input = mergeSort(input);
const set = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    set.add(input[j] - input[i]);
  }
}
const retGcd = gcdArr(mergeSort([...set]));

const answer = [];
for (let i = 2; i * i <= retGcd; i++) {
  if (retGcd % i === 0) {
    answer.push(i);
    answer.push(retGcd / i);
  }
}
answer.push(retGcd);
console.log(mergeSort([...new Set(answer)]).join(" "));

function gcdArr(arr) {
  let ret = gcd(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    ret = gcd(ret, arr[i]);
  }
  return ret;
}

function gcd(x, y) {
  let a = x,
    b = y,
    t = 0;
  while (a % b !== 0) {
    t = a % b;
    a = b;
    b = t;
  }
  return b;
}

function merge(a, b) {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      temp.push(b[j]);
      j++;
    } else {
      temp.push(a[i]);
      i++;
    }
  }
  temp = [...temp, ...a.slice(i), ...b.slice(j)];
  return temp;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  let result = merge(mergeSort(left), mergeSort(right));
  return result;
}
