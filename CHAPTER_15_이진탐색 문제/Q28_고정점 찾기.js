const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

function solution(n, arr) {
  const binarySearch = (start, end) => {
    if (start > end) return;

    const mid = ~~((start + end) / 2);
    if (arr[mid] === mid) return mid;
    else if (arr[mid] > mid) return binarySearch(start, mid - 1);
    else return binarySearch(mid + 1, end);
  };

  return binarySearch(0, n - 1);
}

console.log(solution(n, arr));
