const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

const [nm, abd, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, y, d] = abd.split(' ').map((v) => +v);
const map = arr.map((v) => v.split(' ').map((v) => +v));

function solution(n, m, x, y, d, map) {
  //북동남서 방향
  const DIR = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  //방문 정보
  let visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[x][y] = true;

  let count = 1; //방문한 칸의 수
  let turnTime = 0; //현재 칸에서 탐색한 방향의 수

  while (1) {
    //왼쪽으로 회전
    d = d === 0 ? 3 : d - 1;
    let nx = x + DIR[d][0];
    let ny = y + DIR[d][1];

    //정면에 가보지 않은 칸이 존재하는 경우 전진
    if (!map[nx][ny] && !visited[nx][ny]) {
      visited[nx][ny] = true;
      x = nx;
      y = ny;
      count++;
      turnTime = 0;
      continue;
    } else {
      //정면에 가보지 않은 칸이 없거나 바다인 경우
      turnTime++;
    }

    //네 방향 모두 갈 수 없는 경우
    if (turnTime === 4) {
      nx = x - DIR[d][0];
      ny = y - DIR[d][1];

      //뒤로 갈 수 있으면 이동
      if (!map[nx][ny]) {
        x = nx;
        y = ny;
        turnTime = 0;
      } else {
        //뒤가 바다로 막혀있는 경우
        break;
      }
    }
  }

  return count;
}

console.log(solution(n, m, x, y, d, map));
