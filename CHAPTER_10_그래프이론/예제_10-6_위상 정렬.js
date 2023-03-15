const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

let indegree = [...Array(n + 1).fill(0)];
function solution(n, m, arr) {
  let graph = Array.from(Array(n + 1), () => []);

  for (const value of arr) {
    const [u, v] = value;
    graph[u].push(v);
    indegree[v]++;
  }

  const q = new Queue();
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) q.enqueue(i);
  }

  let sorted = [];
  while (!q.isEmpty()) {
    const cur = q.dequeue();
    sorted.push(cur);

    for (const node of graph[cur]) {
      indegree[node]--;
      if (indegree[node] === 0) q.enqueue(node);
    }
  }

  return sorted;
}

console.log(solution(n, m, arr));
