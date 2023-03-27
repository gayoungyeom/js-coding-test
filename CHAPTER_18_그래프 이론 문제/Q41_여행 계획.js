const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const arr = rest.slice(0, n).map((str) => str.split(' ').map((v) => +v));
const routes = rest[n].split(' ').map((v) => +v);

function solution(n, m, arr, routes) {
  const findParent = (parent, x) => {
    if (parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
  };

  const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  };

  const parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) parent[i] = i;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j) continue;
      if (arr[i][j]) {
        unionParent(parent, i + 1, j + 1);
      }
    }
  }

  let flag = true;
  for (let i = 0; i < m - 1; i++) {
    if (findParent(parent, routes[i]) !== findParent(parent, routes[i + 1])) {
      flag = false;
      break;
    }
  }
  return flag ? 'YES' : 'NO';
}

console.log(solution(n, m, arr, routes));
