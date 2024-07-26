// 1. 아이디어
// 정렬한 후 투 포인터 활용
// 두 포인터의 합이 m과 같으면 cnt++, 포인터 이동
// 합이 m 보다 크면, end--, 작으면, start++
// 2. 시간복잡도
// O(N log N)
// 3. 자료구조
// 배열

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const M = +input[1]
const arr = input[2].split(' ').map(Number)

let cnt = 0
let start = 0
let end = N - 1

arr.sort((a, b) => a - b)
while(start < end) {
  if(arr[start] + arr[end] === M) {
    cnt++
    start++
  } else if(arr[start] + arr[end] > M) {
    end--
  } else {
    start++
  }
}

console.log(cnt)
