const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, k] = arr[m].split(' ').map((v) => +v);
arr.pop();
arr = arr.map((str) => str.split(' ').map((v) => +v));

const d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
function solution(n, m, x, k, arr) {
  for (let i = 1; i <= n; i++) d[i][i] = 0;
  for (const value of arr) {
    const [u, v] = value;
    d[u][v] = 1;
    d[v][u] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (i === from || from === to) continue;
        d[from][to] = Math.min(d[from][to], d[from][i] + d[i][to]);
      }
    }
  }

  const dist = d[1][k] + d[k][x];
  return dist >= Infinity ? -1 : dist;
}

console.log(solution(n, m, x, k, arr));
