//fs 모듈을 사용할 경우 백준 런타임 에러(ENOENT) 발생
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map((v) => +v);
  arr = arr.map((str) => str.split(' ').map((v) => +v));

  function solution(n, m, arr) {
    const houses = [];
    const chickens = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === 1) {
          houses.push([i + 1, j + 1]);
        }
        if (arr[i][j] === 2) {
          chickens.push([i + 1, j + 1]);
        }
      }
    }

    let ans = Infinity;
    const nCr = (n, cur, tmp) => {
      if (tmp.length === m) {
        //m개의 치킨집 선택 후 치킨 거리 계산
        const dist = [];
        for (const house of houses) {
          const [r1, c1] = house;
          let min = Infinity;
          for (const i of tmp) {
            const [r2, c2] = chickens[i];
            min = Math.min(min, Math.abs(r1 - r2) + Math.abs(c1 - c2));
          }
          dist.push(min);
        }
        ans = Math.min(
          ans,
          dist.reduce((a, b) => a + b)
        );
        return;
      }

      for (let i = cur; i < n; i++) {
        tmp.push(i);
        nCr(n, i + 1, tmp);
        tmp.pop();
      }
    };

    nCr(chickens.length, 0, []);

    return ans;
  }

  console.log(solution(n, m, arr));

  process.exit();
});
