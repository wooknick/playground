const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

data.forEach((dataCase) => {
  const input = dataCase.split(" ").map(Number);
  if (input[0] === 0 && input[1] === 0) {
    return;
  } else if (input[1] % input[0] === 0) {
    console.log("factor");
  } else if (input[0] % input[1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
