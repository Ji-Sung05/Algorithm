const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(v => parseInt(v));
const graph = input.map(line => line.trim().split('').map(v => parseInt(v)));

const visited = Array.from({ length: n}, () => Array(m).fill(0));

function bfs(row, col) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  queue.push([row, col]);
  visited[row][col] = 1;

  while(queue.length) {
    const [x, y] = queue.shift();
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if(nx < 0 || ny < 0 || nx >= n ||  ny >= m) continue;
      if(graph[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(visited[n-1][m-1]);