//0001100

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

let s = input.split('').map((v) => +v);

function solution(s) {
  let group = [0, 0];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      group[s[i]]++;
    }
  }
  group[s[s.length - 1]]++;

  return Math.min(...group);
}

console.log(solution(s));
