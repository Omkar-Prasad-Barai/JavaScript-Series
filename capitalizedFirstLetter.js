let str = "welcome to javascript";
let capitalized = str
  .split(" ")
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");
console.log(capitalized);
// This code capitalizes the first letter of each word in a string by splitting the string into words, capitalizing the first letter of each word, and then joining them back together. The result is printed to the console.