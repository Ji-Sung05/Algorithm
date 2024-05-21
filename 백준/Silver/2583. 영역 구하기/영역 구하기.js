const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, K] = input.shift().split(' ').map(v => +v);

const graph = Array.from(Array(M), () => Array(N).fill(0));
const visited = Array.from(Array(M), () => Array(N).fill(0));

for(let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input.shift().split(' ').map(v => +v);
  for(let j = y1; j < y2; j++) {
    for(let l = x1; l < x2; l++) {
      graph[j][l] = 1;
    }
  }
}

function bfs(row, col, M, N) {
  const q = [];
  q.push([row, col]);
  visited[row][col] = 1;

  let s = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while(q.length !== 0) {
    const [x, y] = q.shift();
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + x, dy[i] + y];
      if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if(!visited[nx][ny] && graph[nx][ny] === 0) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
        s++;
      }
    }
  }
  return s;
}

function solution(M, N, graph) {
  let ans = [];
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(graph[i][j] === 1 || visited[i][j] === 1) continue;
      ans.push(bfs(i, j, M, N));
    }
  }
  console.log(ans.length);
  console.log(ans.sort((a,b) => a - b).join(' '));
}

solution(M, N, graph); 