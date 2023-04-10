const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' '));

function solution(n, arr) {
  const teachers = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 'T') teachers.push([i, j]);
    }
  }

  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  let visited = Array.from(Array(n), () => Array(n).fill(false));

  const avoid = (graph) => {
    for (const [x, y] of teachers) {
      //상
      for (let i = x; i >= 0; i--) {
        if (graph[i][y] === 'O') break;
        if (graph[i][y] === 'S') return false;
      }

      //하
      for (let i = x; i < n; i++) {
        if (graph[i][y] === 'O') break;
        if (graph[i][y] === 'S') return false;
      }

      //좌
      for (let i = y; i >= 0; i--) {
        if (graph[x][i] === 'O') break;
        if (graph[x][i] === 'S') return false;
      }

      //우
      for (let i = y; i < n; i++) {
        if (graph[x][i] === 'O') break;
        if (graph[x][i] === 'S') return false;
      }
    }

    return true;
  };

  let flag = false;
  const nCr = (x, y, tmp) => {
    if (flag) return; //감시를 피할 수 있는 경우가 하나라도 존재한다면 종료

    if (tmp.length === 3) {
      //장애물 3개 설치
      let graph = JSON.parse(JSON.stringify(arr));
      for (const [x, y] of tmp) {
        graph[x][y] = 'O';
      }
      //감시를 피할 수 있는지 체크
      flag ||= avoid(graph);
      return;
    }

    for (let i = x; i < n; i++) {
      for (let j = y; j < n; j++) {
        if (!visited[i][j] && arr[i][j] === 'X') {
          tmp.push([i, j]);
          visited[i][j] = true;

          nCr(i, j + 1, tmp);

          tmp.pop();
          visited[i][j] = false;
        }
      }
      y = 0;
    }
  };

  nCr(0, 0, []);

  return flag ? 'YES' : 'NO';
}

console.log(solution(n, arr));
