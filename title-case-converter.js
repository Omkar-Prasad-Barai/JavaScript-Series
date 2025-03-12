// 39-title-case-converter.js
function toTitleCase(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
console.log(toTitleCase("hello omkar prasad")); // Hello Omkar Prasad
console.log(toTitleCase("javaScript is awesome")); // Javascript Is Awesome
console.log(toTitleCase("openAI is the future")); // Openai Is The Future