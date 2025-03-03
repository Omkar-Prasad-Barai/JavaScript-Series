// 31-random-quote-generator.js
const quotes = [
  "Be yourself; everyone else is already taken.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You only live once, but if you do it right, once is enough.",
  "In the middle of difficulty lies opportunity."
];
const randomIndex = Math.floor(Math.random() * quotes.length);
console.log("Quote of the day:", quotes[randomIndex]);
// This code generates a random quote from an array of quotes. It calculates a random index based on the length of the quotes array and prints the selected quote to the console. The quotes are motivational and inspirational in nature.