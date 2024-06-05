const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, ...arr] = input;
count = Number(N)
arr = arr.map((i) => Number(i));
const result = [];
for(let i = 0; i < arr.length; i++) {
    const len = arr[i] + 1;
    const dp = Array(len).fill(0);
    
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    
    for(let j = 4; j < dp.length; j++) {
        dp[j] = dp[j - 3] + dp[j - 2];
    }
    
    result.push(dp[arr[i]]);
}
console.log(result.join('\n'));