const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [NM, ...rest] = input

const [N, M] = NM.split(' ').map(Number)
arr = rest.map(str => str.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => [])
arr.forEach(([a, b, c]) => {
  graph[a].push([b, c])
  graph[b].push([a, c])
})

class MinHeap {
  constructor() {
    this.heap = [null]
  }

  push(value) {
    this.heap.push(value)

    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor(currentIndex / 2)

    while(parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex)
      currentIndex = parentIndex
      parentIndex = Math.floor(currentIndex / 2)
    }
  }

  pop() {
    if(this.is_empty()) return
    if(this.heap.length === 2) return this.heap.pop()
    
    const value = this.heap[1]
    this.heap[1] = this.heap.pop()

    let currentIndex = 1
    let leftIndex = 2
    let rightIndex = 3

    while(
      (this.heap[leftIndex] && this.heap[leftIndex].cost < this.heap[currentIndex].cost) ||
      (this.heap[rightIndex] && this.heap[rightIndex].cost < this.heap[currentIndex].cost) 
    ) {
      if(this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex)
      } else if(this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex)
      } else if(this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex)
        currentIndex = rightIndex
      } else if(this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex)
        currentIndex = leftIndex
      }
      leftIndex = currentIndex * 2
      rightIndex = currentIndex * 2 + 1
    }
    return value
  }

  is_empty() {
    return this.heap.length === 1
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}

function dijkstra(N, graph) {
  const heap = new MinHeap()
  const d = Array.from({ length: N + 1 }, () => Infinity)
  heap.push({ node: 1, cost: 0 })
  d[1] = 0

  while(!heap.is_empty()) {
    const { node: src, cost: currentCost } = heap.pop()

    for(const [dest, cost] of graph[src]) {
      if(d[dest] > cost + currentCost) {
        d[dest] = cost + currentCost
        heap.push({node: dest, cost: d[dest]})
      }
    }
  }
  return d
}

const d = dijkstra(N, graph)
console.log(d[d.length - 1])