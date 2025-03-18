// 46-count-words.js
const sentence = "Welcome to JavaScript programming!";
const count = sentence.trim().split(/\s+/).length;
console.log("Word count:", count); // 4
// This code counts the number of words in a sentence by splitting the string on whitespace and counting the resulting array elements, then prints the count to the console.