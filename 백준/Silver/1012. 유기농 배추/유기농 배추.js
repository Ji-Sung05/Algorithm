const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input.shift();
for(let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(' ').map(v => +v);
  const graph = Array.from(Array(M), () => Array(N).fill(0));
  for(let i = 0; i < K; i++) {
    const [x, y] = input.shift().split(' ').map(v => +v);
    graph[x][y] = 1;
  }
  solution(graph, M, N);
}

function bfs(row, col, graph, visited, M, N) {
  if(visited[row][col] === 1) return 0;
  const q = [];
  q.push([row, col]);
  visited[row][col] = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  while(q.length !== 0) {
    const [x, y] = q.shift();
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + x, dy[i] + y];
      if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if(!visited[nx][ny] && graph[nx][ny] === 1) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }
  return 1;
}

function solution(graph, M, N) {
  const visited = Array.from(Array(M), () => Array(N).fill(0));
  let answer = 0;
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(graph[i][j] === 0) continue;
      answer += bfs(i, j, graph, visited, M, N);
    }
  }
  console.log(answer);
}