const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input.shift()
const M = +input.shift()

const arr = input.map(str => str.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => [])
arr.forEach(([s, e]) => {
  graph[s].push(e)
  graph[e].push(s)
})
const visited = Array.from({ length: N + 1 }, () => false)

function bfs() {
  const q = [1]
  let cnt = 0
  visited[1] = true
  while(q.length !== 0) {
    const s = q.shift()
    for(const e of graph[s]) {
      if(!visited[e]) {
        visited[e] = true
        q.push(e)
        cnt++
      }
    }
  }
  return cnt
}

console.log(bfs())