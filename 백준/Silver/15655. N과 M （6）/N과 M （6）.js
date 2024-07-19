const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)
arr.sort((a, b) => a - b)
function combinations(arr, n) {
  if(n === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1)
    const combi = combinations(rest, n - 1)
    const combine = combi.map(v => [fixed, ...v])

    result.push(...combine)
  })
  return result
}

const result = combinations(arr, M)
result.sort((a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i] - b[i]
    }
  }
  return 0
})

result.forEach(combi => {
  console.log(combi.join(' '))
})