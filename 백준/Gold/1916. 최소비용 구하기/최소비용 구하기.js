const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const [a, b] = rest.pop().split(' ').map(v => +v);
const arr = rest.map(str => str.split(' ').map(v => +v));

const graph = Array.from({ length: n + 1}, () => []);
for(const [src, dest, cost] of arr) {
  graph[src].push([dest, cost]);
}

const d = Array.from(Array(n + 1), () => Infinity);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while(parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.is_empty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex  = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while ((this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) || 
      (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex)
        currentIndex = rightIndex;
      } else if (this.heap[rightIndex] === undefined) { 
        this._swap(leftIndex, currentIndex)
        currentIndex = leftIndex;
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex)
        currentIndex = rightIndex;
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex)
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }

  is_empty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function dijkstra(start) {
  const heap = new MinHeap();
  d[start] = 0;

  heap.push({ node: start,  cost: 0 });
  while(!heap.is_empty()) {
    const { node: src, cost: currentCost } = heap.pop();
    if(currentCost > d[src])continue;
    for(const [dest, cost] of graph[src]) {
      if(d[dest] > currentCost + cost) {
        d[dest] = currentCost + cost;
        heap.push({ node: dest, cost: d[dest] });
      }
    }
  }
  return d;
}

function solution(a, b) {
  const d = dijkstra(a);
  console.log(d[b]);
}

solution(a, b);