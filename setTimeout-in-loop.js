// 57-setTimeout-in-loop.js
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log("Timer:", i);
  }, i * 1000);
}
// Prints 1,2,3,4,5 with 1-second intervals
