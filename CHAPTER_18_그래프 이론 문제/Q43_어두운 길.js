const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

const findParent = (parent, x) => {
  if (parent[x] === x) return parent[x];
  return (parent[x] = findParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

function solution(n, m, arr) {
  let sum = 0;
  let graph = [];
  for (const [x, y, dist] of arr) {
    graph.push([dist, x, y]);
    sum += dist;
  }
  graph.sort((a, b) => a[0] - b[0]);

  let parent = [...Array(n).fill(0)];
  for (let i = 0; i < n; i++) parent[i] = i;

  let cost = 0;
  for (const [dist, x, y] of graph) {
    if (findParent(parent, x) !== findParent(parent, y)) {
      unionParent(parent, x, y);
      cost += dist;
    }
  }

  return sum - cost;
}

console.log(solution(n, m, arr));
