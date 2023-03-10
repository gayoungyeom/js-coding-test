const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.split(' ').map((v) => +v);

let ans = 0;
const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = ~~((start + end) / 2); //현재 h
    const sum = arr.map((v) => (v < mid ? 0 : v - mid)).reduce((a, b) => a + b);

    if (target <= sum) {
      //필요한 떡의 길이보다 큰 경우
      start = mid + 1;
      ans = mid;
    } else {
      //필요한 떡의 길이보다 작은 경우
      end = mid - 1;
    }
  }

  return ans;
};

function solution(n, m, arr) {
  return binarySearch(arr, m, 0, Math.max(...arr));
}

console.log(solution(n, m, arr));
