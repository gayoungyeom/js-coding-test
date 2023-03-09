let arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];
const n = arr.length;

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const p = arr[0]; //피벗은 첫 번째 원소
  const tail = arr.slice(1); //피벗을 제외한 배열

  const leftArr = tail.filter((v) => v <= p); //분할된 왼쪽 부분 (피벗보다 작은 값)
  const rightArr = tail.filter((v) => v > p); //분할된 오른쪽 부분 (피벗보다 큰 값)

  return [...quickSort(leftArr), p, ...quickSort(rightArr)];
};

console.log(quickSort(arr, 0, n - 1));
