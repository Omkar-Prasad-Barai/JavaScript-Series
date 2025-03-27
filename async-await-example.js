// 55-async-await-example.js
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("Async/Await Data"), 1000));
}

getData();
// This code defines an asynchronous function `getData` that uses `await` to wait for the result of the `fetchData` function, which returns a Promise. If the Promise resolves successfully, it logs the data; if it rejects, it catches the error and logs it. The `fetchData` function simulates an asynchronous operation using `setTimeout`.