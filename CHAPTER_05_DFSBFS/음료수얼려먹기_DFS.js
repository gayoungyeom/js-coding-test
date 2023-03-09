const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const graph = arr.map((v1) => v1.split(''));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const dfs = (graph, x, y) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

    if (!visited[nx][ny] && graph[nx][ny] === '0') {
      dfs(graph, nx, ny);
    }
  }
};

function solution(n, m, graph) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const cur = graph[i][j];
      if (!visited[i][j] && cur === '0') {
        dfs(graph, i, j);
        count++;
      }
    }
  }

  return count;
}

console.log(solution(n, m, graph));
