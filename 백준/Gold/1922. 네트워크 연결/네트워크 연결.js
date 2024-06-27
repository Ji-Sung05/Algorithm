function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return parent[x] = find(parent, parent[x]);
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  return a === b;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, ...arr] = input;
N = +N;
M = +M;
costs = arr.map(line => line.split(' ').map(v => +v));

console.log(solution(N, costs));

function solution(N, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: N }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}