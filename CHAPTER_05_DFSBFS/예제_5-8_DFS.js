const dfs = (graph, v, visited) => {
  //1. 탐색 시작 노드 방문 처리
  visited[v] = true;
  console.log(v);

  //2. 탐색 노드의 인접 노드 확인
  for (const cur of graph[v]) {
    if (!visited[cur]) {
      dfs(graph, cur, visited);
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

dfs(graph, 1, visited);
