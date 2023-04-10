const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr, op] = input;
n = +n;
arr = arr.split(' ').map(Number);
op = op.split(' ').map(Number);

function solution(n, arr, op) {
  let min = Infinity;
  let max = -Infinity;

  const dfs = (idx, add, sub, mul, div, result) => {
    if (idx === n) {
      min = Math.min(min, result);
      max = Math.max(max, result);
      return;
    }

    if (add > 0) dfs(idx + 1, add - 1, sub, mul, div, result + arr[idx]);
    if (sub > 0) dfs(idx + 1, add, sub - 1, mul, div, result - arr[idx]);
    if (mul > 0) dfs(idx + 1, add, sub, mul - 1, div, result * arr[idx]);
    if (div > 0) dfs(idx + 1, add, sub, mul, div - 1, ~~(result / arr[idx]));
  };

  dfs(1, op[0], op[1], op[2], op[3], arr[0]);

  return `${max}\n${min}`;
}

console.log(solution(n, arr, op));
