const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map(line => line.split(' ').map(v => +v));

function  solution(n, m, arr) {
  const d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for(let i = 1; i <= n; i++) d[i][i] = 0;
  for (const [src, dest, cost] of arr) {
    d[src][dest] = Math.min(d[src][dest] || Infinity, cost);
  }

  for(let k = 1; k <= n; k++) {
    for(let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++) {
        if(k === i || k === j) continue;
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
      }
    }
  }
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (d[i][j] === Infinity) {
        d[i][j] = 0;
      }
    }
  }
  const ans = Array.from({ length: n }, () => []);
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      ans[i-1][j-1] = d[i][j];
    }
  }
  return ans.map(arr => arr.join(' ')).join('\n');
}

console.log(solution(n, m, arr));