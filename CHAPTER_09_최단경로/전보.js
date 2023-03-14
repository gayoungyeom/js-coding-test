const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nmc, ...arr] = input;
const [n, m, c] = nmc.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

let d = [...Array(n + 1).fill(Infinity)];
function solution(n, m, c, arr) {
  let graph = Array.from(Array(n + 1), () => []);
  for (const value of arr) {
    const [u, v, dist] = value;
    graph[u].push([v, dist]);
  }

  const pq = new PriorityQueue();
  pq.push([0, c]);
  d[c] = 0;

  while (!pq.empty()) {
    const [dist, cur] = pq.pop();

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

  d = d.slice(1);
  const count = d.filter((v) => v && v !== Infinity).length;
  const max = Math.max(...d);

  return [count, max];
}

console.log(solution(n, m, c, arr));
