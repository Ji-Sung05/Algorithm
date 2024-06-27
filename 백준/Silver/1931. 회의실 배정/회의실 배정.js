const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...rest] = input;
N = +N;
rest = rest.map(line => line.split(' ').map(v => +v));

rest = rest.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let result = 1;
let end = rest[0][1];

for(let i = 1; i < N; i++) {
  let [from, to] = rest[i];
  if(from >= end) {
    end = to;
    result++;
  }
}

console.log(result);