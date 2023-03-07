const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

let n = Number(input);

function solution(n) {
  let count = 0;

  for (let h = 0; h <= n; h++) {
    for (let m = 0; m <= 59; m++) {
      for (let s = 0; s <= 59; s++) {
        const time = `${h}${m}${s}`;
        if (time.includes('3')) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(solution(n));
