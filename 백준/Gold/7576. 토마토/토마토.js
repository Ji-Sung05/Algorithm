const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const graph = input.map(str => str.split(' ').map(Number))
const visited = Array.from({ length: M }, () => Array(N).fill(0))
const q = []

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 1) {
      q.push([i, j])
    }
    if(graph[i][j] === 0) {
      visited[i][j] = -1
    }
  }
}
console.log(bfs(q))

function bfs(q) {
  let head = 0
  const dx = [1, 0, -1, 0]
  const dy = [0, -1, 0, 1]
  while(q.length > head) {
    const [x, y] = q[head++]
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]
      if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue
      if(visited[nx][ny] >= 0) continue
      visited[nx][ny] = visited[x][y] + 1
      q.push([nx, ny])
    }
  }
  let day = 0
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(visited[i][j] === -1) return -1
      day = Math.max(day, visited[i][j])
    }
  }
  return day
}