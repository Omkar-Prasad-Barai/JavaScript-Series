let n = 5;
let timer = setInterval(() => {
  if (n === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  } else {
    console.log(n--);
  }
}, 1000);
// This code implements a countdown timer that starts from n (5 in this case) and decrements every second, printing the current value until it reaches zero, at which point it prints "Time's up!" and stops the timer.