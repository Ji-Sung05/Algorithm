const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let[N, K] = input.shift().split(' ').map(Number)
const moneies = input.map(str => +str)
moneies.sort((a, b) => b - a)
let coin = 0
for(let i = 0; i < N; i++) {
  if(moneies[i] > K) {
    continue
  } else {
    coin += Math.floor(K / moneies[i])
    K %= moneies[i]
  }
}
console.log(coin)