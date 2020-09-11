const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
data.shift();
const input = data.map(Number);

const heap = [0];

const insertHeap = (v) => {
  heap.push(v);
  let p = heap.length - 1;
  while (p > 1 && heap[Math.floor(p / 2)] < heap[p]) {
    let tmp = heap[Math.floor(p / 2)];
    heap[Math.floor(p / 2)] = heap[p];
    heap[p] = tmp;
    p = Math.floor(p / 2);
  }
};

const deleteHeap = () => {
  if (heap.length - 1 < 1) {
    return 0;
  }
  let deletedItem = heap[1];

  heap[1] = heap[heap.length - 1];
  heap.pop();

  let p = 1;
  while (p * 2 < heap.length) {
    let max = heap[p * 2];
    let maxP = p * 2;
    if (p * 2 + 1 < heap.length && max < heap[p * 2 + 1]) {
      max = heap[p * 2 + 1];
      maxP = p * 2 + 1;
    }
    if (heap[p] > max) {
      break;
    }

    let tmp = heap[p];
    heap[p] = heap[maxP];
    heap[maxP] = tmp;
    p = maxP;
  }
  return deletedItem;
};
let answer = "";
for (let i = 0; i < N; i++) {
  if (input[i] === 0) {
    answer += deleteHeap() + "\n";
  } else {
    insertHeap(input[i]);
  }
}
console.log(answer);
