const n = 99;
let d = [...Array(n + 1).fill(0)];

const fibo = (x) => {
  d[1] = d[2] = 1;

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[x];
};

console.log(fibo(n));
