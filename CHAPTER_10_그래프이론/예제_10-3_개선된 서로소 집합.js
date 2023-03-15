//특정 원소가 속한 집합 찾기 (루트 찾기)
const findParent = (parent, x) => {
  if (parent[x] === x) return parent[x];
  return (parent[x] = findParent(parent, parent[x]));
};

//두 원소가 속한 집합을 합치기 (루트 갱신)
const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const edges = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, arr) {
  //부모 테이블 초기화
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }

  //union 연산 수행
  for (const edge of edges) {
    const [a, b] = edge;
    unionParent(parent, a, b);
  }

  //각 원소가 속한 집합 출력
  let sets = '';
  for (let i = 1; i <= n; i++) {
    sets += findParent(parent, i);
  }

  console.log(`각 원소가 속한 집합: ${sets.split('').join(' ')}`);
  console.log(`부모 테이블: ${parent.slice(1, n).join(' ')}`);
}

solution(n, arr);
