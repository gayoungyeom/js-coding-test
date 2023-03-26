//최소힙
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let cur = 0;

    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      //루트 노드의 값이 더 큰 경우 swap
      if (x > this.heap[smallerChild]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[cur],
        ];
        cur = smallerChild;
      } else {
        break;
      }
    }
  }
}

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [t, ...rest] = input;
t = +t;

let loop = t;
const arr = [];
while (loop--) {
  let [n, ...next] = rest;
  n = +n;
  rest = next.slice(n);
  arr.push(next.slice(0, n).map((str) => str.split(' ').map((v) => +v)));
}

function solution(t, arr) {
  let ans = '';
  for (let i = 0; i < t; i++) {
    const map = arr[i];
    const n = map.length;
    let d = Array.from(Array(n), () => Array(n).fill(Infinity));

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const pq = new PriorityQueue();
    let sx = 0;
    let sy = 0;
    pq.push([map[sx][sy], sx, sy]);
    d[sx][sy] = map[sx][sy];

    while (!pq.empty()) {
      const [cost, x, y] = pq.pop();

      if (d[x][y] < cost) continue;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        const nCost = cost + map[nx][ny];
        if (nCost < d[nx][ny]) {
          d[nx][ny] = nCost;
          pq.push([nCost, nx, ny]);
        }
      }
    }

    ans += `${d[n - 1][n - 1]}\n`;
  }

  return ans;
}

console.log(solution(t, arr));
