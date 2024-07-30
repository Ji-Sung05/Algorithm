const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const brr = input[3].split(' ').map(Number);

const array = new Set(arr);
const result = brr.map(v => array.has(v) ? 1 : 0);
console.log(result.join('\n'));