const input = +require('fs').readFileSync('/dev/stdin').toString().trim()

const n = [0, 1, 3]

for(let i = 3; i <= input; i++) {
  n[i] = (n[i-2]*2 +n[i-1])%10007
}

console.log(n[input])

