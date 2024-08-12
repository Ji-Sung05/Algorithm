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
let ans = 0
d.forEach(v => {
  switch(v) {
    case 1:
      ans += a
      break
    case 2:
      ans += b * 2
      break
    case 3:
      ans += c * 3
      break
  }
})
console.log(ans)