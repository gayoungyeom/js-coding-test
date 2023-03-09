let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < array.length; i++) {
  for (let j = i; j > 0; j--) {
    if (array[j - 1] < array[j]) break;
    [array[j], array[j - 1]] = [array[j - 1], array[j]];
  }
}

console.log(array);
