const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nc, ...arr] = input;
const [n, c] = nc.split(' ').map((v) => +v);
arr = arr.map((v) => +v);

function solution(n, c, arr) {
  arr.sort((a, b) => a - b);
  let ans = 0;

  //인접한 두 공유기 사이의 거리를 이진탐색으로 조절해 가며 조건(c개의 공유기 설치)을 만족하는지 탐색
  const binarySearch = (min, max) => {
    while (min <= max) {
      const mid = ~~((min + max) / 2);

      let cur = 0; //설치한 공유기 위치 (일단 첫 번째 집에 설치)
      let cnt = 1; //설치한 공유기 수

      for (let i = 1; i < n; i++) {
        //설치 가능한 경우
        if (arr[i] - arr[cur] >= mid) {
          cnt++;
          cur = i;
        }
      }

      //조건 확인
      if (cnt >= c) {
        min = mid + 1;
        ans = mid;
      } else {
        max = mid - 1;
      }
    }
  };

  binarySearch(0, arr[n - 1] - arr[0]);

  return ans;
}

console.log(solution(n, c, arr));
