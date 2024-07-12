const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input.shift();
for (let i = 0; i < T; i++) {
    const N = +input.shift();
    const [x1, y1] = input.shift().split(' ').map(Number);
    const [x2, y2] = input.shift().split(' ').map(Number);

    const result = bfs(x1, y1, x2, y2, N);
    console.log(result);
}

function bfs(x1, y1, x2, y2, N) {
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const q = [[x1, y1, 0]]; 
  visited[x1][y1] = true;

  while (q.length !== 0) {
    const [x, y, count] = q.shift();

    if (x === x2 && y === y2) {
      return count;
    }

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true;
        q.push([nx, ny, count + 1]);
      }
    }
  }

  return -1; 
}
