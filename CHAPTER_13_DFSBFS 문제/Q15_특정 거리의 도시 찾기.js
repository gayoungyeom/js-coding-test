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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [nmkx, ...arr] = input;
  const [n, m, k, x] = nmkx.split(' ').map((v) => +v);
  arr = arr.map((str) => str.split(' ').map((v) => +v));

  function solution(n, m, k, x, arr) {
    const graph = Array.from(Array(n + 1), () => []);
    for (const [u, v] of arr) {
      graph[u].push(v);
    }

    let dist = [...Array(n + 1).fill(-1)];
    dist[x] = 0;

    const q = new Queue();
    q.enqueue(x);

    while (!q.isEmpty()) {
      const cur = q.dequeue();
      for (const next of graph[cur]) {
        if (dist[next] === -1) {
          dist[next] = dist[cur] + 1;
          q.enqueue(next);
        }
      }
    }

    const result = [];
    for (const i in dist) {
      if (dist[i] === k) result.push(+i);
    }
    result.sort((a, b) => a - b);

    let print = '';
    for (const r of result) {
      print += `${r}\n`;
    }

    return result.length ? print : -1;
  }

  console.log(solution(n, m, k, x, arr));

  process.exit();
});
