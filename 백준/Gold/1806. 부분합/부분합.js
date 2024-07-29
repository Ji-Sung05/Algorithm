const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let i = 0, j = 0
let minLength = Infinity
let sum = arr[i]

while(j < N) {
  if(sum < S) {
    j++
    sum += arr[j]
  } else {
    minLength = Math.min(minLength, j - i + 1)
    sum -= arr[i]
    i++
  }
}

console.log(minLength === Infinity ? 0 : minLength)