let x = 1; // global or outer variable
//? since inside the block scope new variable was not initialized, the global variable will be modify with the value,
//? so now the value for let x is updated to 2.

//* {} this is block scope
if (x === 1) {
  x = 2; //? we have updated the new value for x without creating a new variable inside the block scope, so this will gonna reflect on the outer variable as well, so the value for outer variable x will be going to modify to 2.
  console.log(x); // o/p 2
}

console.log(x); // o/p 2

let y = 1;

if (y === 1) {
  let y = 2; //? it created a new variable inside the block scope, so that's why the output is 2 and it won't be reflecting or making any changes to the global or outer variable.
  console.log(y); // o/p 2
}

console.log(y); // op 1

{
  //* This thing comes under Temporal Dead Zone(TDZ)
  //* TDZ starts from start of the block until the code execution reaches to the variable initialization or declared.
  //!   console.log(x); //ReferenceError: Cannot access 'x' before initialization
  let x;
}

//* We can declare let variable without initializer the value will be undefined.
let syntax; // o/p: Undefined

let z = 1; // o/p: 1

//? Both have the let keyword used to initialized the variable.
let s = 1,
  t = 3;

console.log("s:", s, "t:", t); // O/p: 1, 3

let v,
  j = 3;
console.log(v, j); // o/p: undefined, 3

{
  //* TDZ starts at beginning of scope
  let func = () => console.log(letVar);
  //* Within the TDZ letVar access throws `ReferenceError`
  let letVar = 4; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}

let email = "hi@gmail.com";
// let and var we can create a variable without passing any initializer by default it will undefined.
let visible; // undefined
//? We cannot reinitiate or update the email with the let keyword but we can update without let keyword just talking the same variable name with that we can update.
//! let email = "ku@gmail.com"; // SyntaxError: Identifier 'email' has already been declared

// So in let keyword variable we can update the value.
email = "ji@gmail.com"; // Now the let email variable has been updated to ji@gmail.com instead of hi@gmail.com.
