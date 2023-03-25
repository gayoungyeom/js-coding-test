const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

let n = +input;

const MAX = 60000000;
function solution(n) {
  let d = [...Array(MAX + 1).fill(false)];
  d[1] = true; //첫번째 못생긴 수 1

  const s = new Set();
  s.add(1);

  for (let i = 1; i <= MAX / 5; i++) {
    if (d[i]) {
      d[i * 2] = true;
      d[i * 3] = true;
      d[i * 5] = true;

      s.add(i * 2);
      s.add(i * 3);
      s.add(i * 5);
    }
  }

  return [...s].sort((a, b) => a - b)[n - 1];
}

console.log(solution(n));
