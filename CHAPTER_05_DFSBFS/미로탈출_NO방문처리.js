const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const graph = arr.map((v1) => v1.split('').map((v2) => +v2));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (graph, sx, sy) => {
  const q = [];
  q.push([sx, sy]);

  while (q.length !== 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (graph[nx][ny] === 1) {
        q.push([nx, ny]);
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }
};

function solution(n, m, graph) {
  bfs(graph, 0, 0);
  console.log(graph);
  return graph[n - 1][m - 1];
}

console.log(solution(n, m, graph));
