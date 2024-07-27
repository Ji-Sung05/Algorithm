const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [V, E] = input.shift().split(' ').map(Number)
const costs = input.map(str => str.split(' ').map(Number))

function find(parent, x) {
  if(parent[x] === x) {
    return x
  }
  return parent[x] = find(parent, parent[x])
}

function union(parent, a, b) {
  a = find(parent, a)
  b = find(parent, b)
  if(a < b) {
    parent[b] = a
  } else {
    parent[a] = b
  }
}

function compare(parent, a, b) {
  a = find(parent, a)
  b = find(parent, b)
  return a === b
}

function solution(V, costs) {
  let answer = 0
  let sorted = costs.sort((a, b) => a[2] - b[2])

  const parent = Array.from(Array(V), (_, i) => i)

  for(const [a, b, cost] of sorted) {
    if(!compare(parent, a, b)) {
      answer += cost
      union(parent, a, b)
    }
  }
  console.log(answer)
}

solution(V, costs)