const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;
let count = 1;
console.log(`${count}번째 입력 : `);
rl.on("line", function(line) {
  if (line === "End") {
    console.log(`입력값 합은 ${sum} 입니다.`);
    process.exit();
  } else {
    sum += parseInt(line);
    count++;
    console.log(`${count}번째 입력 : `);
  }
});
