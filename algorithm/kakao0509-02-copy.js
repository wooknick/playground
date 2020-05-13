const expression = "100-200*300-500+20";

const regExp = {
  "+": /(^\-)?\d+\+\d+/g,
  "-": /(^\-)?\d+\-\d+/g,
  "*": /(^\-)?\d+\*\d+/g,
};

function cal(expression, operators) {
  let cal_result = expression;
  for (let i = 0; i < 3; i++) {
    let operator = operators[i];

    while (cal_result.search(regExp[operator]) > -1) {
      console.log(cal_result.search(regExp[operator]));
      let match = cal_result.match(regExp[operator])[0];
      cal_result = cal_result.replace(regExp[operator], eval(match));
      console.log(cal_result);
    }
  }
  return cal_result;
}
function solution(expression) {
  const answer = [];
  answer.push(Math.abs(cal(expression, ["*", "+", "-"])));
  answer.push(Math.abs(cal(expression, ["*", "-", "+"])));
  answer.push(Math.abs(cal(expression, ["+", "*", "-"])));
  answer.push(Math.abs(cal(expression, ["+", "-", "*"])));
  answer.push(Math.abs(cal(expression, ["-", "*", "+"])));
  answer.push(Math.abs(cal(expression, ["-", "+", "*"])));
  answer.sort();
  return answer;
}

console.log(solution(expression));
