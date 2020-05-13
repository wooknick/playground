var util = require("util");
var parsedJson = { array1: ["bb", "aa", "cc", "end", { names: "pp" }] };
console.log(parsedJson);

[parsedJson.array1[0], parsedJson.array1[1]] = [
    parsedJson.array1[1],
    parsedJson.array1[0]
];
console.log(parsedJson);

parsedJson.array1.splice(4, 0, "dd");
console.log(parsedJson);

parsedJson.array1[5].names = ["kim", "lee"];
console.log(util.inspect(parsedJson, { depth: 3 }));
