const arr = [];

while (true) {
  const t = Math.ceil(Math.random() * 10);
  if (!arr.includes(t)) {
    arr.push(t);
  }
  if (arr.length == 10) {
    break;
  }
}

console.log(arr);
