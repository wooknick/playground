const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const N = input[0].split(" ");
    const A = parseInt(N[0]);
    const B = parseInt(N[1]);
    const C = parseInt(N[2]);
    let answer = -1;

    const quantity = (fixedCost, variableCost, price) =>
        Math.floor(fixedCost / (price - variableCost) + 1);
    const isThereBEP = (variableCost, price) => variableCost < price;

    if (isThereBEP(B, C)) {
        answer = quantity(A, B, C);
    }
    console.log(answer);
    process.exit();
});
