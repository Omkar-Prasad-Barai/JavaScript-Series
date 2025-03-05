// 33-array-unique-values.js
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
// This code creates a new Set from the numbers array to remove duplicates and then converts it back to an array using the spread operator.