// 50-generate-random-password.js
function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
console.log(generatePassword(10));
console.log(generatePassword(15));
console.log(generatePassword(20));
// This code generates a random password of a specified length using a combination of lowercase letters, uppercase letters, digits, and special characters. It prints three different passwords of lengths 10, 15, and 20 to the console.