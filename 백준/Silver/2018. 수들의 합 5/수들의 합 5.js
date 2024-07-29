const n = +require('fs').readFileSync('/dev/stdin')

let i = 1, j = 1;
let sum = i
let cnt = 0

while(j <= n) {
    if(sum === n) {
      cnt++
      sum -= i
      i++
    } else if( sum > n) {
      sum -= i
      i++
    } else {
      j++
      sum += j
    }
}
console.log(cnt)