// 35-sort-numeric-array.js
const arr = [5, 1, 8, 3, 2];
arr.sort((a, b) => a - b);
console.log("Ascending:", arr);
arr.sort((a, b) => b - a);
console.log("Descending:", arr);
// This code sorts an array of numbers in ascending and descending order using the sort method with a comparison function.