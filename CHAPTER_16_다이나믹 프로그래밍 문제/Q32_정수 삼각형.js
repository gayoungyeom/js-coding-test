const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, arr) {
  let d = Array.from(Array(n), () => Array(n).fill(0));

  d[0][0] = arr[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) d[i][j] = d[i - 1][j] + arr[i][j];
      else if (i === j) d[i][j] = d[i - 1][j - 1] + arr[i][j];
      else d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + arr[i][j];
    }
  }

  let max = 0;
  for (let j = 0; j < n; j++) {
    max = Math.max(max, d[n - 1][j]);
  }

  return max;
}

console.log(solution(n, arr));
