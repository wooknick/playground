const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
data.shift();
const input = data.map(Number);

const left = new MaxHeap();
const right = new MinHeap();

let median = input[0];
let answer = median + "\n";

for (let i = 1; i < N; i++) {
  if (input[i] >= median) {
    right.insert(input[i]);
  } else {
    left.insert(input[i]);
  }
  if (left.size() > right.size()) {
    right.insert(median);
    median = left.delete();
  } else if (left.size() + 1 < right.size()) {
    left.insert(median);
    median = right.delete();
  }
  answer += median + "\n";
}

console.log(answer);
function MinHeap() {
  this.heap = [0];

  this.size = () => {
    return this.heap.length - 1;
  };

  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };

  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let p = 1;
    while (p * 2 < this.heap.length) {
      let min = this.heap[p * 2];
      let minP = p * 2;
      if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.heap[p] < min) {
        break;
      }

      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };
}

function MaxHeap() {
  this.heap = [0];

  this.size = () => {
    return this.heap.length - 1;
  };

  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] < this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };

  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let p = 1;
    while (p * 2 < this.heap.length) {
      let max = this.heap[p * 2];
      let maxP = p * 2;
      if (p * 2 + 1 < this.heap.length && max < this.heap[p * 2 + 1]) {
        max = this.heap[p * 2 + 1];
        maxP = p * 2 + 1;
      }
      if (this.heap[p] > max) {
        break;
      }

      let tmp = this.heap[p];
      this.heap[p] = this.heap[maxP];
      this.heap[maxP] = tmp;
      p = maxP;
    }
    return deletedItem;
  };
}
