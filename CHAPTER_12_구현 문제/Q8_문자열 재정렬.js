const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

let str = input;

function solution(str) {
  let result = [];
  let sum = 0;
  for (const s of str) {
    if (isNaN(s)) {
      result.push(s);
    } else {
      sum += +s;
    }
  }

  result.sort();
  if (sum) result.push(sum);

  return result.join('');
}

console.log(solution(str));
