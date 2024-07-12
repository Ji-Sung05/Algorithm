const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [N, M] = input.shift().split(' ').map(Number)
const ans = []

while(N !== 0 && M !== 0) {
  const arr = input.splice(0, M).map(str => str.split(' ').map(Number))
  const visited = Array.from({ length: M }, () => Array(N).fill(false))
  let count = 0
  
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(!visited[i][j] && arr[i][j] === 1) {
        bfs(arr, i, j, visited)
        count++ 
      }
    }
  }
  ans.push(count)
  if (input.length > 0) {
    [N, M] = input.shift().split(' ').map(Number);
  } else {
    break;
  }
}

function bfs(arr, i, j, visited) {
  const dx = [-1, 0, 1, 0, 1, -1, 1, -1]
  const dy = [0, 1, 0, -1, 1, -1, -1, 1]

  const q = [[i, j]]
  visited[i][j] = true
  while(q.length !== 0) {
    let [x, y] = q.shift()
    for(let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue
      if(!visited[nx][ny] && arr[nx][ny] === 1) {
        visited[nx][ny] = true
        q.push([nx, ny])
      }
    }
  }
}

console.log(ans.join('\n'))