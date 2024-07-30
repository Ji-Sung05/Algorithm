const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M, V] = input.shift().split(' ').map(Number)
const arr = input.map(str => str.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => [])

arr.forEach(([s, e]) => {
  graph[s].push(e)
  graph[e].push(s)
})

graph.map(v => v.sort((a, b) => a - b))

const bfsVisited = Array.from({ length: N + 1 }, () => false)
const dfsVisited = Array.from({ length: N + 1 }, () => false)

const dfsAns = []
const bfsAns = []

function dfs(V) {
  dfsVisited[V] = true
  dfsAns.push(V)
  for(const e of graph[V]) {
    if(!dfsVisited[e]) {
      dfs(e)
    }
  }
}

function bfs(V) {
  const q = [V]
  bfsVisited[V] = true
  bfsAns.push(V)
  while(q.length !== 0) {
    let s = q.shift()
    
    for(const e of graph[s]) {
      if(!bfsVisited[e]) {
        bfsVisited[e] = true
        bfsAns.push(e)
        q.push(e)
      }
    }
  }
}

dfs(V)
bfs(V)

console.log(dfsAns.join(' '))
console.log(bfsAns.join(' '))