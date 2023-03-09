const graph = Array.from(Array(3), () => []);

//[노드, 거리] 형식으로 저장
graph[0].push([1, 7]);
graph[0].push([2, 5]);

graph[1].push([0, 7]);

graph[2].push([0, 5]);

console.log(graph);

//or
const graph2 = [
  [
    [1, 7],
    [2, 5],
  ],
  [[0, 7]],
  [[0, 5]],
];

//객체로도 표현 가능
const graph3 = {
  0: [
    [1, 7],
    [2, 5],
  ],
  1: [[0, 7]],
  2: [[0, 5]],
};

const graph4 = {
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
};
