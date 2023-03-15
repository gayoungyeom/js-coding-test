const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  let d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) d[i][i] = 0;
  for (const value of arr) {
    const [u, v, cost] = value;
    d[u][v] = cost;
  }

  for (let k = 1; k <= n; k++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (k === from || from === to) continue; //생략 가능
        d[from][to] = Math.min(d[from][to], d[from][k] + d[k][to]);
      }
    }
  }

  let ans = '';
  for (let from = 1; from <= n; from++) {
    for (let to = 1; to <= n; to++) {
      if (d[from][to] === Infinity) ans += 'INFINITY';
      else ans += `${d[from][to]} `;
    }
    ans += '\n';
  }

  return ans;
}

console.log(solution(n, m, arr));
