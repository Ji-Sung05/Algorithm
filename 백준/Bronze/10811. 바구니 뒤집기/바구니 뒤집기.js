/*
1. 아이디어
주어진 범위를 역순으로 정렬하는 함수를 만든다.
2. 시간복잡도
O(N)
3. 자료구조
1차원 배열
*/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map(str => str.split(' ').map(Number))
const baskets = Array.from({ length: N + 1}, (_, i) => i)

for(let i = 0; i < M; i++) {
  const [a, b] = arr[i]
  let rev = reverse(baskets.slice(a, b + 1))
  for(let j = a; j <= b; j++) {
    baskets[j] = rev[j - a]
  }
}
baskets.shift()
console.log(baskets.join(' '))

function reverse(brr) {
  return brr.reverse()
}

