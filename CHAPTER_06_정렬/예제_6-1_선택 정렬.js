let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++) {
  let minIdx = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[minIdx] > array[j]) {
      minIdx = j;
    }
  }
  [array[i], array[minIdx]] = [array[minIdx], array[i]];
}

console.log(array);
