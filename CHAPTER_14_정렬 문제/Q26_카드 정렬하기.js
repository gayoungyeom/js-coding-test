/**
 * 먼저 더하는 카드 묶음이 n-1번씩 더 더해지므로, 먼저 더하는 값들이 작아야 한다.
 * 즉, 매 순간 가장 작은 값 두개씩 더해 나가면 된다.
 */

//최소힙
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
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

let [n, ...arr] = input;
n = +n;
arr = arr.map((v) => +v);

function solution(n, arr) {
  arr.sort((a, b) => a - b);

  const pq = new PriorityQueue();
  for (const card of arr) {
    pq.push(card);
  }

  let sum = 0;
  let result = 0;
  while (pq.size() !== 1) {
    const first = pq.pop();
    const second = pq.pop();
    sum = first + second;
    result += sum;
    pq.push(sum);
  }

  return result;
}

console.log(solution(n, arr));
