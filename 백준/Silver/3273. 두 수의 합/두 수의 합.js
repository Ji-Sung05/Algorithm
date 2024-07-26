const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)
const x = +input[2]
arr.sort((a, b) => a - b)

let start = 0
let end = N - 1
let cnt = 0
while(start < end) {
  if(arr[start] + arr[end] === x) {
    start++
    cnt++
  } else if(arr[start] + arr[end] > x) {
    end--
  } else {
    start++
  }
}

console.log(cnt)