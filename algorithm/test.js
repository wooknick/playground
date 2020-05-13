var solution = (arrA, arrB) =>
  arrA.find(
    (element) => !arrB[element]--,
    arrB.map((item) => (arrB[item] = (arrB[item] | 0) + 1))
  );

var a = [1, 2, 3, 4];
var b = [2, 3, 7, 8];

solution(a, b);

console.log(a);
console.log(b);
