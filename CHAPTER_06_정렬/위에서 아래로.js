const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map((v) => +v.replace('\r', ''));

function solution(n, arr) {
  return arr.sort((a, b) => b - a).join(' ');
}

console.log(solution(n, arr));
