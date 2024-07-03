const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let N = +input.shift()
let answerCount = 1
let answer = ''

while(N !== 0) {
  const map = input.splice(0, N).map((str) => str.split(' ').map(Number))
  dijkstra([0, 0], map)
  N = +input.shift()
}

function dijkstra(start, map) {
  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]
  const [x, y] = start
  const d = Array.from({ length: N }, () => Array(N).fill(Infinity))

  const q = [[x, y]]
  let front = 0
  d[y][x] = map[y][x]

  while(q.length > front) {
    const [x, y] = q[front++]
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]
      if(ny < 0 || nx < 0 || nx >= N || ny >= N) continue
      if(d[ny][nx] > d[y][x] + map[ny][nx]) {
        d[ny][nx] = d[y][x] + map[ny][nx]
        q.push([nx, ny])
      }
    }
  }
  answer += `Problem ${answerCount++}: ${d[N-1][N-1]}\n`
}
console.log(answer)