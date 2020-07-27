data = "5 2 6\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 1 3\n3 2 3".split(
  "\n"
);

const [N, M, K] = data[0].split(" ").map(Number);
console.log(N, M, K);
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
// console.log(resource);
// tree = [x, y, age, dead] // index는 1빼서 생각해야 함
const A = [];
for (let i = 1; i < N + 1; i++) {
  A.push(data[i].split(" ").map(Number));
}
// tree
for (let i = N + 1; i < N + M + 1; i++) {
  let [treeX, treeY, treeAge] = data[i].split(" ").map(Number);
  resource[treeY - 1][treeX - 1].trees.push({ age: treeAge, alive: true });
}
// console.log(resource);

const spring = () => {
  resource.flat().forEach((area) => {
    let availableNutrient = area.nutrient;
    if (area.trees.length > 0) {
      console.log(area.trees.length);
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

// console.log(util.inspect(resource, { showHidden: false, depth: null }));
const drawing = (resource) => {
  const target = document.querySelector("#target");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  for (let i = 0; i < resource.length; i++) {
    const line = resource[i];
    const lineHTML = document.createElement("div");
    lineHTML.classList.add("line");
    for (let j = 0; j < line.length; j++) {
      const itemHTML = document.createElement("div");
      itemHTML.classList.add("item");
      itemHTML.innerHTML = line[j].nutrient;
      if (line[j].trees.length > 0) {
        const treeHTML = document.createElement("p");
        line[j].trees.forEach((tree) => {
          treeHTML.classList.add("tree");
          treeHTML.innerHTML += ` [ ${tree.age} ] `;
          itemHTML.appendChild(treeHTML);
        });
      }
      lineHTML.appendChild(itemHTML);
    }
    wrapper.appendChild(lineHTML);
    // target.replaceChild
    target.appendChild(wrapper);
  }
};
drawing(resource);
for (let i = 0; i < K; i++) {
  spring();
  summer();
  fall();
  winter();
  drawing(resource);
  // // console.log(`${i} 년`);
  // // console.log(util.inspect(resource, { showHidden: false, depth: null }));
  // let ret = 0;
  // resource.flat().forEach((area) => {
  //   ret += area.trees.filter((tree) => tree.alive).length;
  // });
  // console.log(ret);
}

// 2, 15, 13, 13, 13, 85
