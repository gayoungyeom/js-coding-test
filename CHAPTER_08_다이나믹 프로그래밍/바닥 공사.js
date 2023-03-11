const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

const n = +input;

const DIV = 796796;
const d = [...Array(n + 1).fill(0)];

const dp = (n) => {
  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 2] * 2 + d[i - 1]) % DIV;
  }

  return d[n];
};

function solution(n) {
  return dp(n);
}

console.log(solution(n));
