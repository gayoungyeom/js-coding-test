const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
  //초기화
  const graph = Array.from(Array(n + 1), () => []);
  for (const v of arr) {
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  const dijkstra = (start) => {
    //시작 노드 초기화
    const pq = new PriorityQueue();
    pq.push([0, start]); //[거리, 노드]
    d[start] = 0;

    while (!pq.empty()) {
      const [dist, cur] = pq.pop(); //현재 최단 거리가 가장 짧은 노드의 정보

      //방문한 적이 있는 경우(최단 거리가 아닌 경우) 스킵
      if (d[cur] < dist) continue;

      for (const i of graph[cur]) {
        const node = i[0];
        const cost = dist + i[1];
        if (cost < d[node]) {
          pq.push([cost, node]);
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
