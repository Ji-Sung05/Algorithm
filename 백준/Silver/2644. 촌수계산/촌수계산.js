const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input.shift()
const [S, E] = input.shift().split(' ').map(Number)
const M = +input.shift()
const arr = input.map(str => str.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => [])
arr.forEach(([s, e]) => {
  graph[s].push(e)
  graph[e].push(s)
})
const visited = Array.from({ length: N + 1 }, () => false)
function bfs(S, E, graph, visited) {
  const q = [[S, 0]]
  visited[S] = true
  
  while(q.length !== 0) {
    const [s, d] = q.shift()

    if(s === E) {
      return d
    }
    for(const e of graph[s]) {
      if(!visited[e]) {
        visited[e] = true
        q.push([e, d + 1])
      }
    }
  }
  return -1
}

console.log(bfs(S, E, graph, visited))
