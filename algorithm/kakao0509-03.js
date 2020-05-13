const gems = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];

function findNearest(fromGem, toGem, gems) {
  gems.fi;
}

function solution(gems) {
  const set = new Set(gems);
  const gemsList = Array.from(set);
  const arrayList = [];
  for (let i = 0; i < gems.length; i++) {
    for (let j = 0; j < gems.length; j++) {
      console.log("GemsList" + gemsList);
      console.log(Array.from(new Set(gems.slice(i, j))));
      if (gemsList == Array.from(new Set(gems.slice(i, j)))) {
        console.log(i, j);
        arrayList.push([i, j]);
        break;
      }
    }
  }

  return arrayList;
}

console.log(solution(gems));
