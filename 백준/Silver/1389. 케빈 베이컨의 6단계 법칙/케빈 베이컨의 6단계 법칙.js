const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [nm, ...rest] = input;
const [n, m] = nm.split(' ').map(v => +v);
const arr = rest.map(str => str.split(' ').map(v => +v));
const graph = Array.from({ length: n + 1}, () => []);

for(const [src, dest] of arr) {
  graph[src].push(dest);
  graph[dest].push(src);
}

function bfs(start) {
  const heap = [];
  heap.push([start, 0]);
  const d = Array.from(Array(n + 1), () => 0);

  while(heap.length !== 0) {
    const [cur, cost] = heap.shift();
    for(const dest of graph[cur]) {
      if(!d[dest]) {
        d[dest] = cost + 1;
        heap.push([dest, cost + 1]);
      }
    }
  }
  d[start] = 0;
  return d.reduce((auc, cur) => auc + cur);
}

function solution(n) {
  let minScore = Number.MAX_VALUE;
  let answer = -1;
  for(let i = 1; i <= n; i++){
    const score = bfs(i);
    if (score < minScore) {
      minScore = score;
      answer = i;
    }
  }
  console.log(answer);
}

solution(n);