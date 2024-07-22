const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

function permutation(arr, M) {
  if(M === 1) return arr.map(v => [v])
  const result = []

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, i) => i !== idx) 
    const perms = permutation(rest, M - 1)
    const combine = perms.map(v => [fixed, ...v])
    result.push(...combine)
  })
  return result
}
const ans = permutation(arr, M)
const uniqueAns = Array.from(new Set(ans.map(a => a.join(' ')))).map(s => s.split(' ').map(Number));

uniqueAns.sort((a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return a[i] - b[i];
  }
  return 0;
});

const output = uniqueAns.map(a => a.join(' ')).join('\n');
console.log(output);