const expression = "100-200*300-500+20";

function cal(expression, operators) {
  let cal_result = [...expression];
  for (let i = 0; i < 3; i++) {
    let operator = operators[i];
    while (true) {
      let operandIndex = cal_result.findIndex((item) => item === operator);
      if (operandIndex < 0) {
        break;
      } else {
        let t_result = eval(
          cal_result[operandIndex - 1] +
            cal_result[operandIndex] +
            cal_result[operandIndex + 1]
        );
        cal_result[operandIndex - 1] = t_result;
        cal_result = cal_result.filter(
          (i, index) => index !== operandIndex && index !== operandIndex + 1
        );
      }
    }
  }
  return cal_result;
}

function expressionToArray(expression) {
  let operand = expression.match(/\d+/g);
  let operator = expression.match(/\D+/g);
  let expressionArray = [];
  for (let i = 0; i < operator.length; i++) {
    expressionArray.push(operand[i]);
    expressionArray.push(operator[i]);
  }
  expressionArray.push(operand[operand.length - 1]);
  return expressionArray;
}

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}

function solution(expression) {
  const answer = [];
  const expressionArray = expressionToArray(expression);
  answer.push(Math.abs(cal(expressionArray, ["*", "+", "-"])));
  answer.push(Math.abs(cal(expressionArray, ["*", "-", "+"])));
  answer.push(Math.abs(cal(expressionArray, ["+", "*", "-"])));
  answer.push(Math.abs(cal(expressionArray, ["+", "-", "*"])));
  answer.push(Math.abs(cal(expressionArray, ["-", "*", "+"])));
  answer.push(Math.abs(cal(expressionArray, ["-", "+", "*"])));
  answer.sort(compare);
  return answer[0];
}

console.log(solution(expression));
