// 32-is-prime.js
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
// This code checks if a number is prime (a number greater than 1 that has no positive divisors other than 1 and itself) and prints the result to the console. In this case, 7 is prime, while 10 is not.