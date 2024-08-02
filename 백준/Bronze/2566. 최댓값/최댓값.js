/*
1. 아이디어
2차원 배열을 순회하면서 최대값 갱신 그때의 위치 저장
2. 시간복잡도
O(N^2) N의 최대는 9
3. 자료구조
2차원 배열
*/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input.map(str => str.split(' ').map(Number))

let max = -1
let ans = null
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    if(max < arr[i][j]) {
      max = Math.max(max, arr[i][j])
      ans = [i + 1, j + 1]
    }
  }
}
console.log(max)
console.log(ans.join(' '))
