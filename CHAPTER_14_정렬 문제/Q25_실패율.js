const n = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(n, stages) {
  const stageCnt = [...Array(n + 2).fill(0)];
  for (const stage of stages) {
    stageCnt[stage]++;
  }

  let p = stages.length;
  const fail = [];
  for (let i = 1; i <= n; i++) {
    const x = stageCnt[i]; //i번 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수
    p -= stageCnt[i - 1]; //스테이지에 도달한 플레이어 수
    fail.push([x / p, i]); //[실패율, 스테이지]
  }

  fail.sort((a, b) => b[0] - a[0]);

  return fail.map((v) => v[1]);
}

console.log(solution(n, stages));
