// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let input = [
  "##########",
  "#........#",
  "#........#",
  "#........#",
  "#........#",
  "#........#",
  "#........#",
  "##########",
];

const coverType = [
  [
    [0, 0],
    [1, 0],
    [0, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
  ],
];

const set = (board, y, x, type, delta) => {
  console.log("set");
  let ok = true;
  for (let i = 0; i < 3; i++) {
    const ny = y + coverType[type][i][0];
    const nx = x + converType[type][i][1];
    if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length) {
      ok = false;
    } else if ((board[ny][nx] += delta) > 1) {
      ok = false;
    }
  }
  return ok;
};

const cover = (board) => {
  console.log("count");
  let y = -1,
    x = -1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      console.log("hi");
      if (board[i][j] == 0) {
        y = i;
        x = j;
        break;
      }
      if (y !== -1) {
        break;
      }
    }
  }
  if (y == -1) {
    return 1;
  }
  let ret = 0;
  for (let type = 0; type < 4; type++) {
    if (set(board, y, x, type, 1)) {
      ret += cover(board);
    }
    set(board, y, x, type, -1);
  }

  return ret;
};
input = input.map((item) => item.split(""));
console.log(input);
const ret = cover(input);

console.log(ret);

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const N = input[0].split(" ");
//   const A = parseInt(N[0]);
//   const B = parseInt(N[1]);
//   const C = parseInt(N[2]);
//   let answer = -1;

//   const quantity = (fixedCost, variableCost, price) =>
//     Math.floor(fixedCost / (price - variableCost) + 1);
//   const isThereBEP = (variableCost, price) => variableCost < price;

//   if (isThereBEP(B, C)) {
//     answer = quantity(A, B, C);
//   }
//   console.log(answer);
//   process.exit();
// });
