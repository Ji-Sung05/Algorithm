/*
1. 아이디어
경로가 존재하는 지 확인하는 플로이드 와샬 문제
3중 for문으로 i부터 j까지 경로가 존재하는지 확인
2. 시간복잡도
O(N^3)
3. 자료구조
2차원 배열
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = +input.shift()
const graph = []
for(const row of input) {
  graph.push(row.split(' ').map(Number))
}
for(let k = 0; k < n; k++) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(graph[i][k] && graph[k][j]) {
        graph[i][j] = 1
      }
    }
  }
}

for(let i = 0; i < n; i++) {
  console.log(graph[i].join(' '))
}