const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

function permutation(arr, M) {
  if(M === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, _, arr) => {
    const perms = permutation(arr, M - 1)
    const combine = perms.map(v => [fixed, ...v])

    result.push(...combine)
  })
  return result
}

const ans = permutation(arr, M)
ans.sort((a, b) => {
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      return a[i] - b[i]
    }
  }
  return 0
})

const output = ans.map(a => a.join(' ')).join('\n')
console.log(output)

