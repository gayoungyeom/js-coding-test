let d = [...Array(100).fill(0)];

const fibo = (x) => {
  console.log(`f(${x})`);
  if (x === 1 || x === 2) return 1;

  if (d[x] != 0) return d[x];
  return (d[x] = fibo(x - 1) + fibo(x - 2));
};

fibo(6);
