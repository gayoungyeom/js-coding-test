//02984

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

let s = input.split('').map((v) => +v);

function solution(s) {
  let result = 0;
  for (const num of s) {
    if (num <= 1 || result === 0) result += num;
    else result *= num;
  }
  return result;
}

console.log(solution(s));
