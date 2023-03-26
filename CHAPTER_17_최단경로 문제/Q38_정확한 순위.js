const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  let d = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
  for (let i = 1; i <= n; i++) d[i][i] = true;
  for (const [a, b] of arr) d[a][b] = true;

  for (let k = 1; k <= n; k++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (d[from][k] && d[k][to]) d[from][to] = true;
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (d[i][j] || d[j][i]) {
        count++;
      }
    }
    if (count === n) {
      //모든 노드와 연결되어 있는 경우
      ans++;
    }
  }

  return ans;
}

console.log(solution(n, m, arr));
