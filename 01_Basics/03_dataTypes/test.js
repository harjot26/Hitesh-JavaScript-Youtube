//* Number Manipulation

const a = 5;
const b = 8;

const Addition = () => {
  return a + b;
};

console.log(Addition());

const Subtraction = () => {
  return b - a;
};

console.log(Subtraction());

const Multiplication = () => {
  return a * b;
};

console.log(Multiplication());

const Divide = () => {
  return a / b;
};

console.log(Divide());

const Remainder = () => {
  return a % b;
};

console.log(Remainder());

//* String Manipulation

let firstName = "Sunny";
let greeting = `Hello, ${firstName}`;
let upperCase = firstName.toUpperCase();
let lowerCase = upperCase.toLowerCase();
let value = firstName.length;

console.log(firstName, greeting, upperCase, lowerCase, value);

//* Boolean Manipulation

let isRaining = true;
let temperature = 29;

if (isRaining === true) {
  console.log("Take an Umbrella");
} else if (temperature >= 30) {
  console.log("It's hot");
} else {
  console.log("Enjoy Your Day");
}

//* Undefined and Null Manipulation

let x;

console.log(typeof x, x); // typeOf x is undefined, and value of x variable is undefined.

let y = null;
console.log(y, typeof y); // value of x is null and typeOf y is object.

//* Array Manipulation
// const fruits = ["Apple", "Mango", "Cherry"];
let fruits = ["Apple", "Mango", "Cherry"];
console.log(fruits);

console.log(fruits[0], fruits[2]);

fruits.push("Orange"); // This one will not update the value on the original Array.
console.log(fruits);

//* Spread Operator pushing the value to the original Array.
fruits = [...fruits, "Kiwi"]; //* It will through me an error like TypeError: Assignment to constant variable, since I'm using const keyword in front of fruits array variable and I'm trying to modify the original Array, so it won't allow me to do because it is constant.
console.log(fruits);

fruits.splice(0, 2, "Grapes");
console.log(fruits); // Apple got removed and Grapes comes to this place

fruits.splice(2, 1); // Through splice method we can remove or add any value in the existing array
// with the above one I'm removing the value on the 2 index from existing array.
console.log(fruits);

//* Object Manipulation
let person = {
  firstName: "Jaz",
  age: 18,
  isStudent: false,
};

console.log(person.firstName, person.age);

// using dot notation with the object name we can add a new property in a existing object.
person.hobby = "cooking";

// we can add properties using bracket notation as well in an existing object.
person["gender"] = "Male";

person.age = 19;

console.log(person);

//* typeOf operator Manipulation
const num = 2;
const str = "Hi";
const bool = true;
let uni;
const nu = null;
const arr = [1, 2];

const nobody = {
  job: "IT",
};

console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(uni, typeof uni);
console.log(nu, typeof nu);
console.log(arr, typeof arr);
console.log(nobody, typeof nobody);

//* Type Coercion

let s = "10";
let t = 5;

console.log(s + t);
console.log(s - t);

//* BigIn Manipulation

// it wil generate the maximum number of big int value.
let big = BigInt(Number.MAX_SAFE_INTEGER);
// let mul = big * 2; //* TypeError: Cannot mix BigInt and other types, use explicit conversions
let mul = big * 2n;
let normalNum = 10;
// let result = big + normalNum; //* TypeError: Cannot mix BigInt and other types, use explicit conversions
let result = big + BigInt(normalNum);
console.log(big);
console.log(mul);
console.log(result);

//* Symbol Manipulation
let sym = Symbol("Id"); // Creates a unique symbol
let symb = Symbol("Id"); // Creates another unique symbol

console.log(sym === symb); // False, because both symbols are different only.

const correctAnswer = "4";
const userAnswer = prompt("What is 2 + 2?");

if (userAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Try again");
}
