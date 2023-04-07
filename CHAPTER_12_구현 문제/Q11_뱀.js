//#1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [n, k, ...rest] = input;
  (n = +n), (k = +k);

  const apples = [];
  for (let i = 0; i < k; i++) apples.push(rest[i].split(' ').map((v) => +v));

  const l = +rest[apples.length];
  const dirs = rest
    .slice(apples.length + 1, rest.length)
    .map((str) => str.split(' '));

  function solution(n, k, apples, l, dirs) {
    let time = 0;
    let arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    for (const [x, y] of apples) {
      arr[x][y] = 1;
    }

    let changeDir = [...Array(10001).fill(0)];
    for (const [x, c] of dirs) {
      changeDir[+x] = c;
    }

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let cur = 0; //현재 방향

    let x = 1,
      y = 1;
    const q = []; //뱀의 위치 정보
    q.push([x, y]);
    arr[x][y] = 2;

    while (1) {
      if (changeDir[time] === 'D') {
        cur = (cur + 1) % 4;
      } else if (changeDir[time] === 'L') {
        cur = cur ? cur - 1 : 3;
      }
      const nx = x + dx[cur];
      const ny = y + dy[cur];

      time++;

      //벽에 부딪히는 경우
      if (nx < 1 || nx > n || ny < 1 || ny > n) {
        return time;
      }
      //자기 몸에 부딪히는 경우
      if (arr[nx][ny] === 2) {
        return time;
      }

      //사과가 없는 경우 꼬리 제거
      if (arr[nx][ny] === 0) {
        const [px, py] = q.shift();
        arr[px][py] = 0;
      }
      arr[nx][ny] = 2;
      q.push([nx, ny]);
      x = nx;
      y = ny;
    }
  }

  console.log(solution(n, k, apples, l, dirs));

  process.exit();
});

//#2
function solution(n, k, apples, l, dirs) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  for (const [x, y] of apples) {
    arr[x - 1][y - 1] = 1;
  }

  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let sec = 0; //시간
  let curD = 0; //현재 바라보는 방향

  arr[0][0] = 2; //뱀이 위치
  let head = [0, 0]; //뱀 머리 위치

  const snake = [];
  snake.push(head);

  while (1) {
    sec++;

    const [x, y] = head;
    const [dx, dy] = d[curD];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) return sec; //벽에 부딪히는 경우
    if (arr[nx][ny] === 2) return sec; //자기 몸과 부딪히는 경우

    //사과가 없는 경우 꼬리 이동
    if (arr[nx][ny] === 0) {
      const tail = snake.shift();
      arr[tail[0]][tail[1]] = 0;
    }
    arr[nx][ny] = 2;
    head = [nx, ny];
    snake.push([nx, ny]);

    for (const [X, C] of dirs) {
      if (Number(X) === sec) {
        if (C === 'D') curD = (curD + 1) % 4;
        else curD = curD === 0 ? 3 : curD - 1;
      }
    }
  }
}

console.log(solution(n, k, apples, l, dirs));
