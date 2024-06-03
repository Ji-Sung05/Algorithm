const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let result = -1;

let five = Math.floor(input / 5);
while (five >= 0) {
  const remain = input - five * 5;
  if (remain % 3 === 0) {
    result = remain / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(result);