const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (target === arr[mid]) return mid;
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0,
  end = n - 1;
console.log(binarySearch(arr, target, start, end) + 1);
