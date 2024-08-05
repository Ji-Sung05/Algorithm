const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input.shift()
const graph = input.map(str => str.split(' ').map(Number))
const ans = []
let max = 0
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    max = Math.max(max, graph[i][j])
  }
}

for(let i = 0; i < max; i++) {
  ans.push(findSafeArea(i))
}

function findSafeArea(rain) {
  const map = input.map(str => str.split(' ').map(Number))
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(map[i][j] <= rain) {
        map[i][j] = 0
      } else {
        map[i][j] = 1
      }
    }
  }
  let area = 0
  const visited = Array.from({ length: N }, () => Array(N).fill(false))
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(!visited[i][j] && map[i][j] === 1) {
        area++
        bfs(map, visited, i, j)
      }
    }
  }
  return area
}

function bfs(map, visited, i, j) {
  const q = [[i, j]]
  visited[i][j] = true
  const dx = [1, 0, -1, 0]
  const dy = [0, -1, 0, 1]

  while(q.length !== 0) {
    const [x, y] = q.shift()
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]
      if(nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      if(!visited[nx][ny] && map[nx][ny] === 1) {
        visited[nx][ny] = true
        q.push([nx, ny])
      }
    }
  }
}

console.log(Math.max(...ans))