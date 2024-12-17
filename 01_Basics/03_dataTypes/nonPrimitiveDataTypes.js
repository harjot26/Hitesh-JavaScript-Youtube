//* Non primitive are more complex and mutable(can be changed).
// like: object, array and function.

//* Object:
// A collection of key-value pairs, where keys are strings(or Symbol) and values can be anything.

let user = {
  firstName: "Jerry",
  age: 30,
  isStudent: false,
};

console.log(user.firstName); // Jerry

//* Array
// A Special Type of Object for storing ordered lists of values.

let fruits = ["Apple", "Mango", "Cherry"];
console.log(fruits[1]); // Mango

//* Function
// A block of code designed to perform a task. Functions are object too!

function sayHello() {
  return "Hello";
}

console.log(sayHello()); // Hello
