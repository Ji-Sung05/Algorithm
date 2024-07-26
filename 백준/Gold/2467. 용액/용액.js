const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)

let start = 0
let end = N - 1
let sum = Math.abs(arr[start] + arr[end])
let diff = [arr[start], arr[end]]

while(start < end) {
  let sum_val = arr[start] + arr[end]
  if(Math.abs(sum_val) < sum) {
    sum = Math.abs(sum_val)
    diff = [arr[start], arr[end]]
  }
  if(sum_val < 0) {
    start++
  } else if(sum_val > 0) {
    end--
  } else {
    break
  }
}

console.log(diff.join(' '))