// const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// const hand = "right";
// const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
// const hand = "left";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";

const numberToArray = {
  1: [0, 3],
  4: [0, 2],
  7: [0, 1],
  2: [1, 3],
  5: [1, 2],
  8: [1, 1],
  0: [1, 0],
  3: [2, 3],
  6: [2, 2],
  9: [2, 1],
};

function touch(target, left, right, hand) {
  if (target === 1 || target === 4 || target === 7) {
    return "L";
  } else if (target === 3 || target === 6 || target === 9) {
    return "R";
  } else if (target === 2 || target === 5 || target === 8 || target === 0) {
    let targetArray = numberToArray[target];
    let distanceLeft =
      Math.abs(left[0] - targetArray[0]) + Math.abs(left[1] - targetArray[1]);
    let distanceRight =
      Math.abs(right[0] - targetArray[0]) + Math.abs(right[1] - targetArray[1]);
    if (distanceLeft > distanceRight) {
      return "R";
    } else if (distanceLeft < distanceRight) {
      return "L";
    } else if (distanceLeft === distanceRight) {
      return hand === "right" ? "R" : "L";
    }
  }
}

function solution(numbers, hand) {
  let left_now = [0, 0];
  let right_now = [2, 0];

  let answer = numbers.map((number) => {
    let which = touch(number, left_now, right_now, hand);
    if (which === "L") {
      left_now = numberToArray[number];
    } else if (which === "R") {
      right_now = numberToArray[number];
    }
    return which;
  });

  return answer.join("");
}

console.log(solution(numbers, hand));
