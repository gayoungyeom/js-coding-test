const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, m, ...arr] = input;
(n = +n), (m = +m);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  let d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) d[i][i] = 0;
  for (const [a, b, c] of arr) d[a][b] = Math.min(d[a][b], c); //노선이 여러개이므로 작은 값으로 초기화

  for (let k = 1; k <= n; k++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        d[from][to] = Math.min(d[from][to], d[from][k] + d[k][to]);
      }
    }
  }

  let ans = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += `${d[i][j] === Infinity ? 0 : d[i][j]} `;
    }
    ans += '\n';
  }
  return ans;
}

console.log(solution(n, m, arr));
