/**
 * 5
 * 2 3 1 2 2
 */

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

function solution(n, arr) {
  let group = 0;

  arr.sort((a, b) => a - b);

  let count = 0; //현재 그룹에 포함되는 모험가 수
  for (const fear of arr) {
    count++; //일단 현재 그룹에 포함
    if (count >= fear) {
      group++;
      count = 0;
    }
  }

  return group;
}

console.log(solution(n, arr));
