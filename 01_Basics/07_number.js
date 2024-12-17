const score = 400.6754565;
console.log(score); // O/p: 400

//* Created a number object with the new keyword
const balance = new Number(100);
console.log(balance); // O/p: [Number: 100]

//* We converted a number into a string.
console.log(balance.toString()); // O/p: 100
//* We are checking length of the string.
console.log(balance.toString().length); // O/p: 3

//* Using to fixed value:
console.log(balance.toFixed(1)); // O/p: 100.0
console.log(score.toFixed()); // O/p: 401

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // O/p: 124

//* Note:
//* Use toFixed() when you need to control the number of decimal places.
//* Use toPrecision() when you need to control the total significant digits.

//* toPrecision doesn't consider 0 a count, so the actually counting starts from the number for ex in the below 4568 are altogether are 4 significant but still the zero will be display.
let num = 0.00456789;
let result = num.toPrecision(4);
console.log(result); // "0.004568"

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // O/p: 1,000,000 by default it is in us format in $.
console.log(hundreds.toLocaleString("en-IN")); // O/p: 10,00,000, change to Indian Format
