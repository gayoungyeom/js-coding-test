const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
const students = arr.map((v) => v.replace('\r', '').split(' '));

function solution(n, students) {
  const sortedNames = students
    .sort((a, b) => a[1] - b[1])
    .map((student) => student[0]);

  return sortedNames.join(' ');
}

console.log(solution(n, students));
