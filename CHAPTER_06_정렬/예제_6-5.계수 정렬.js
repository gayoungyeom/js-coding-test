const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const count = [...Array(Math.max(...arr) + 1).fill(0)];

arr.forEach((num) => count[num]++);

let sorted = '';
for (let num = 0; num < count.length; num++)
  sorted += num.toString().repeat(count[num]);
console.log([...sorted]);
