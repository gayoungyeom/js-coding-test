const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr, operator] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);
operator = operator.split(' ').map((v) => +v);

function solution(n, arr, operator) {
  let [add, sub, mul, div] = operator;

  let max = -Infinity,
    min = Infinity;

  const go = (i, cur) => {
    if (i === n) {
      max = Math.max(max, cur);
      min = Math.min(min, cur);
      return;
    }

    if (add > 0) {
      add--;
      go(i + 1, cur + arr[i]);
      add++;
    }
    if (sub > 0) {
      sub--;
      go(i + 1, cur - arr[i]);
      sub++;
    }
    if (mul > 0) {
      mul--;
      go(i + 1, cur * arr[i]);
      mul++;
    }
    if (div > 0) {
      div--;
      go(i + 1, ~~(cur / arr[i]));
      div++;
    }
  };

  go(1, arr[0]); //인덱스, 현재까지 계산 결과

  console.log(max);
  console.log(min);
}

solution(n, arr, operator);
