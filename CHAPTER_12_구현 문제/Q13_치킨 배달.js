const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map(Number);
arr = arr.map((str) => str.split(' ').map(Number));

function solution(n, m, arr) {
  const chickens = [];
  const houses = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        houses.push([i + 1, j + 1]);
      } else if (arr[i][j] === 2) {
        chickens.push([i + 1, j + 1]);
      }
    }
  }

  let ans = Infinity;

  const nCr = (cur, tmp) => {
    if (tmp.length === m) {
      let sum = 0;
      for (let i = 0; i < houses.length; i++) {
        const [r1, c1] = houses[i];
        let min = Infinity;
        for (let j = 0; j < m; j++) {
          const [r2, c2] = chickens[tmp[j]];
          min = Math.min(min, Math.abs(r1 - r2) + Math.abs(c1 - c2));
        }
        sum += min;
      }
      ans = Math.min(ans, sum);
      return;
    }

    for (let i = cur; i < chickens.length; i++) {
      tmp.push(i);
      nCr(i + 1, tmp);
      tmp.pop();
    }
  };

  nCr(0, []);

  return ans;
}

console.log(solution(n, m, arr));
