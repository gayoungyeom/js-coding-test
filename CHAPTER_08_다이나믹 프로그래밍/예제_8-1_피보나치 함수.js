const fibo = (x) => {
  if (x === 1 || x === 2) return 1;
  return fibo(x - 1) + fibo(x - 2);
};

console.log(fibo(4));
