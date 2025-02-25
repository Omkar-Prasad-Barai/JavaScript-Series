setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
// This code sets up an interval that runs every second, printing the current time in a human-readable format to the console. It uses the `toLocaleTimeString` method to format the time according to the user's locale settings.