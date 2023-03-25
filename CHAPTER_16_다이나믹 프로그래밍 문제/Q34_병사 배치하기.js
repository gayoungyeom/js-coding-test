const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

function solution(n, arr) {
  let d = [...Array(n).fill(1)];

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        d[i] = Math.max(d[i], d[j] + 1);
      }
    }
  }

  return n - Math.max(...d);
}

console.log(solution(n, arr));
