const input = +require('fs').readFileSync('/dev/stdin').toString().trim()

let five = Math.floor(input / 5);
let answer = -1;

while(five >= 0) {
  let rest = input - five * 5;
  if(rest % 3 === 0) {
    answer = Math.floor(rest / 3) + five
    break;
  }
  five--;
}

console.log(answer);
