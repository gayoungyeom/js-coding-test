const recursive = (i) => {
  if (i === 10) return;

  console.log(`${i}번째 재귀 함수에서 ${i + 1}번째 재귀 함수를 호출합니다.`);
  recursive(i + 1);
  console.log(`${i}번째 재귀 함수를 종료합니다.`);
};

recursive(1);
