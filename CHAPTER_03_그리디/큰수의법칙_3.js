const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

let [nums, arr] = input;
let [n, m, k] = nums.split(' ').map((value) => +value);
arr = arr.split(' ').map((value) => +value);

function solution(n, m, k, arr) {
  arr.sort((a, b) => b - a);
  const first = arr[0];
  const second = arr[1];

  //가장 큰 수가 더해지는 횟수
  let count = ~~(m / (k + 1)) * k;
  count += m % (k + 1);

  let result = 0;
  result += count * first;
  result += (m - count) * second;

  return result;
}

console.log(solution(n, m, k, arr));
