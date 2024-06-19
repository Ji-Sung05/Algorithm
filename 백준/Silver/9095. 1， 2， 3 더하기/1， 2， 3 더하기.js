const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

const [N, ...arr] = input;

function solution(N, arr) {
  const memo = [...Array(11)];
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;
  for(let i = 4; i < 11; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  for(let i = 0; i < N; i++) {
    console.log(memo[arr[i]]);
  }
}

solution(N, arr);