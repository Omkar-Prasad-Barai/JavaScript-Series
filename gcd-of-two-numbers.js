// 43-gcd-of-two-numbers.js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6
// This code defines a function to calculate the greatest common divisor (GCD) of two numbers using recursion and prints the result to the console.