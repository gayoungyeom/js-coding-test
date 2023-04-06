const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

let point = input.split('').map(Number);

function solution(point) {
  const n = point.length;
  const left = point.slice(0, n / 2).reduce((a, b) => a + b);
  const right = point.slice(n / 2).reduce((a, b) => a + b);
  return left === right ? 'LUCKY' : 'READY';
}

console.log(solution(point));
