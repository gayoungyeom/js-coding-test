const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

const x = input.charCodeAt(0) - 97 + 1;
const y = +input[1];

function solution(x, y) {
  const DIR = [
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
  ];

  let count = 0;
  for (let i = 0; i < 8; i++) {
    const nx = x + DIR[i][0];
    const ny = y + DIR[i][1];

    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) continue;

    count++;
  }

  return count;
}

console.log(solution(x, y));
