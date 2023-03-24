const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [t, ...rest] = input;
t = +t;

let golds = [];
let loop = t;
while (loop--) {
  let [nm, arr, ...next] = rest;
  rest = next;
  const [n, m] = nm.split(' ').map((v) => +v);
  arr = arr.split(' ').map((v) => +v);

  const gold = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < m; j++) {
      const idx = i * m + j;
      tmp.push(arr[idx]);
    }
    gold.push(tmp);
  }
  golds.push(gold);
}

function solution(t, golds) {
  let ans = '';
  for (const gold of golds) {
    const n = gold.length;
    const m = gold[0].length;

    let d = Array.from(Array(n), () => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
      d[i][0] = gold[i][0];
    }

    for (let j = 1; j < m; j++) {
      for (let i = 0; i < n; i++) {
        if (i === 0)
          d[i][j] = Math.max(d[i][j - 1], d[i + 1][j - 1]) + gold[i][j];
        else if (i === n - 1)
          d[i][j] = Math.max(d[i - 1][j - 1], d[i][j - 1]) + gold[i][j];
        else
          d[i][j] =
            Math.max(d[i - 1][j - 1], d[i][j - 1], d[i + 1][j - 1]) +
            gold[i][j];
      }
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
      max = Math.max(max, d[i][m - 1]);
    }
    ans += `${max}\n`;
  }

  return ans;
}

console.log(solution(t, golds));
