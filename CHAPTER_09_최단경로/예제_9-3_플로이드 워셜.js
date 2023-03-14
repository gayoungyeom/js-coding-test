const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

function solution(n, m, arr) {
  for (let i = 1; i <= n; i++) graph[i][i] = 0;
  for (const value of arr) {
    const [u, v, cost] = value;
    graph[u][v] = cost;
  }

  for (let i = 1; i <= n; i++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (i === from || from === to) continue; //생략 가능

        graph[from][to] = Math.min(
          graph[from][to],
          graph[from][i] + graph[i][to]
        );
      }
    }
  }

  let ans = '';
  for (let from = 1; from <= n; from++) {
    for (let to = 1; to <= n; to++) {
      if (graph[from][to] === Infinity) ans += 'INFINITY';
      else ans += `${graph[from][to]} `;
    }
    ans += '\n';
  }

  return ans;
}

console.log(solution(n, m, arr));
