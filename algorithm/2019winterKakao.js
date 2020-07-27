const board = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ],
];

function solution(board) {
  var answer = 0;
  const cost = [];
  const corner = [];
  board.forEach((i) => {
    cost.push([...new Array(board.length).fill(987654321)]);
    corner.push([...new Array(board.length).fill(-1)]);
  });

  cost[0][0] = 0;
  for (let i = 1; i < board.length; i++) {
    if (board[i][0] === 0) {
      cost[i][0] = cost[i - 1][0] + 100;
      corner[i][0] = 1;
    }
    if (board[0][i] === 0) {
      cost[0][i] = cost[0][i - 1] + 100;
      corner[0][i] = 0;
    }
  }
  function isCorner(prevX, prevY, x, y) {
    if (corner[prevX][prevY] === 1 && prevX === x) {
      return true;
    } else if (corner[prevX][prevY] === 0 && prevY === y) {
      return true;
    } else {
      return false;
    }
  }
  function cal(x, y) {
    let tCost = cost[x - 1][y] + (isCorner(x - 1, y, x, y) ? 600 : 100);
    let tCorner = 1;
    if (tCost > cost[x][y - 1] + (isCorner(x, y - 1, x, y) ? 600 : 100)) {
      tCost = cost[x][y - 1] + (isCorner(x, y - 1, x, y) ? 600 : 100);
      tCorner = 0;
    }

    if (
      x + 1 < board.length &&
      tCost > cost[x + 1][y] + (isCorner(x + 1, y, x, y) ? 600 : 100)
    ) {
      tCost = cost[x + 1][y] + (isCorner(x + 1, y, x, y) ? 600 : 100);
      tCorner = 1;
    }
    if (
      y + 1 < board.length &&
      tCost > cost[x][y + 1] + (isCorner(x, y + 1, x, y) ? 600 : 100)
    ) {
      tCost = cost[x][y + 1] + (isCorner(x, y + 1, x, y) ? 600 : 100);
      tCorner = 0;
    }
    if (board[x][y] === 0) {
      cost[x][y] = tCost;
      corner[x][y] = tCorner;
    }
  }

  for (let k = 0; k < 10; k++) {
    for (let i = 1; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === 0) {
          cal(i, j);
        }
      }
    }
  }

  answer = cost[board.length - 1][board.length - 1];
  return answer;
}

console.log(solution(board[1]));
