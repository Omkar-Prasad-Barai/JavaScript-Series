let year = 2024;
let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(leap ? "Leap Year" : "Not Leap Year");
// This code checks if a given year is a leap year. A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400. In this case, 2024 is a leap year because it is divisible by 4 and not by 100.