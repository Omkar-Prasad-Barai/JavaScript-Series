let num = 153, sum = 0, temp = num;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10);
}
console.log(num === sum ? "Armstrong" : "Not Armstrong");
// This code checks if a number is an Armstrong number (a number that is equal to the sum of its own digits each raised to the power of the number of digits) and prints the result to the console. In this case, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.