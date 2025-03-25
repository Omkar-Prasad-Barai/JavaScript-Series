// 54-promise-example.js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Data fetched successfully!");
      else reject("Error fetching data.");
    }, 1000);
  });
}

fetchData()
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
// This code defines a function `fetchData` that returns a Promise. The Promise simulates an asynchronous operation (like fetching data) using `setTimeout`. If the operation is successful, it resolves with a success message; otherwise, it rejects with an error message. The `fetchData` function is called, and the result is handled using `.then()` for success and `.catch()` for errors.