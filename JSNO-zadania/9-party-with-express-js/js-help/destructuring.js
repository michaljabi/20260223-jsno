const values = [2, 3, 5];


const myFive = values[2];

console.log(myFive);


// Destructuring:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
//

const [,,myFive2, mysix = 61] = values;

console.log(myFive2);
console.log(mysix);