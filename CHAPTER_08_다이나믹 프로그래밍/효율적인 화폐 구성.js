const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const coins = arr.map((v) => +v);

const d = [...Array(m + 1).fill(Infinity)];

const dp = (n, m, coins) => {
  d[0] = 0;
  for (const coin of coins) d[coin] = 1;

  for (let i = 1; i <= m; i++) {
    for (const coin of coins) {
      if (i < coin) continue;
      d[i] = Math.min(d[i], d[i - coin]) + 1;
    }
  }

  return d[m];
};

function solution(n, m, coins) {
  const result = dp(n, m, coins);
  return result === Infinity ? -1 : result;
}

console.log(solution(n, m, coins));
