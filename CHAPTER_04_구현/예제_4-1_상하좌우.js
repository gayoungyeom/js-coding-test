const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = Number(n);
arr = arr.split(' ');

function solution(n, arr) {
  const DIR = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  let point = [1, 1];
  for (const d of arr) {
    const [x, y] = DIR[d];

    const nx = point[0] + x;
    const ny = point[1] + y;

    if (nx < 1 || nx > n || ny < 1 || ny > n) continue;

    point[0] = nx;
    point[1] = ny;
  }

  return point;
}

console.log(solution(n, arr));
