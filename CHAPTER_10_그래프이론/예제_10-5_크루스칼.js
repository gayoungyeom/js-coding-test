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
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }

  let edges = [];
  for (const value of arr) {
    const [u, v, cost] = value;
    edges.push([cost, u, v]);
  }

  edges.sort((a, b) => a[0] - b[0]);

  let result = 0;
  for (const edge of edges) {
    const [cost, a, b] = edge;
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      result += cost;
    }
  }

  return result;
}

console.log(solution(n, m, arr));
