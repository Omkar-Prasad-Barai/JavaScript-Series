// 37-vowel-counter.js
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("OpenAI")); // 3