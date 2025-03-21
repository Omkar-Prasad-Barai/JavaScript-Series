// 48-armstrong-number.js
function isArmstrong(num) {
  const str = num.toString();
  const sum = str.split('').reduce((acc, d) => acc + Math.pow(parseInt(d), str.length), 0);
  return sum === num;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false