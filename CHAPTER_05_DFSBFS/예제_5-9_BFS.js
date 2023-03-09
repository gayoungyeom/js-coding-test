const bfs = (graph, start, visited) => {
  //1. 탐색 시작 노드 큐에 넣고 방문 처리
  const q = new Queue(); //연결 리스트로 구현한 큐 사용
  q.enqueue(start);
  visited[start] = true;

  while (!q.empty()) {
    const v = q.dequeue();
    console.log(v);

    //2. 탐색 노드의 인접 노드 확인
    for (const cur of graph[v]) {
      if (!visited[cur]) {
        q.enqueue(cur);
        visited[cur] = true;
      }
    }
  }
};

let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = [...Array(9).fill(false)];

bfs(graph, 1, visited);

//추가) 배열 큐 사용
const bfs2 = (graph, start, visited) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while (q.length !== 0) {
    const v = q.shift();
    console.log(v);

    for (const cur of graph[v]) {
      if (!visited[cur]) {
        q.push(cur);
        visited[cur] = true;
      }
    }
  }
};
