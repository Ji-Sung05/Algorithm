const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b, c] = input.shift().split(' ').map(Number)
const arr = input.map(str => str.split(' ').map(Number))
const d = Array.from({ length: 100 }, () => 0)

for(let i = 0; i < arr.length; i++) {
  const [st, ed] = arr[i]
  for(let j = st; j < ed; j++) {
    d[j] += 1
  }
}

let one = d.filter(v => v === 1).length * a
let two = d.filter(v => v === 2).length * b
let three = d.filter(v => v === 3).length * c
console.log(one + (two * 2) + (three * 3))