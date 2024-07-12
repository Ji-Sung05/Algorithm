const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, ...rest] = input
const N = +a
const arr = rest.map(str => str.split(' ').map(Number))

const graph = Array.from({ length: N + 1 }, () => [])
arr.forEach(([a, b]) => {
  graph[a].push(b)
  graph[b].push(a)
})

const visited = Array.from({ length: N + 1 }, () => 0)

function bfs(N, graph) {
  const q = []
  q.push(1)
  visited[1] = 1

  while(q.length !== 0) {
    let src = q.shift()
    for(const dest of graph[src]) {
      if(!visited[dest]) {
        visited[dest] = src
        q.push(dest)
      }
    }
  }
  return visited
}

const parents = bfs(N, graph)
console.log(parents.slice(2).join('\n'))
