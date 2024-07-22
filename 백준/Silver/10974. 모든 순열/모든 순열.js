const N = +require('fs').readFileSync('/dev/stdin')
const arr = Array.from({ length: N }, (_, i) => i + 1)


function permutation(arr, N) {
  if(N === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, i) => i !== idx)
    const perms = permutation(rest, N - 1)
    const combine = perms.map(v => [fixed, ...v])
    result.push(...combine)
  })
  return result
}

console.log(permutation(arr, N).map(v => v.join(' ')).join('\n'))