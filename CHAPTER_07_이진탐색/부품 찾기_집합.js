const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr, m, req] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);
m = +m;
req = req.split(' ').map((v) => +v);

function solution(n, m, arr, req) {
  let store = new Set(arr);

  let ans = '';
  for (const target of req) {
    if (store.has(target)) ans += 'yes ';
    else ans += 'no ';
  }
  return ans;
}

console.log(solution(n, m, arr, req));
