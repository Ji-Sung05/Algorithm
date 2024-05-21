const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const word = input.toUpperCase().split('');

const counts = new Map();

word.forEach((char) => {
  if (char !== ' ') {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
});

const maxCount = Math.max(...counts.values());
const maxChars = [...counts].filter(([char, count]) => count === maxCount).map(([char, count]) => char);

const result = maxChars.length > 1 ? '?' : maxChars[0];

console.log(result);