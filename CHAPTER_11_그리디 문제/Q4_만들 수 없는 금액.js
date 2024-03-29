const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map(Number);

function solution(n, arr) {
  arr.sort((a, b) => a - b);

  let target = 1;
  for (const coin of arr) {
    if (target < coin) break;
    target += coin;
  }

  return target;
}

console.log(solution(n, arr));
