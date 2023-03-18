//시계 방향으로 90도 회전
const rotateMatrix90 = (arr) => {
  const n = arr.length; //행 길이
  const m = arr[1].length; //열 길이
  const result = Array.from(Array(n), () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[j][n - i - 1] = arr[i][j];
    }
  }
  return result;
};

const check = (arr) => {
  const n = arr.length / 3;
  for (let i = n; i < 2 * n; i++) {
    for (let j = n; j < 2 * n; j++) {
      if (arr[i][j] != 1) return false;
    }
  }
  return true;
};

function solution(key, lock) {
  const n = lock.length;
  const m = key.length;

  //n + 2*(m-1) < 3*n 이므로, 편의상 3배 확장
  const newLock = Array.from(Array(n * 3), () => Array(n * 3).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newLock[i + n][j + n] = lock[i][j];
    }
  }

  for (let k = 0; k < 4; k++) {
    key = rotateMatrix90(key);
    for (let x = 0; x < n * 2; x++) {
      for (let y = 0; y < n * 2; y++) {
        //자물쇠에 열쇠 넣기
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < m; j++) {
            newLock[x + i][y + j] += key[i][j];
          }
        }

        if (check(newLock)) return true;

        //자물쇠에서 열쇠  빼기
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < m; j++) {
            newLock[x + i][y + j] -= key[i][j];
          }
        }
      }
    }
  }

  return false;
}
