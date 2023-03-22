const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' ').map((v) => (isNaN(v) ? v : +v)));

function solution(n, arr) {
  arr.sort((a, b) => {
    const [name1, kor1, eng1, math1] = a;
    const [name2, kor2, eng2, math2] = b;

    if (kor1 < kor2) {
      return 1;
    } else if (kor1 > kor2) {
      return -1;
    } else {
      if (eng1 < eng2) {
        return -1;
      } else if (eng1 > eng2) {
        return 1;
      } else {
        if (math1 < math2) {
          return 1;
        } else if (math1 > math2) {
          return -1;
        } else {
          if (name1 < name2) {
            return -1;
          } else {
            return 1;
          }
        }
      }
    }
  });

  let sorted = '';
  for (const a of arr) sorted += `${a[0]}\n`;
  return sorted;
}

console.log(solution(n, arr));
