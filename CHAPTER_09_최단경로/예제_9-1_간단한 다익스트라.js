const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let visited = [...Array(n + 1).fill(false)];
let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
  //초기화
  const graph = Array.from(Array(n + 1), () => []);
  for (const v of arr) {
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  //방문하지 않은 노드에서 최단 거리가 가장 짧은 노드의 인덱스 반환
  const getSmallestNode = () => {
    let min = Infinity;
    let index = 0;
    for (const i in d) {
      if (!visited[i] && min > d[i]) {
        min = d[i];
        index = i;
      }
    }
    return index;
  };

  const dijkstra = (start) => {
    //시작 노드 초기화
    d[start] = 0;
    visited[start] = true;
    for (const i of graph[start]) {
      const [node, cost] = i;
      d[node] = cost;
    }

    //시작 노드를 제외한 전체 노드에 대해 반복
    for (let i = 0; i < n; i++) {
      const cur = +getSmallestNode();
      visited[cur] = true;

      for (const j of graph[cur]) {
        const node = j[0];
        const cost = d[cur] + j[1];
        if (cost < d[node]) {
          d[node] = cost;
        }
      }
    }
  };

  dijkstra(start);

  for (let i = 1; i <= n; i++) {
    if (d[i] === Infinity) {
      console.log('INFINITY');
    } else {
      console.log(d[i]);
    }
  }

  return d;
}

console.log(solution(n, m, start, arr));
