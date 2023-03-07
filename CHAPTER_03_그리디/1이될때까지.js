const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

let [n, k] = input.split(' ').map((v) => +v);

function solution(n, k) {
  let result = 0;

  while (n > 1) {
    if (n % k === 0) {
      n /= k;
    } else {
      n--;
    }
    result++;
  }

  return result;
}

console.log(solution(n, k));
