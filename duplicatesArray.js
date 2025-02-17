let arr = [2, 4, 5, 2, 6, 4];
let duplicates = arr.filter((val, i) => arr.indexOf(val) !== i);
console.log([...new Set(duplicates)]);
// This code finds duplicates in an array by filtering elements that appear more than once and then removes duplicates from the result using Set, printing the unique duplicates to the console.