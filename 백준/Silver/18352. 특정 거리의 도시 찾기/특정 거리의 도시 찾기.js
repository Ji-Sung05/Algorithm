const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
}

function bfs(start, graph) {
  const visited = new Array(N + 1).fill(false);
  const queue = [[start, 0]];
  visited[start] = true;
  const result = [];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (distance === K) {
      result.push(node);
    } else if (distance < K) {
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }

  return result;
}

const result = bfs(X, graph);
if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.sort((a, b) => a - b).join('\n'));
}
