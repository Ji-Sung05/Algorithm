function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (a < 0) {
        return -Math.floor(Math.abs(a) / b);
      }
      return Math.floor(a / b);
  }
}

function findMaxMinValues(index, currentResult, numbers, operators, results) {
  if (index === numbers.length) {
    results.max = Math.max(results.max, currentResult);
    results.min = Math.min(results.min, currentResult);
    return;
  }

  const nextNumber = numbers[index];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] > 0) {
      operators[i]--;

      let newResult = calculate(currentResult, nextNumber, ['+', '-', '*', '/'][i]);
      findMaxMinValues(index + 1, newResult, numbers, operators, results);

      operators[i]++;
    }
  }
}

function solution(N, numbers, operatorCounts) {
  const results = { max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER };

  findMaxMinValues(1, numbers[0], numbers, operatorCounts, results);

  console.log(results.max ? results.max : 0);
  console.log(results.min ? results.min : 0);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number))

const [N, numbers, operatorCounts] = input
solution(N, numbers, operatorCounts);
