const N = require('fs').readFileSync('/dev/stdin') * 1;

function queenCheck(queen, row) {
	for(let i = 0; i < row; i++) {
    if(queen[i] === queen[row] || Math.abs(queen[row] - queen[i]) === row - i)
      return false;
  }
  return true;
}

function search(queen, row) {
	const n = queen.length;
  let count = 0;

  if(n === row) {
    return 1;
  }

  for(let col = 0; col < N; col++) {
    queen[row] = col;
    if(queenCheck(queen, row)) {
      count += search(queen, row + 1);
    }
  }
  return count;
}

console.log(search(Array.from({ length: N }, () => 0), 0));