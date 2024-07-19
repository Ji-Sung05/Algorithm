const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

function permutations(arr, n) {
  if(n === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, i) => i !== idx)
    const perms = permutations(rest, n - 1)
    const combine = perms.map(v => [fixed, ...v])

    result.push(...combine)
  })
  return result
}

const result = permutations(arr, M)
result.sort((a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i] - b[i]
    }
  }
  return 0
})

result.forEach(permutation => {
  console.log(permutation.join(' '))
})