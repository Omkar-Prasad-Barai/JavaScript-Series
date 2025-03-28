// 56-array-flatten.js
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = nestedArray.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
