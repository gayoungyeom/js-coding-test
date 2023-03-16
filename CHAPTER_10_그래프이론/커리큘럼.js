const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, arr) {
  let indegree = [...Array(n + 1).fill(0)];
  let graph = Array.from(Array(n + 1), () => []);
  let times = [...Array(n + 1).fill(0)];

  for (let i = 0; i < arr.length; i++) {
    const [time, ...rest] = arr[i];
    for (let j = 0; j < rest.length - 1; j++) {
      graph[rest[j]].push(i + 1);
    }
    indegree[i + 1] = rest.length - 1;
    times[i + 1] = time;
  }

  let result = [];

  const q = new Queue();
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
      result[i] = times[i];
    }
  }

  while (!q.isEmpty()) {
    const cur = q.dequeue();
    for (const node of graph[cur]) {
      result[node] = result[cur] + times[node];

      indegree[node]--;
      if (indegree[node] === 0) q.enqueue(node);
    }
  }

  for (let i = 1; i <= n; i++) {
    console.log(result[i]);
  }
}

solution(n, arr);
