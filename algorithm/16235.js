const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = data[0].split(" ").map(Number);
const resource = [];
for (let i = 0; i < N; i++) {
  const line = [];
  for (let j = 0; j < N; j++) {
    const area = [];
    area.trees = [];
    area.nutrient = 5;
    line.push(area);
  }
  resource.push(line);
}

const A = [];
for (let i = 1; i < N + 1; i++) {
  A.push(data[i].split(" ").map(Number));
}
// tree
for (let i = N + 1; i < N + M + 1; i++) {
  let [treeX, treeY, treeAge] = data[i].split(" ").map(Number);
  resource[treeX - 1][treeY - 1].trees.push({ age: treeAge, alive: true });
}

const spring = () => {
  resource.flat().forEach((area) => {
    let availableNutrient = area.nutrient;
    if (area.trees.length > 0) {
      area.trees.sort((x, y) => x.age - y.age);
      for (let i = 0; i < area.trees.length; i++) {
        if (availableNutrient >= area.trees[i].age) {
          availableNutrient -= area.trees[i].age;
          area.trees[i].age += 1;
        } else {
          area.trees[i].alive = false;
        }
      }
    }
    area.nutrient = availableNutrient;
  });
};

const summer = () => {
  resource.flat().forEach((area) => {
    if (area.trees.length > 0) {
      area.trees
        .filter((tree) => !tree.alive)
        .forEach((tree) => {
          area.nutrient += Math.floor(tree.age / 2);
        });
    }
    area.trees = area.trees.filter((tree) => tree.alive);
  });
};

const breed = (x, y, breedCount) => {
  if (0 <= x && x < N && 0 <= y && y < N) {
    for (let i = 0; i < breedCount; i++) {
      resource[x][y].trees.push({ age: 1, alive: true });
    }
  }
};

const fall = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (resource[i][j].trees.length > 0) {
        breedCount = resource[i][j].trees.filter((tree) => tree.age % 5 === 0)
          .length;
        breed(i - 1, j - 1, breedCount);
        breed(i - 1, j, breedCount);
        breed(i - 1, j + 1, breedCount);
        breed(i, j - 1, breedCount);
        breed(i, j + 1, breedCount);
        breed(i + 1, j - 1, breedCount);
        breed(i + 1, j, breedCount);
        breed(i + 1, j + 1, breedCount);
      }
    }
  }
};

const winter = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      resource[i][j].nutrient += A[i][j];
    }
  }
};

for (let i = 0; i < K; i++) {
  spring();
  summer();
  fall();
  winter();
}

let ret = 0;
resource.flat().forEach((area) => {
  ret += area.trees.filter((tree) => tree.alive).length;
});

console.log(ret);
