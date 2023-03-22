const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

function solution(n, arr) {
  arr.sort((a, b) => a - b);
  const mid = ~~((n - 1) / 2); //합이 같은 경우(= n이 짝수) 작은 값을 원하므로 n-1 설정
  return arr[mid];
}

console.log(solution(n, arr));
