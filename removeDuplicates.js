let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique);
// This code removes duplicates from an array by converting it to a Set and then back to an array, printing the unique elements to the console.