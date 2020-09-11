const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(data[0]);
data.shift();
const input = data.map(Number);

const h = new AbHeap();
let answer = "";

for (let i = 0; i < N; i++) {
  if (input[i] === 0) {
    answer += h.delete() + "\n";
  } else {
    h.insert(input[i]);
  }
}

console.log(answer);

function AbHeap() {
  this.heap = [0];

  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.compare(this.heap[p], this.heap[Math.floor(p / 2)])) {
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
      if (
        p * 2 + 1 < this.heap.length &&
        this.compare(this.heap[p * 2 + 1], min)
      ) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.compare(this.heap[p], min)) {
        break;
      }

      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };

  this.compare = (x, y) => {
    // x가 위로 올라가야 할 것 (min)
    if (Math.abs(x) < Math.abs(y)) {
      return true;
    } else if (Math.abs(x) > Math.abs(y)) {
      return false;
    } else {
      if (x < y) {
        return true;
      } else {
        return false;
      }
    }
  };
}
