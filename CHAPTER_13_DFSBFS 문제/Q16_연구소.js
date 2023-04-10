const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map(Number);
arr = arr.map((str) => str.split(' ').map(Number));

function solution(n, m, arr) {
  let ans = 0;
  let virus = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) virus.push([i, j]);
    }
  }

  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  let visited = Array.from(Array(n), () => Array(m).fill(false));

  const dfs = (x, y, graph) => {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (graph[nx][ny] === 0) {
        graph[nx][ny] = 2;
        dfs(nx, ny, graph);
      }
    }
  };

  const nCr = (x, y, tmp) => {
    if (tmp.length === 3) {
      //3개의 벽 세우기
      let graph = JSON.parse(JSON.stringify(arr));

      for (const [i, j] of tmp) {
        graph[i][j] = 1;
      }

      //바이러스 퍼뜨리기
      for (const [i, j] of virus) {
        dfs(i, j, graph);
      }

      //안전 영역 계산
      let cnt = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (graph[i][j] === 0) cnt++;
        }
      }
      ans = Math.max(ans, cnt);
      return;
    }

    for (let i = x; i < n; i++) {
      for (let j = y; j < m; j++) {
        if (!visited[i][j] && arr[i][j] === 0) {
          tmp.push([i, j]);
          visited[i][j] = true;

          nCr(i, j + 1, tmp);

          tmp.pop();
          visited[i][j] = false;
        }
      }
      y = 0; //다음 행에 대해서는 첫 번째 열부터 시작
    }
  };

  nCr(0, 0, []);

  return ans;
}

console.log(solution(n, m, arr));
