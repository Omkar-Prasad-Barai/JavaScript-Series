// 40-factorial-recursive.js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
// This code defines a recursive function to calculate the factorial of a number n. The base case is when n is 0, returning 1. For any other positive integer, it multiplies n by the factorial of (n - 1). The example calculates the factorial of 5, which is 120.