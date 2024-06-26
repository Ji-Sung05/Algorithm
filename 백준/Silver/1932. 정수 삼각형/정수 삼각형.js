const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...arr] = input;
N = +N;

arr = arr.map(line => line.split(' ').map(v => +v));

for(let i = 1; i < N; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    if(j === 0) {
      arr[i][j] = arr[i][j] + arr[i - 1][j];
    } else if(j === arr[i].length - 1) {
      arr[i][j] = arr[i][j] + arr[i - 1][j - 1];
    } else {
      arr[i][j] = arr[i][j] + Math.max(arr[i - 1][j], arr[i - 1][j - 1]);
    }
  }
}

console.log(Math.max(...arr[N - 1]));


