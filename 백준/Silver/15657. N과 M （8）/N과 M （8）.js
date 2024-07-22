const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)
arr.sort((a, b) => a - b)
function combination(arr, M) {
  if(M === 1) return arr.map(v => [v])
  const result = []  
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx)
    const combi = combination(rest, M - 1)
    const combine = combi.map(v => [fixed, ...v])
    result.push(...combine)
  })
  return result
}

const ans = combination(arr, M)
ans.sort((a, b) => {
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      return a[i] - b[i]
    }
  }
  return 0
})
console.log(ans.map(a => a.join(' ')).join('\n'))