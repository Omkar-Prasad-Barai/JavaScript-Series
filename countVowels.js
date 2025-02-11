let str = "hello world";
let count = (str.match(/[aeiou]/gi) || []).length;
console.log("Vowel count:", count);
// This code counts the number of vowels in a string by using a regular expression to match all vowels (case-insensitive) and prints the count to the console.