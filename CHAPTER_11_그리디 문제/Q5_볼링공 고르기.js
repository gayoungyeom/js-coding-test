// 5 3
// 1 3 2 3 2

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, arr] = input;
const [n, m] = nm.split(' ').map(Number);
arr = arr.split(' ').map(Number);

function solution(n, m, arr) {
  const nC2 = (n) => {
    return (n * (n - 1)) / 2;
  };

  let weight = [...Array(11).fill(0)]; //무게별 볼링공 개수
  for (const w of arr) {
    weight[w]++;
  }

  let dup = 0;
  for (let i = 1; i <= m; i++) {
    if (weight[i] > 1) {
      dup += nC2(weight[i]); //같은 무게의 공을 선택하는 경우ㄴ
    }
  }

  return nC2(n) - dup;
}

console.log(solution(n, m, arr));
