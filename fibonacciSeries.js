let n = 7, a = 0, b = 1;
console.log(a);
console.log(b);
for(let i = 2; i < n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
// This code generates the Fibonacci series up to the nth term (7 in this case) and prints each term to the console.