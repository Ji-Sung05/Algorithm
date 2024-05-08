const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v => +v);

const arr = input.map(line => line.trim().split(' ').map(v => +v));
const graph = Array.from(Array(N + 1), () => []);
for(const [src, dest] of arr) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const visited = Array.from(Array(N + 1), () => false);

let count = 0;

function dfs(graph, v, visited) {
  visited[v] = true;
  
  for(const cur of graph[v]) {
    if(!visited[cur]) {
      dfs(graph, cur, visited);
    }
  }
}

for(let i = 1; i <= N; i++) {
  if(!visited[i]) {
    count++;
    dfs(graph, i, visited);
  }
}
console.log(count);