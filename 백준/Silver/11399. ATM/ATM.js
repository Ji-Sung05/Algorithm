const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)
for(let i = 1; i < N; i++) {
  arr[i] = arr[i - 1] + arr[i]
}

console.log(arr.reduce((acc, num) => acc + num))