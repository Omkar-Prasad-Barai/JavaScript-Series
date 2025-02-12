let n = 17, isPrime = true;
for(let i = 2; i <= Math.sqrt(n); i++) {
  if(n % i === 0) {
    isPrime = false; break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
// This code checks if a number n is prime by testing divisibility from 2 to the square root of n and prints the result to the console.