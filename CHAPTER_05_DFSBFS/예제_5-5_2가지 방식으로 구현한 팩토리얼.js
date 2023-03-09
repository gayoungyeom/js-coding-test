const factorialIterative = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const factorialRecursive = (n) => {
  if (n < 2) return 1;
  return n * factorialRecursive(n - 1);
};

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
