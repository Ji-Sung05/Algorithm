const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

let sum = 0;
let ans = 0;
for(let i = 0; i < K; i++) {
  ans += arr[i]
}
sum = ans

for(let i = K; i < N; i++) {
  sum += arr[i]
  sum -=arr[i - K]
  ans = Math.max(sum, ans)
}

console.log(ans)