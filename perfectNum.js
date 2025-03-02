let n = 28, sum = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) sum += i;
}
console.log(sum === n ? "Perfect number" : "Not perfect");
// This code checks if a number is a perfect number (a number that is equal to the sum of its proper divisors) and prints the result to the console. In this case, 28 is a perfect number because 1 + 2 + 4 + 7 + 14 = 28.