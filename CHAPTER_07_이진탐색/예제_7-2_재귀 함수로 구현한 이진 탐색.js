const binarySearch = (arr, target, start, end) => {
  if (start > end) return -1; //원소가 존재하지 않는 경우

  const mid = ~~((start + end) / 2);
  if (target === arr[mid]) return mid;
  else if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
};

const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0,
  end = n - 1;
console.log(binarySearch(arr, target, start, end) + 1);
