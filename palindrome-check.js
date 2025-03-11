// 38-palindrome-check.js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true        