function solution(str) {
  const n = str.length;
  let ans = n;

  //i는 압축 단위
  for (let i = 1; i <= ~~(n / 2); i++) {
    const result = [];
    for (let j = 0; j < n; j += i) {
      const sub = str.slice(j, i + j);
      result.push(sub);
    }

    let compressed = '';
    let cnt = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        cnt++;
      } else {
        compressed += `${cnt === 1 ? '' : cnt}${result[j]}`;
        cnt = 1;
      }
    }

    ans = Math.min(ans, compressed.length);
  }

  return ans;
}
