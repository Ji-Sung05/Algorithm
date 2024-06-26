const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, arr] = input;
N = +N;
arr = arr.split(' ').map(Number);
const dp = Array.from({ length: N }, () => 1);
for(let i = 1; i < N; i++) {
  for(let j = 0; j < i; j++) {
    if(arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));