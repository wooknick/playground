function solution(participant, completion) {
  console.log(completion);
  let ret;
  while (!ret) {
    completion.forEach(
      (name) => (completion[name] = (completion[name] | 0) + 1)
    );
    ret = participant.find((name) => {
      console.log(completion);
      return !completion[name]--;
    });
  }
  return ret;
}

// function solution(participant, completion) {
//   console.log(completion);
//   return participant.find(
//     (name) => {
//       console.log(completion);
//       return !completion[name]--;
//     },
//     completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
//   );
// }
