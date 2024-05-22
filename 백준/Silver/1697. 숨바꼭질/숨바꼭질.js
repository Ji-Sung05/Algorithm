const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const [N, K] = input;

function bfs(start, end) {
  const max = 100000;
  const visited = Array(max + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [current, time] = queue.shift();

    if (current === end) {
      return time;
    }

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next >= 0 && next <= max && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

const result = bfs(N, K);
console.log(result);
