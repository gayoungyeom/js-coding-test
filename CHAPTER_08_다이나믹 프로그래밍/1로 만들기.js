const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

const n = +input;

const d = [...Array(n + 1).fill(0)];

//1. top-down
const dp = (x) => {
  if (x === 1 || x === 2 || x === 3 || x === 5) return 1;

  if (d[x] !== 0) return d[x];

  if (x % 5 === 0) return (d[x] = Math.min(dp(x / 5), dp(x - 1)) + 1);
  if (x % 3 === 0) return (d[x] = Math.min(dp(x / 3), dp(x - 1)) + 1);
  if (x % 2 === 0) return (d[x] = Math.min(dp(x / 2), dp(x - 1)) + 1);
  return (d[x] = dp(x - 1) + 1);
};

//2. bottom-up
const dp2 = (x) => {
  d[1] = d[2] = d[3] = d[5] = 1;
  d[4] = 2;

  for (let i = 6; i <= x; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 === 0) d[i] = Math.min(d[i / 2], d[i - 1]) + 1;
    if (i % 3 === 0) d[i] = Math.min(d[i / 3], d[i - 1]) + 1;
    if (i % 5 === 0) d[i] = Math.min(d[i / 5], d[i - 1]) + 1;
  }

  return d[x];
};

function solution(n) {
  return dp(n);
}

console.log(solution(n));
