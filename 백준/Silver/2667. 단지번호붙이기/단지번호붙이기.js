const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input.shift());
const graph = input.map(line => line.trim()).map(v => v.split('').map(v => parseInt(v)));;
const visited = Array.from(Array(N), () => Array(N).fill(false));

function bfs(graph, row, col) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let apart = 1;
  const q = [];
  q.push([row, col]);
  visited[row][col] = true;

  while(q.length !== 0) {
    const [x, y] = q.shift();
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if(!visited[nx][ny] && graph[nx][ny] === 1) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
        apart++;
      }
    }
  }
  ans.push(apart);
}
let count = 0;
const ans = [];

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    const cur = graph[i][j];
    if(!visited[i][j] && cur === 1) {
      bfs(graph, i, j);
      count++;
    }
  }
}
console.log(String(count));
console.log(ans.sort((a, b) => a - b).join('\n'));