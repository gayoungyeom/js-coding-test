const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nx, arr] = input;
const [n, x] = nx.split(' ').map((v) => +v);
arr = arr.split(' ').map((v) => +v);

function solution(n, x, arr) {
  let min = Infinity; //x가 등장하는 첫 번째 인덱스
  let max = -Infinity; //x가 등장하는 마지막 인덱스
  let flag = false;

  const binarySearch = (start, end, target) => {
    if (start > end) return;

    const mid = ~~((start + end) / 2);

    if (arr[mid] === target) {
      flag = true;
      min = Math.min(min, mid);
      max = Math.max(max, mid);
    }

    binarySearch(start, mid - 1, target);
    binarySearch(mid + 1, end, target);
  };

  binarySearch(0, n - 1, x);

  return flag ? max - min + 1 : -1;
}

console.log(solution(n, x, arr));
