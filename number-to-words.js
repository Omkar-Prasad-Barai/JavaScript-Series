// 44-number-to-words.js
const number = 123;
const words = number.toString().split('').map(d => 
  ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][parseInt(d)]
).join(' ');
console.log(words); // One Two Three
// This code converts each digit of a number into its corresponding word representation and prints the result to the console.