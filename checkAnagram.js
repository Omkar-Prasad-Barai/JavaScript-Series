let str1 = "listen", str2 = "silent";
let isAnagram = str1.split("").sort().join("") === str2.split("").sort().join("");
console.log("Anagram?", isAnagram);
// This code checks if two strings are anagrams by sorting the characters of each string and comparing them. The result is printed to the console.