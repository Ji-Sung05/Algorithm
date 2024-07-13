const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const graph = input.map(str => str.trim().split('').map(Number))
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(2).fill(0)))

class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }

  enqueue(value) {
    this.queue[this.rear++] = value
  }

  dequeue() {
    const value = this.queue[this.front]
    delete this.queue[this.front]
    this.front++
    return value
  }

  size() {
    return this.rear - this.front
  }
}

function bfs() {
  const q = new Queue()
  const dx = [1, 0, -1, 0]
  const dy = [0, -1, 0, 1]

  q.enqueue([0, 0, 1, 0]) //이동 횟수, 벽 부숨 여부
  visited[0][0][0] = true

  while(q.size()) {
    let [x, y, cnt, isBreak] = q.dequeue()

    if(x === N - 1 && y === M - 1) {
      return cnt
    }

    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue

      if(graph[nx][ny] === 1 && isBreak === 0 && !visited[nx][ny][1]) {
        visited[nx][ny][1] = true
        q.enqueue([nx, ny, cnt + 1, 1])
      }else if(graph[nx][ny] === 0 && !visited[nx][ny][isBreak]) {
        visited[nx][ny][isBreak] = true
        q.enqueue([nx, ny, cnt + 1, isBreak])
      }
    }
  }
  return -1
}

console.log(bfs())
