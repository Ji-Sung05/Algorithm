const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)

const graph = input.map(str => str.split(' ').map(Number))
const visited = Array.from({ length: N }, () => Array(M).fill(false))
let cnt = 0
const ans = []
for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if(!visited[i][j] && graph[i][j] === 1) {
      ans.push(bfs(i, j, N, M))
      cnt++
    }
  }
}
console.log(cnt)
console.log(ans.length !== 0 ? Math.max(...ans) : 0)
function bfs(i, j, N, M) {
  const dx = [1, 0, -1, 0]
  const dy = [0, -1, 0, 1]
  const q = [[i, j]]
  visited[i][j] = true
  let cnt = 1
  while(q.length !== 0) {
    const [x, y] = q.shift()
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue
      if(!visited[nx][ny] && graph[nx][ny] === 1) {
        visited[nx][ny] = true
        q.push([nx, ny])
        cnt++
      }
    }
  }
  return cnt
}