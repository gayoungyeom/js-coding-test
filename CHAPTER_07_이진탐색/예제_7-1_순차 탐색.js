const sequentialSearch = (n, target, arr) => {
  for (let i = 0; i < n; i++) {
    if (target === arr[i]) return i + 1;
  }
};

const n = 5;
const target = 'Dongbin';
const arr = ['Haneul', 'Jonggu', 'Dongbin', 'Taeil', 'Sangwook'];

console.log(sequentialSearch(n, target, arr));
