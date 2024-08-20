const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M, R] = input.shift().split(' ').map(Number)
const arr = input.map(str => str.split(' ').map(Number))

const graph = Array.from({ length: N + 1 }, () => [])
arr.forEach(([a, b]) => {
  graph[a].push(b)
  graph[b].push(a)
})
graph.forEach(v => v.sort((a, b) => a - b))
const visited = Array.from({ length: N + 1 }, () => 0)
bfs(R)

function bfs(s) {
  const q = [s]
  visited[s] = 1
  let step = 1

  while(q.length !== 0) {
    const s = q.shift()
    for(const d of graph[s]) {
      if(!visited[d]) {
        visited[d] = ++step
        q.push(d)
      }
    }
  }
}

console.log(visited.slice(1).join('\n'))