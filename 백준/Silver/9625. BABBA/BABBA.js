const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
const dp = [];
dp.push(0);
dp.push(1);
if(input === 1) {
  console.log(`${dp[0]} ${dp[1]}`);
} else {
  for(let i = 0; i < input - 1; i++) {
    let a = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = a;
  }
  
  console.log(dp.join(' '));
}