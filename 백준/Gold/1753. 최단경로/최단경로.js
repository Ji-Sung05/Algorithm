const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

const graph = Array.from({ length: n + 1 }, () => []);
arr.forEach(([src, dest, cost]) => {
  graph[src].push([dest, cost]);
});

let d = [...new Array(n + 1).fill(Infinity)];

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

function dijkstra(n, m, arr, start) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const heap = new MinHeap();

  d[start] = 0;
  heap.push({ node: start, cost: 0 });

  while (!heap.is_empty()) {
    const { node: src, cost: currentCost } = heap.pop();

    for (const [dest, cost] of graph[src]) {
      if (d[dest] > currentCost + cost) {
        d[dest] = currentCost + cost;
        heap.push({ node: dest, cost: d[dest] });
      }
    }
  }

  return d;
}

function solution(n, m, arr, start) {
  const d = dijkstra(n, m, arr, start);
  for (let i = 1; i <= n; i++) {
    if (d[i] === Infinity) {
      console.log('INF');
    } else {
      console.log(d[i]);
    }
  }
}

solution(n, m, arr, start);