// 34-object-cloning.js
const original = { name: "Omkar", age: 21 };
const clone = { ...original };
console.log(clone);
// This code creates a shallow copy of the original object using the spread operator and prints the cloned object to the console. The clone will have the same properties as the original object, but it is a separate object in memory.