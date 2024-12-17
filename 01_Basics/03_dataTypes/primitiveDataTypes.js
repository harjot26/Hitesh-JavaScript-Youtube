//* There are 7 primitive data types:
//? number, string, boolean, bigInt, symbol, null, undefined

//* Number Data Types:
let age = 19; // Integer
let price = 19.9; // Decimal number
let infinity = 1 / 0; // Infinity

console.log(infinity);

//* Special case:
//? Infinity(e.g., dividing by 0: 1/0 gives infinity)
//! NaN (Not a Number, e.g., parseInt("hello"))

//* String Data Types:
let name = "Harry"; // Double quotes
let firstName = "Rita"; // Single quote
let temp = `Hi, ${firstName}`; // Template Literal (allows variables inside)

//* Boolean Data Types:
//? Represents true or false values(used for conditions)

let isStudent = true;
let hasGraduated = false;

//* Undefined Data Types:
//? A variable declared but the value is not assigned

let x; // undefined

//* Null Data Types:
//? Represents 'nothing' or an intentional empty value.

let user = null; // no user assigned
console.log(typeof null); // type of null is object.

//* Symbol Data Types:
//? Represents a unique and immutable values, often used as object keys.

let uniqueKey = Symbol("id");
console.log(typeof uniqueKey); // type of Symbol is symbol.

//* BigInt Data Types:
//? Represents a very large number(larger than Number can handle)

let bigNumber = 123456789012345678901234567890n; // Add `n` at the end
