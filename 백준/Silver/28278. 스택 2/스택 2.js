const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...arr] = input
N = +N;
arr = arr.map(line => line.split(' ').map(v => +v));

const st = []
const ans = []
for(let i = 0; i < N; i++) {
  let n = arr[i][0]
  switch(n) {
    case 1:
      st.push(arr[i][1]);
      break;
    case 2:
      st.length > 0 ? ans.push(st.pop()) : ans.push(-1);
      break;
    case 3:
      ans.push(st.length);
      break;
    case 4:
      st.length > 0 ? ans.push(0) : ans.push(1);
      break;
    case 5:
      st.length > 0 ? ans.push(st[st.length - 1]) : ans.push(-1);
      break;
  }
}

console.log(ans.join('\n'));