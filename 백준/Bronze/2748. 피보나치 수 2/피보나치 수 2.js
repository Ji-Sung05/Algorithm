const n = + require('fs').readFileSync('/dev/stdin')
d = [0, 1, 1]
for(let i = 3; i <= n; i++) {
  d[i] = BigInt(d[i - 1]) + BigInt(d[i - 2])
}

console.log(d[n].toString())