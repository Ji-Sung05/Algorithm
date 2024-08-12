const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const T = +input.shift()
for(let i = 0; i < T; i++) {
  let n = +input.shift()
  room(n)
}

function room(n) {
  const prisons = Array.from({ length: n + 1 }, () => false)
  
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      if(j % i === 0) {
        prisons[j] = !prisons[j]
      }
    }
  }
  console.log(prisons.filter(v => v).length)
}

