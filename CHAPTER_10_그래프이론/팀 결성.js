const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
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

  //parent 초기화
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 0; i <= n; i++) {
    parent[i] = i;
  }

  let result = '';
  for (const value of arr) {
    const [type, u, v] = value;
    if (type === 0) {
      unionParent(parent, u, v);
    } else {
      result += parent[u] === parent[v] ? 'YES\n' : 'NO\n';
    }
  }
  return result;
}

console.log(solution(n, m, arr));
