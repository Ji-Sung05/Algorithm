const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input.shift().split(' ').map(v => +v);
const arr = input.map(line => line.trim().split(' ').map(v=> +v));
const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
const ans = Array.from({ length: N }, ()=>0);

for(const [src, dest] of arr) {
  graph[src].push(dest);
  graph[dest].push(src);
}

graph.map(v => v.sort((a, b) => a-b));

let dep = 1;
function dfs(graph, v, visited) {
  visited[v] = true;
  ans[v-1] = dep;
  for(const cur of graph[v]) {
    if(!visited[cur]) {
      dep++;
      dfs(graph, cur, visited);
    }
  }
}

dfs(graph, R, visited);

console.log(ans.join('\n'));

