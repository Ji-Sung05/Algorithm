/*
1. 아이디어
이중 for문을 돌면서 익은 사과를 큐에 넣는다.
익지 않은 사과의 거리 배열 dist는 -1로 초기화한다. (익은 사과와, 토마토가 없는 칸을 계산하지 않기 위해)
이후 일반 bfs문제와 똑같이 풀면 된다.
2. 시간복잡도
사과를 담는 2차원 배열 O(NM)
3. 자료구조
사과를 담는 2차원 배열 O(NM)
거리를 측정하기 위한 2차원 배열 O(NM)
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const graph = input.map(str => str.split(' ').map(Number))
const dist = Array.from({ length: M }, () => Array(N).fill(0))
const q = []

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 1) {
      q.push([i, j])
    }
    if(graph[i][j] === 0) {
      dist[i][j] = -1
    }
  }
}
console.log(bfs(q))

function bfs(q) {
  const dx = [1, 0, -1, 0]
  const dy = [0, -1, 0, 1]
  let day = 0
  let head = 0
  while(q.length > head) {
    const [x, y] = q[head++]
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]
      if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue
      if(dist[nx][ny] >= 0) continue
      dist[nx][ny] = dist[x][y] + 1
      q.push([nx, ny])
    }
  }
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(dist[i][j] === -1) {
        return -1
      }
      day = Math.max(day, dist[i][j])
    }
  }

  return day
}
