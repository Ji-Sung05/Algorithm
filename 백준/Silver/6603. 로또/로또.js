const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()
const l = input.length
const ans = []
for(let i = 0; i < l; i++) {
  const [K, ...arr] = input.shift().split(' ').map(Number)
  ans.push(combination(arr, 6).map(v => v.join(' ')).join('\n'))
  if(i !== l -1) {
    ans.push([])
  } else continue
}

console.log(ans.join('\n'))

function combination(arr, N) {
  if(N === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1)
    const combi = combination(rest, N - 1)
    const combine = combi.map(v => [fixed, ...v])
    result.push(...combine)
  })
  return result
}