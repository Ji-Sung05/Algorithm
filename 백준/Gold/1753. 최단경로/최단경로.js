const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let d = [...Array(n + 1).fill(Infinity)];

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let cur = 0;

    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (x > this.heap[smallerChild]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[cur],
        ];
        cur = smallerChild;
      } else {
        break;
      }
    }
  }
}

function solution(n, m, start, arr) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const v of arr) {
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  const dijkstra = (start) => {
    const pq = new PriorityQueue();
    pq.push([0, start]);
    d[start] = 0;

    while (!pq.empty()) {
      const [dist, cur] = pq.pop();

      if (d[cur] < dist) continue;

      for (const i of graph[cur]) {
        const node = i[0];
        const cost = dist + i[1];
        if (cost < d[node]) {
          pq.push([cost, node]);
          d[node] = cost;
        }
      }
    }
  };

  dijkstra(start);

  for (let i = 1; i <= n; i++) {
    if (d[i] === Infinity) {
      console.log('INF');
    } else {
      console.log(d[i]);
    }
  }

  return d;
}

solution(n, m, start, arr);