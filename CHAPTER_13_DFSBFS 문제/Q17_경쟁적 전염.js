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

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    return data;
  }
}

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nk, ...rest] = input;
const [n, k] = nk.split(' ').map((v) => +v);
const arr = rest.slice(0, n).map((str) => str.split(' ').map((v) => +v));
const [s, x, y] = rest[n].split(' ').map((v) => +v);

function solution(n, k, arr, s, x, y) {
  const virus = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) {
        virus.push([arr[i][j], 0, i, j]);
      }
    }
  }
  virus.sort((a, b) => a[0] - b[0]);

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const q = new Queue();
  for (const v of virus) q.enqueue(v);

  while (!q.isEmpty()) {
    const [num, time, x, y] = q.dequeue();

    if (time === s) break;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      if (arr[nx][ny] == 0) {
        arr[nx][ny] = num;
        q.enqueue([num, time + 1, nx, ny]);
      }
    }
  }

  return arr[x - 1][y - 1];
}

console.log(solution(n, k, arr, s, x, y));
