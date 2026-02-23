
// Zadanie 2.1

// Wyodrębnij do innego pliku LR_PADDING
// I używając składni require() [CommonJS] zaimportuj tutaj.
// Samodzielnie nazwij plik z LR_PADDING.

// CommonJS import
// const constants = require("./constants");
// console.log(constants.LR_PADDING);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
const { LR_PADDING } = require("./constants");

const text = "Witaj w generatorze bannerów [!]"
const border = "*".repeat(text.length + LR_PADDING);
console.log(`
${border}
*   ${text.toUpperCase()}   *
${border}
`)

// python """

// console.log("Hello
//     World!")

// setInterval(() => {
//     console.log('!')
// }, 2000)