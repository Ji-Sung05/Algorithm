/*
1. 아이디어
1차원 배열에서 bfs를 푸는 문제
사방위로 움직이는 것 대신 x-1, x+1, 2*x 위치로 이동하면서 동생의 위치와 같으면 몇 번 만에 찾았는지 출력
2. 시간복잡도
1차원 배열 O(N)
3. 자료구조
1차원 배열 O(N)
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input.shift().split(' ').map(Number)
const max = 100000
const visited = Array(max + 1).fill(false)

console.log(bfs())

function bfs() {
  const q = [[N, 0]]
  visited[N] = true
  
  while(q.length !== 0) {
    const [x, cnt] = q.shift()
    if(x === K) {
      return cnt
    }
    for(const tar of [x + 1, x - 1, 2 * x]) {
      if(tar >= 0 && tar <= max && !visited[tar]) {
        visited[tar] = true
        q.push([tar, cnt + 1])
      }
    }
  }
}
