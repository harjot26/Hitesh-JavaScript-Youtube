// const checking;   //! Error: 'const' declarations must be initialized.

const testing = 1;
// testing = 2;     //! In Simple Terms we cannot update the constant value.
console.log(testing); //! Error: TypeError: Assignment to constant variable.

const number = 42;
try {
  //   number = 102; //!TypeError: Assignment to constant variable.
  //   console.log(number); //!TypeError: Assignment to constant variable.
  //   const number = 99;  //* In this we have created a new constant and this belongs in the block scope only.
  //   console.log(number); //? O/p: 99
} catch (err) {
  console.log(err); //!TypeError: Assignment to constant variable.
}

console.log(number); //? O/p: 42

const name1 = "student";
console.log(name1);

const name2 = "Sita", //* both name 2 and 3 are constant variable, this one way to create the constant variables.
  name3 = "Krishna";

console.log(name2, name3);
