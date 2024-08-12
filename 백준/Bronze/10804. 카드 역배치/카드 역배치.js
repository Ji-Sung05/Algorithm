const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(str => str.split(' ').map(Number))
const nums = Array.from({ length: 20 }, (_, i) => i + 1)

for(let i = 0; i < 10; i++) {
  let [st, ed] = arr.shift()
  st -= 1
  ed -= 1
  const brr = reverseSort(nums.slice(st, ed + 1))
  nums.splice(st, ed - st + 1, ...brr)
}
console.log(nums.join(' '))

function reverseSort(list) {
  return list.reverse()
}