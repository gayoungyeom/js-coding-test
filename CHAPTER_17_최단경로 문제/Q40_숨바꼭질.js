class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  empty() {
    return this.size === 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.empty()) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }

  pop() {
    if (this.empty()) return;
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    return data;
  }
}

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  let graph = Array.from(Array(n + 1), () => []);
  for (const [u, v] of arr) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let d = [...Array(n + 1).fill(Infinity)];

  const q = new Queue();
  q.push(1);
  d[1] = 0;

  while (!q.empty()) {
    const cur = q.pop();

    for (const node of graph[cur]) {
      if (d[node] > d[cur] + 1) {
        d[node] = d[cur] + 1;
        q.push(node);
      }
    }
  }

  let max = 0;
  let maxIdx = 0;
  for (let i = 1; i <= n; i++) {
    if (max < d[i]) {
      max = d[i];
      maxIdx = i;
    }
  }

  const cnt = d.filter((v) => v === max).length;

  return [maxIdx, max, cnt].join(' ');
}

console.log(solution(n, m, arr));
