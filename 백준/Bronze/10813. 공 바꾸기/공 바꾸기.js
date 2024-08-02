/*
1. 아이디어
주어진 위치를 [a, b] = [b, a] 자바스크립트 swap 기술을 사용하여 변경한다.
2. 시간복잡도
M번의 작업을 수행할경우 각 O(N)의 시간복잡도가 발생할 수 있다.
O(NM)
3. 자료구조
1차원 배열
*/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map(str => str.split(' ').map(Number))
const baskets = Array.from({ length: N }, (_, i) => i + 1)

for(let i = 0; i < M; i++) {
  const [a, b] = arr[i];
  [baskets[a - 1], baskets[b - 1]] = [baskets[b - 1], baskets[a - 1]]
}

console.log(baskets.join(' '))
