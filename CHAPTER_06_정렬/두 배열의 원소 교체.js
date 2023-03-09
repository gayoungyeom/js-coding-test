const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nk, A, B] = input;
const [n, k] = nk.split(' ');
A = A.replace('\r', '')
  .split(' ')
  .map((v) => +v);
B = B.replace('\r', '')
  .split(' ')
  .map((v) => +v);

function solution(n, k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    if (A[i] < B[i]) {
      [A[i], B[i]] = [B[i], A[i]];
    }
  }

  return A.reduce((a, b) => a + b);
}

console.log(solution(n, k, A, B));
