const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [A, B] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const brr = input[2].split(' ').map(Number)

const crr = arr.concat(brr)
console.log(crr.sort((a, b) => a - b).join(' '))