const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const T = +input.shift()

for(let i = 0; i < T; i++) {
  const [v, t] = input.shift().split(' ').map(Number)
  const arr = input.shift().split(' ').map((a, i) => [i, +a])
  console.log(printQ(arr, t))
}

function printQ(arr, t) {
  let cnt = 0
  while(arr.length > 0) {
    let [curIn, cur] = arr.shift()
    if (cur >= Math.max(...arr.map(a => a[1]))) {
      cnt++
      if (curIn === t) {
        return cnt
      }
    } else {
      arr.push([curIn, cur])
    }
  }
}