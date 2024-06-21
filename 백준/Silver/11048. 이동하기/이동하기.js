const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [NM, ...rest] = input;
const [N, M] = NM.split(' ').map(v => +v);
const arr = rest.map(str => str.split(' ').map(v => +v));
const dp = Array.from({ length: N }, () => Array(M).fill(0));

for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    const top = i > 0 ? dp[i-1][j] : 0;
    const left = j > 0 ? dp[i][j-1] : 0;
    const corner = i > 0 && j > 0 ? dp[i-1][j-1] : 0;
    dp[i][j] = arr[i][j] + Math.max(top, left, corner);
  }
}

console.log(dp[N-1][M-1]);